import { values } from "../../assets/store";

export default function _LogOutButton() {
	return (
		<button
			className="bottom-0 mx-auto my-0 flex cursor-pointer items-center justify-center rounded-full border-none bg-[#ff7f50] p-3 text-xl font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[lightsalmon]"
			onClick={() => navigator.vibrate(values.vibrateDuration)}
		>
			<i className="fa-regular fa-power-off fa-xl mr-4 items-center justify-center rounded-full bg-white p-2 text-base leading-none text-[#ff7f50]"></i>
			<span className="mr-2 text-white">Log Out</span>
		</button>
	);
}
