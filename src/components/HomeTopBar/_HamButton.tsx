import { values } from "../../assets/store";

export default function _HamButton(props: {
	isHamburgerMenuActive: boolean;
	setActiveHamburger: (value: boolean) => void;
}) {
	return (
		<button
			className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border-none shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
			onClick={() => {
				props.setActiveHamburger(!props.isHamburgerMenuActive);
				navigator.vibrate(values.vibrateDuration);
			}}
		>
			<i className="fa-solid fa-bars fa-2xl"></i>
		</button>
	);
}
