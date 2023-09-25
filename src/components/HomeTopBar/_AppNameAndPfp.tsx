import { strings } from "../../assets/store";

export default function _AppNameAndPfp(props: { avatarElement: React.ReactNode }) {
	return (
		<>
			<div className="mt-[0.6rem] text-center font-sans text-2xl font-black uppercase text-[--color-dark]">
				{strings.appName}
			</div>

			<div className="flex h-14 w-14 items-center justify-center rounded-full shadow-xl">
				{props.avatarElement}
			</div>
		</>
	);
}
