import type { FoodList } from "./components/FoodCard";

const foodMock: FoodList = {
	"6fdd237b-6b0e-429e-9722-411ae1099753": {
		name: "Bánh Mì",
		price: 20000,
		prepare_time: 20,
		type: "bread",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		taglist: ["Trứng", "Thịt", "Xúc xích"],
		image: "/food-ordering-app/banhmi.jpg",
	},
	"fef8b604-577e-4adc-98ce-c5fe98debbb6": {
		name: "Mì Ý",
		price: 20000,
		prepare_time: 30,
		type: "noodle",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		taglist: ["Trứng", "Thịt", "Xúc xích"],
		image: "/food-ordering-app/miy.jpg",
	},
	"497a38dd-d3a7-4c16-add1-7d18d1667632": {
		name: "Trứng",
		price: 2000,
		prepare_time: 4,
		type: "ingredient",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		taglist: [],
		image: "/food-ordering-app/omlette.jpg",
	},
};

export default foodMock;
