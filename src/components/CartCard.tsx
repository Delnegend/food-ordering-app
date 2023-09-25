import QuantitySelector from "./QuantitySelector";
import { values, readablePrice } from "../assets/store";
import type { FoodList } from "./FoodCard";

export default function CartCard(props: {
	uuid: string;
	quantity: number;
	foodList: FoodList;
	setQuantity: (quantity: number) => void;
}) {
	const totalPrice = props.foodList[props.uuid].price * props.quantity;

	return (
		<div className="mx-0 my-7 flex w-full flex-row items-center justify-between gap-5">
			<img
				className="h-28 w-28 rounded-3xl object-cover shadow-xl"
				src={props.foodList[props.uuid].image}
				alt={props.foodList[props.uuid].name}
			/>
			<div className="flex w-full flex-col justify-between font-sans">
				<div className="flex w-full items-start justify-between">
					<span className="text-2xl font-black text-dark">
						{props.foodList[props.uuid].name}
					</span>
					<button
						className="cursor-pointer border-none bg-transparent transition-all duration-300 ease-in-out hover:scale-110"
						onClick={() => {
							props.setQuantity(0);
							navigator.vibrate(values.vibrateDuration);
						}}
					>
						<i className="fa-solid fa-times text-xl text-dark"></i>
					</button>
				</div>
				<div className="text-xl text-gray"></div>
				<div className="flex flex-row items-center justify-between">
					<span className="text-xl font-black text-primary">
						{readablePrice(totalPrice)}
					</span>
					<QuantitySelector
						maxQuantity={values.maxQuantityPerItem}
						minQuantity={1}
						quantity={props.quantity}
						setQuantity={props.setQuantity}
					/>
				</div>
			</div>
		</div>
	);
}
