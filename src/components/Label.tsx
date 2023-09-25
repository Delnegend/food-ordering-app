import { values } from "../assets/store";
import type { FoodList } from "./FoodCard";

interface LabelItem {
	name: string;
	faIcon: string;
	thisLabel: string;
}

export type { LabelItem };

export default function Label(props: {
	foodList: FoodList;
	filteredFoodList: FoodList;
	setFilteredFoodList: (foodList: FoodList) => void;
	name: string;
	thisLabel: string;
	faIcon: string;
	activeLabel: string;
	setActiveLabel: (label: string) => void;
}) {
	const activeClass =
		props.activeLabel === props.thisLabel
			? "bg-primary scale-110 active shadow-btn-primary"
			: "bg-white shadow-btn-alt";

	const handleActiveLabel = () => {
		navigator.vibrate(values.vibrateDuration);

		// Deactivate label
		const selectedActiveLabel = props.activeLabel === props.thisLabel ? "" : props.thisLabel;

		props.setActiveLabel(selectedActiveLabel);
		if (selectedActiveLabel === "") {
			props.setFilteredFoodList(props.foodList);
			return;
		}

		// Filter food list
		const filteredFoodList: FoodList = {};

		for (const [key, value] of Object.entries(props.foodList)) {
			if (value.type === selectedActiveLabel) {
				filteredFoodList[key] = value;
			}
		}

		props.setFilteredFoodList(filteredFoodList);
	};

	return (
		<button
			className={`${activeClass} group flex h-auto cursor-pointer flex-col items-center justify-between rounded-full border-none p-2 pb-4 transition-all duration-200 hover:scale-105`}
			onClick={handleActiveLabel}
		>
			<div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-4 text-4xl">
				<i className={`fa-solid ${props.faIcon}`}></i>
			</div>
			<div className="mb-2 mt-4 text-center font-sans text-base transition-all duration-200 group-[.active]:text-white">
				{props.name}
			</div>
		</button>
	);
}
