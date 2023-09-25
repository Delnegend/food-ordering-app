import QuantitySelector from "./QuantitySelector";
import { readablePrice } from "../assets/store";
import { useState } from "react";
import type { FoodItem } from "./FoodCard";

export default function Topping(props: FoodItem) {
	const [addOnQuantity, setAddOnQuantity] = useState(0);

	return (
		<div className="z-30 mx-auto mt-8 flex w-screen max-w-screen-xl flex-row justify-start">
			<div className="shadow-md relative h-1/5 w-1/5 overflow-hidden rounded-lg pt-20">
				<img
					className="absolute left-0 top-0 h-full w-full object-cover"
					src={props.image}
					alt={props.name}
				/>
			</div>
			<div className="m-6 font-sans text-xl font-bold text-dark">{props.name}</div>
			<div className="mx-auto my-7 justify-evenly font-sans text-dark">
				{props.price * addOnQuantity === 0
					? readablePrice(0)
					: `${readablePrice(props.price * addOnQuantity)}`}
			</div>
			<div className="mx-0 my-6">
				<QuantitySelector
					minQuantity={0}
					maxQuantity={10}
					quantity={addOnQuantity}
					setQuantity={setAddOnQuantity}
				/>
			</div>
		</div>
	);
}
