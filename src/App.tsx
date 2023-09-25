import foodMockData from "./_SAMPLE_DATA/food_mock.json";
import { foodDetailPath, homeTopBarData, foodTypes } from "./assets/store";
import FootBar from "./components/Footbar";
import CartScreen from "./pages/CartScreen";
import FoodDetailScreen from "./pages/FoodDetailScreen";
import MainScreen from "./pages/MainScreen";
import OrderTrackingScreen from "./pages/OrderTrackingScreen";
import SignInScreen from "./pages/SignInScreen";
import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import type { FoodList } from "./components/FoodCard";
import type { FootbarProps } from "./components/Footbar";
import type { CartList, CartProps } from "./pages/CartScreen";
import type { FoodDetailsProps } from "./pages/FoodDetailScreen";
import type { HomePageProps } from "./pages/MainScreen";

export default function App() {
	const [cartItems, _setCartItems] = useState<CartList>({});
	const [currentActiveLabel, setCurrentActiveLabel] = useState<string>("");
	const [filteredFoodList, setFilteredFoodList] = useState<FoodList>({});

	useEffect(() => {
		setFilteredFoodList(foodMockData);
	}, []);

	const setCartItems = (uuid: string, quantity: number) => {
		if (quantity < 0) {
			return;
		}

		_setCartItems((currentCart) => {
			const newCart = { ...currentCart };

			if (quantity === 0) {
				delete newCart[uuid];
			} else {
				newCart[uuid] = quantity;
			}

			return newCart;
		});
	};

	const addCartItems = (uuid: string, quantity: number) => {
		if (quantity <= 0) {
			return;
		}

		_setCartItems((currentCart) => {
			return {
				...currentCart,
				[uuid]: (currentCart[uuid] ? currentCart[uuid] : 0) + quantity,
			};
		});
	};

	const homePageData: HomePageProps = {
		foodList: filteredFoodList,
		foodListUnfiltered: foodMockData,
		foodTypes,
		avatarUrl: "",
		userName: "",
		userEmail: "",
		currentActiveLabel,
		setCurrentActiveLabel,
		filteredFoodList,
		setFilteredFoodList,
		homeTopBarData,
	};

	const cartPageData: CartProps = {
		foodList: foodMockData,
		cartItems,
		setCartItems,
	};

	const foodDetailsPageData: FoodDetailsProps = {
		cartItems,
		foodList: foodMockData,
		addCartItems,
	};

	const routesData: FootbarProps = [
		{ icon: "fa-house", path: "/", page: <MainScreen {...homePageData} /> },
		{
			icon: "fa-cart-shopping",
			path: "/cart",
			page: <CartScreen {...cartPageData} />,
		},
		{ icon: "fa-list", path: "/myorders", page: <OrderTrackingScreen /> },
		{ icon: "fa-user", path: "/signin", page: <SignInScreen /> },
	];

	const [localStorageCartWritable, setLocalStorageCartWritable] = useState(false);

	useEffect(() => {
		const cartItemsFromLocalStorage = localStorage.getItem("cartItems");

		if (cartItemsFromLocalStorage) {
			_setCartItems(JSON.parse(cartItemsFromLocalStorage));
			setLocalStorageCartWritable(true);
		}
	}, []);

	useEffect(() => {
		if (!localStorageCartWritable) {
			return;
		}

		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems, localStorageCartWritable]);

	const routes = routesData.map((route) => (
		<Route key={route.path} path={route.path} element={route.page} />
	));

	routes.push(
		<Route
			key={routesData.length}
			path={`${foodDetailPath}:foodId`}
			element={<FoodDetailScreen {...foodDetailsPageData} />}
		/>
	);

	return (
		<BrowserRouter>
			<FootBar pages={routesData} />
			<SlideRoutes>{routes}</SlideRoutes>
		</BrowserRouter>
	);
}
