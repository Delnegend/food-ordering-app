import type { HomeTopBarProps } from "../components/HomeTopBar/HomeTopBar";
import type { LabelItem } from "../components/Label";

const foodDetailPath = "food-details/";

const homeTopBarData: HomeTopBarProps["path"] = {
	"Đơn hàng": {
		icon: "fa-box",
		path: "/",
	},
	"Hồ sơ": {
		icon: "fa-user",
		path: "/",
	},
	"Giao hàng": {
		icon: "fa-location-dot",
		path: "/",
	},
	"Thanh toán": {
		icon: "fa-wallet",
		path: "/",
	},
	"Liên hệ": {
		icon: "fa-envelope",
		path: "mailto:",
	},
};

const readablePrice = (price: number) => {
	const priceString = price.toString();
	const priceLength = priceString.length;

	let result = "";

	for (let i = 0; i < priceLength; i++) {
		result = result + priceString[i];
		if ((priceLength - i - 1) % 3 === 0 && i !== priceLength - 1) {
			result = `${result}.`;
		}
	}

	return `${result} đ`;
};

const values = {
	vibrateDuration: 6,
	maxQuantityPerItem: 99,
};

const strings = {
	eta: "Thời gian dự kiến",
	cancelOrder: "Huỷ đơn",
	viewJourney: "Xem hành trình",
	minutes: "phút",
	now: "Bây giờ",

	welcomeMessage: "Hôm nay bạn muốn ăn gì?",
	appName: "Food App",

	emptyCart: "Chưa có món nào trong giỏ hàng",
	checkOut: "Thanh toán",
	total: "Tổng cộng",

	prepareTime: "Thời gian chuẩn bị:",
	addToCart: "Thêm vào giỏ hàng",

	loginWithGoogle: "Đăng nhập với Google",
};

const foodTypes: Array<LabelItem> = [
	{ name: "Bánh", faIcon: "fa-baguette", thisLabel: "bread" },
	{ name: "Xôi", faIcon: "fa-bowl-rice", thisLabel: "rice" },
	{
		name: "Mì",
		faIcon: "fa-bowl-chopsticks-noodles",
		thisLabel: "noodle",
	},
	{ name: "Bánh", faIcon: "fa-baguette", thisLabel: "bread1" },
	{ name: "Xôi", faIcon: "fa-bowl-rice", thisLabel: "rice1" },
	{ name: "Xôi", faIcon: "fa-bowl-rice", thisLabel: "rice2" },
	{ name: "Xôi", faIcon: "fa-bowl-rice", thisLabel: "rice3" },
	{ name: "Xôi", faIcon: "fa-bowl-rice", thisLabel: "rice4" },
];

enum OrderStatus {
	Preparing = "Đang chuẩn bị",
	Shipping = "Đang vận chuyển",
	Delivered = "Đã giao",
	Cancelled = "Đã huỷ",
}

export { foodDetailPath, homeTopBarData, OrderStatus, readablePrice, strings, values, foodTypes };
