export default function _PfpNameEmailInHam(props: {
	avatarUrl: string;
	userName: string;
	userEmail: string;
	avatarElement: React.ReactNode;
}) {
	return (
		<div className="flex flex-col items-start">
			<span
				className={`${
					props.avatarUrl ? "" : "flex items-center justify-center"
				} h-24 w-24 rounded-full font-sans shadow-xl`}
			>
				{props.avatarElement}
			</span>
			<span className="mt-8 select-none font-sans text-4xl font-bold">{props.userName}</span>
			<span className="">{props.userEmail}</span>
		</div>
	);
}
