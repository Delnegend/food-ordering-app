import { readablePrice, values, strings } from "../assets/store";
import CartCard from "../components/CartCard";
import { useEffect, useState } from "react";
import type { FoodList } from "../components/FoodCard";

type CartList = Record<string, number>;

interface CartProps {
	foodList: FoodList;
	cartItems: CartList;
	setCartItems: (uuid: string, quantity: number) => void;
}

export type { CartList, CartProps };

export default function CartScreen(props: CartProps) {
	const totalSum = (food: FoodList, cart: CartList) => {
		let total = 0;

		for (const [uuid, quantity] of Object.entries(cart)) {
			total = total + food[uuid].price * quantity;
		}

		return total;
	};

	const checkOut = () => {
		navigator.vibrate(values.vibrateDuration);
		setTimeout(() => {
			alert(
				Object.entries(props.cartItems).map(([uuid, quantity]) => {
					return `\n${props.foodList[uuid].name} x ${quantity} = ${
						props.foodList[uuid].price * quantity
					}`;
				})
			);
		}, values.vibrateDuration);
	};

	const [isCartEmpty, setIsCartEmpty] = useState<boolean>(true);

	useEffect(() => {
		setIsCartEmpty(Object.keys(props.cartItems).length === 0);
	}, [props.cartItems]);

	return (
		<div
			className={`${
				isCartEmpty ? "justify-center" : "justify-between"
			} mx-auto mb-[--footbar-height] flex min-h-[calc(100vh-var(--footbar-height))] w-[--page-width] max-w-[--page-max-width] flex-col items-center`}
		>
			{/* Food and stuffs */}
			<div className={`w-full ${isCartEmpty ? "hidden" : ""}`}>
				<div>
					{Object.entries(props.cartItems).map(([uuid, quantity]) => {
						return (
							<CartCard
								key={uuid}
								uuid={uuid}
								foodList={props.foodList}
								quantity={quantity}
								setQuantity={(quantity) => {
									props.setCartItems(uuid, quantity);
								}}
							/>
						);
					})}
				</div>
				<div className="flex w-full items-center justify-between">
					<span className="font-sans text-2xl text-dark">{strings.total}</span>
					<span
						className={`font-sans text-2xl font-black text-primary after:text-base after:text-gray`}
					>
						{readablePrice(totalSum(props.foodList, props.cartItems))}
					</span>
				</div>
			</div>

			{/* Checkout button */}
			<button
				className={`my-9 mb-8 cursor-pointer rounded-full border-none bg-[--color-primary] px-16 py-4 font-sans text-xl font-bold uppercase text-white transition-all duration-200 hover:scale-105 hover:bg-[lightsalmon] ${
					isCartEmpty ? "hidden" : ""
				}`}
				onClick={checkOut}
			>
				{strings.checkOut}
			</button>
			{isCartEmpty && (
				<div className="text-center font-sans text-4xl font-bold text-dark [text-wrap:balance]">
					{strings.emptyCart}
				</div>
			)}
		</div>
	);
}
