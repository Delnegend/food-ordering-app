import _AppNameAndPfp from "./_AppNameAndPfp";
import _HamButton from "./_HamButton";
import _HamNavList from "./_HamNavList";
import _LogOutButton from "./_LogOutButton";
import _PfpNameEmailInHam from "./_PfpNameEmailInHam";
import { values } from "../../assets/store";
import { useEffect, useRef, useState } from "react";

interface HomeTopBarProps {
	avatarUrl: string;
	userName: string;
	userEmail: string;
	path: Record<
		string,
		{
			icon: string;
			path: string;
		}
	>;
}
export type { HomeTopBarProps };

export default function HomeTopBar(props: HomeTopBarProps) {
	const userName = props.userName ? props.userName : "Lorem Ipsum";
	const userEmail = props.userEmail ? props.userEmail : "example@example.com";

	const [isHamburgerMenuActive, setActiveHamburger] = useState(false);
	const hamMenuRef = useRef<HTMLDivElement>(null);
	const hamMenuInnerRef = useRef<HTMLDivElement>(null);

	const handleOutsideClick = (event: MouseEvent) => {
		const hamMenuExists: boolean = hamMenuRef.current !== null;
		const hamMenuInnerExists: boolean = hamMenuInnerRef.current !== null;
		const target: HTMLElement = event.target as HTMLElement;

		if (!hamMenuRef.current || !hamMenuInnerRef.current) {
			return;
		}

		const clickOutsideHamMenuInner =
			hamMenuExists &&
			hamMenuInnerExists &&
			hamMenuRef.current.contains(target) &&
			!hamMenuInnerRef.current.contains(target);

		if (clickOutsideHamMenuInner) {
			navigator.vibrate(values.vibrateDuration);
			setActiveHamburger(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [hamMenuRef, hamMenuInnerRef]);

	const isHamMenuActiveClass = isHamburgerMenuActive ? "translate-x-0" : "translate-x-[-100%]";
	const avatarElement = props.avatarUrl ? (
		<img src={props.avatarUrl} />
	) : (
		<i className="fa-solid fa-user fa-2xl text-[rgb(94 94 94)] text-xl"></i>
	);

	return (
		<div className="flex w-full flex-row items-center justify-between">
			<div>
				<_HamButton
					isHamburgerMenuActive={isHamburgerMenuActive}
					setActiveHamburger={setActiveHamburger}
				/>
				<nav
					className={`${isHamMenuActiveClass} fixed left-0 top-0 z-[1] h-full w-full transition-all`}
					ref={hamMenuRef}
				>
					<div
						className="w-[calc(100% - 2 * 2.2rem)] flex h-full w-full max-w-xs flex-col justify-between overflow-y-auto bg-white/90 px-[2.2rem] py-[2.4rem] backdrop-blur-md"
						ref={hamMenuInnerRef}
					>
						<div>
							<_PfpNameEmailInHam
								avatarUrl={props.avatarUrl}
								userName={userName}
								userEmail={userEmail}
								avatarElement={avatarElement}
							/>
							<_HamNavList path={props.path} />
						</div>
						<_LogOutButton />
					</div>
				</nav>
			</div>
			<_AppNameAndPfp avatarElement={avatarElement} />
		</div>
	);
}
