import { readablePrice, foodDetailPath, values, strings } from "../assets/store";
import { useNavigate } from "react-router-dom";

interface FoodItem {
	name: string;
	price: number;
	prepare_time: number;
	taglist: Array<string>;
	image: string;
	type: string;
	description: string;
}

type FoodList = Record<string, FoodItem>;

export type { FoodItem, FoodList };

type FoodCardProps = FoodItem & {
	uuid: string;
};

export default function FoodCard(props: FoodCardProps) {
	const navigate = useNavigate();
	const openFoodDetails = (uuid: string) => {
		navigator.vibrate(values.vibrateDuration);
		navigate(foodDetailPath + uuid);
	};

	return (
		<div
			className="m-3 flex w-full cursor-pointer flex-col rounded-3xl shadow-xl transition-all duration-200 hover:scale-[1.01]"
			onClick={() => {
				openFoodDetails(props.uuid);
			}}
		>
			<img className="h-52 w-full rounded-t-2xl object-cover" src={props.image} />
			<div className="max-w-90 mx-6 my-4 grid grid-rows-3 gap-1 font-sans">
				<div className="justify-items-center text-3xl font-bold text-[--color-dark]">
					{props.name}
				</div>
				<div className="flex items-center justify-items-center gap-4 text-[--color-dark]">
					<span className="flex items-center justify-center gap-1">
						<i className="fa-solid fa-moped text-[--color-primary]"></i>
						<span className="text-[--color-gray]">{readablePrice(props.price)}</span>
					</span>
					<span className="flex items-center justify-center gap-1">
						<i className="fa-solid fa-clock text-primary"></i>
						<span className="text-[--color-gray]">
							{props.prepare_time} {strings.minutes}
						</span>
					</span>
				</div>
				<div className="flex gap-2">
					{props.taglist.map((tag, index) => {
						return (
							<span
								className="rounded-lg bg-[#f1f1f1] px-2 py-1 text-[--color-gray]"
								key={index}
							>
								{tag}
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
}
