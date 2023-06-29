import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";

import "./App.module.scss";
import food_mock_data from "./_SAMPLE_DATA/food_mock.json";
import { foodDetailPath } from "./assets/GlobalVariables";
import { FoodList } from "./components/FoodCard/FoodCard";
import FootBar, { FootbarProps } from "./components/FootBar/Footbar";
import Cart, { CartList, CartProps } from "./pages/Cart";
import FoodDetails, { FoodDetailsProps } from "./pages/FoodDetails";
import Home, { HomePageProps } from "./pages/Home";
import MyOrders from "./pages/MyOrders";
import SignIn from "./pages/SignIn";

export default function App() {
    const [cartItems, _setCartItems] = useState<CartList>({});
    const [currentActiveLabel, setCurrentActiveLabel] = useState<string>("");
    const [filteredFoodList, setFilteredFoodList] = useState<FoodList>({});
    useEffect(() => {
        setFilteredFoodList(food_mock_data);
    }, []);

    const setCartItems = (uuid: string, quantity: number) => {
        if (quantity < 0) return;
        _setCartItems((currentCart) => {
            const newCart = { ...currentCart };
            if (quantity === 0) delete newCart[uuid];
            else newCart[uuid] = quantity;
            return newCart;
        });
    };

    const addCartItems = (uuid: string, quantity: number) => {
        if (quantity <= 0) return;
        _setCartItems((currentCart) => {
            return {
                ...currentCart,
                [uuid]: (currentCart[uuid] ?? 0) + quantity,
            };
        });
    };

    const homePageData: HomePageProps = {
        foodList: filteredFoodList,
        foodListUnfiltered: food_mock_data,
        foodTypes: [
            { name: "Bánh", faIcon: "fa-baguette", type: "bread" },
            { name: "Xôi", faIcon: "fa-bowl-rice", type: "rice" },
            {
                name: "Mì",
                faIcon: "fa-bowl-chopsticks-noodles",
                type: "noodle",
            },
        ],
        welcome_message: "Hôm nay bạn muốn ăn gì?",
        appName: "UCC Food App",
        avatarUrl: "",
        userName: "",
        userEmail: "",
        currentActiveLabel: currentActiveLabel,
        setCurrentActiveLabel: setCurrentActiveLabel,
        filteredFoodList: filteredFoodList,
        setFilteredFoodList: setFilteredFoodList,
    };

    const cartPageData: CartProps = {
        foodList: food_mock_data,
        cartItems: cartItems,
        setCartItems: setCartItems,
        emptyCartText: "Chưa có món nào trong giỏ hàng",
        checkOutText: "Thanh toán",
        totalText: "Tổng cộng",
    };

    const foodDetailsPageData: FoodDetailsProps = {
        cartItems: cartItems,
        foodList: food_mock_data,
        etaText: "Thời gian chuẩn bị:",
        addToCartText: "Thêm vào giỏ hàng",
        minuteText: "phút",
        addCartItems: addCartItems,
    };

    const routesData: FootbarProps = [
        { icon: "fa-house", path: "/", page: <Home {...homePageData} /> },
        {
            icon: "fa-cart-shopping",
            path: "/cart",
            page: <Cart {...cartPageData} />,
        },
        { icon: "fa-list", path: "/myorders", page: <MyOrders /> },
        { icon: "fa-user", path: "/signin", page: <SignIn /> },
    ];

    const [localStorageCartWritable, setLocalStorageCartWritable] =
        useState(false);
    useEffect(() => {
        const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
        if (cartItemsFromLocalStorage) {
            _setCartItems(JSON.parse(cartItemsFromLocalStorage));
            setLocalStorageCartWritable(true);
        }
    }, []);

    useEffect(() => {
        if (!localStorageCartWritable) return;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems, localStorageCartWritable]);

    const routes = routesData.map((route) => (
        <Route key={route.path} path={route.path} element={route.page} />
    ));
    routes.push(
        <Route
            key={routesData.length}
            path={`${foodDetailPath}:foodId`}
            element={<FoodDetails {...foodDetailsPageData} />}
        />
    );

    return (
        <BrowserRouter>
            <FootBar pages={routesData} />
            <SlideRoutes>{routes}</SlideRoutes>
        </BrowserRouter>
    );
}
