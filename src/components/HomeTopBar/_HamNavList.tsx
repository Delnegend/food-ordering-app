import { values } from "../../assets/store";

export default function _HamNavList(props: {
	path: Record<string, { icon: string; path: string }>;
}) {
	return (
		<ul className="mx-0 my-7 list-none p-0">
			{Object.entries(props.path).map(([key, value]) => {
				return (
					<li
						key={key}
						className="m-0 flex select-none list-none flex-col justify-center p-0"
					>
						<button
							onClick={() => navigator.vibrate(values.vibrateDuration)}
							className="flex cursor-pointer items-center justify-center border-none bg-transparent px-0 py-4 transition-all duration-300 ease-in-out hover:scale-105"
						>
							<i
								className={`fa-duotone ${value.icon} fa-2xl mr-5 flex w-8 items-center justify-center text-2xl`}
							></i>
							<span className="flex grow items-center whitespace-nowrap font-sans text-xl">
								{key}
							</span>
						</button>
					</li>
				);
			})}
		</ul>
	);
}
