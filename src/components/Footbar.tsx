import { values } from "../assets/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type FootbarProps = Array<{
	icon: string;
	path: string;
	page: JSX.Element;
}>;

export type { FootbarProps };

export default function FootBar(props: { pages: FootbarProps }) {
	const navigate = useNavigate();
	const buttonData: FootbarProps = props.pages;
	const [currentPageIdx, setCurrentPageIdx]: [number, (index: number) => void] =
		useState<number>(0);

	// Set current page index to match the current path
	useEffect(() => {
		const currentPath = window.location.pathname;
		const currentPageIdx = buttonData.findIndex((button) => button.path === currentPath);

		setCurrentPageIdx(currentPageIdx);
	}, [buttonData]);

	const handleIconClick = (pageIdx: number) => {
		setCurrentPageIdx(pageIdx);
		navigate(buttonData[pageIdx].path);
		navigator.vibrate(values.vibrateDuration);
	};

	return (
		<nav className="fixed bottom-0 left-0 z-[1] m-auto h-[--footbar-height] w-full bg-white">
			<ul className="mx-auto my-0 flex h-full w-[--page-width] max-w-[--page-max-width] list-none items-center justify-around p-0">
				{buttonData.map((button, pageIdx) => {
					const activeClass =
						currentPageIdx === pageIdx ? "text-[#ff7f50] scale-110" : "";

					return (
						<li key={pageIdx} className="m-0 select-none">
							<button
								onClick={() => {
									handleIconClick(pageIdx);
								}}
								className="z-[-1] cursor-pointer border-none bg-transparent transition-all duration-300 after:absolute after:left-1/2 after:top-1/2 after:h-full after:w-3/5 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-transparent after:opacity-0 after:content-none hover:after:opacity-100"
							>
								<i
									className={`fa-solid fa-2xl ${button.icon} ${activeClass} text-[#cacfd2] transition-all duration-300`}
								/>
							</button>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
