import { values } from "../assets/store";
import { useEffect } from "react";

interface QuantitySelectorProps {
	minQuantity?: number;
	maxQuantity?: number;
	quantity: number;
	setQuantity: (quantity: number) => void;
}

export type { QuantitySelectorProps };

export default function QuantitySelector({
	minQuantity,
	maxQuantity,
	quantity,
	setQuantity,
}: QuantitySelectorProps) {
	const _maxQuantity = maxQuantity ?? 99;
	const _minQuantity = minQuantity ?? 0;

	useEffect(() => {
		if (quantity < _minQuantity) {
			setQuantity(_minQuantity);
		} else if (quantity > _maxQuantity) {
			setQuantity(_maxQuantity);
		}
	}, [quantity, _minQuantity, _maxQuantity, setQuantity]);

	return (
		<div className="flex flex-row items-center justify-center">
			<button
				className="flex h-8 w-8 items-center justify-center rounded-full border border-solid border-primary bg-white transition-all duration-200"
				disabled={quantity === _minQuantity}
				onClick={() => {
					setQuantity(quantity - 1);
					navigator.vibrate(values.vibrateDuration);
				}}
			>
				<i className="fa-solid fa-minus"></i>
			</button>
			<div className="w-8 text-center font-sans text-xl text-dark">{quantity}</div>
			<button
				className="flex h-8 w-8 items-center justify-center rounded-full bg-[--color-primary] text-white transition-all duration-200"
				onClick={() => {
					setQuantity(quantity + 1);
					navigator.vibrate(values.vibrateDuration);
				}}
				disabled={quantity === _maxQuantity}
			>
				<i className="fa-solid fa-plus"></i>
			</button>
		</div>
	);
}
