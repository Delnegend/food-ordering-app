import { readablePrice, values, strings } from "../assets/store";
import QuantitySelector from "../components/QuantitySelector";
import Topping from "../components/Topping";
import { useEffect, useRef, useState } from "react";
import type { FoodList } from "../components/FoodCard";

interface FoodDetailsProps {
	cartItems: Record<string, number>;
	addCartItems: (uuid: string, quantity: number) => void;
	foodList: FoodList;
}

export type { FoodDetailsProps };

export default function FoodDetailScreen(props: FoodDetailsProps) {
	const uuid = window.location.pathname.split("/")[2];
	const food = props.foodList[uuid];
	const [foodQuantity, setQuantity] = useState(0);
	const currentItemInCart = props.cartItems[uuid] ? props.cartItems[uuid] : 0;
	const maxQuantity = useRef(values.maxQuantityPerItem - currentItemInCart);

	useEffect(() => {
		const currentQuantity = props.cartItems[uuid] ? props.cartItems[uuid] : 0;

		maxQuantity.current = values.maxQuantityPerItem - currentQuantity;
	}, [props.cartItems, uuid]);

	return (
		<div className="z-[3] mx-auto mb-[--footbar-height] mt-8 flex min-h-[calc(100vh-var(--footbar-height)-2rem)] w-[--page-width] max-w-[--page-max-width] flex-col justify-between">
			{/* top-section */}
			<div className="flex flex-col gap-4">
				<div className="relative w-full overflow-hidden rounded-2xl pt-[60%] shadow-xl">
					<img
						className="absolute left-0 top-0 h-full w-full object-cover"
						src={food.image}
						alt={food.name}
					/>
					<button
						className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 shadow-xl transition-all duration-200 hover:scale-105 hover:bg-[lightsalmon]"
						onClick={() => {
							window.history.back();
							navigator.vibrate(values.vibrateDuration);
						}}
					>
						<i className="fa-thin fa-arrow-left"></i>
					</button>
				</div>
				<div className="font-sans text-4xl font-bold text-dark">{food.name}</div>
				<div className="flex flex-row gap-2 font-sans text-xl text-gray">
					<span>
						<i className="fa-solid fa-clock"></i>
					</span>
					<span className="text-primary">{strings.prepareTime}</span>
					<span className="text-primary">{food.prepare_time}</span>
					<span className="text-primary">{strings.minutes}</span>
				</div>
				<div className="flex flex-row items-center justify-between">
					<div className={`font-sans text-2xl font-bold text-primary after:text-base`}>
						{readablePrice(food.price)}
					</div>
					<QuantitySelector
						maxQuantity={maxQuantity.current}
						quantity={foodQuantity}
						setQuantity={setQuantity}
					/>
				</div>
				<div className="font-sans text-xl text-gray">{food.description}</div>
				<div className="flex flex-row items-center justify-between">
					<Topping {...props.foodList["497a38dd-d3a7-4c16-add1-7d18d1667632"]} />
				</div>
			</div>

			{/* add to cart button */}
			<button
				className="bottom-0 mx-auto mb-10 mt-8 flex cursor-pointer items-center justify-center rounded-full border-none bg-[--color-primary] p-4 pr-6 text-xl font-bold shadow-btn-primary transition-all duration-200 hover:scale-105 hover:bg-[lightsalmon]"
				onClick={() => {
					window.history.back();
					props.addCartItems(uuid, foodQuantity);
					navigator.vibrate(values.vibrateDuration);
				}}
			>
				<i className="fa-regular fa-shopping-cart fa-xl mr-4 flex h-4 w-4 items-center justify-center rounded-full bg-white p-6 text-2xl text-primary"></i>
				<span className="font-sans uppercase text-white">{strings.addToCart}</span>
			</button>
		</div>
	);
}
