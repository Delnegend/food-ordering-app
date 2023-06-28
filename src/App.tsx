import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { HomePageProps } from "./pages/Home";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import { CartProps, CartList } from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import FootBar from "./components/FootBar/Footbar";
import { FootbarProps } from "./components/FootBar/Footbar";
import FoodDetails from "./pages/FoodDetails";
import { FoodDetailsProps } from "./pages/FoodDetails";
import { foodDetailPath } from "./assets/GlobalVariables";
import { useState, useEffect } from "react";

import food_mock_data from "./_SAMPLE_DATA/food_mock.json";

export default function App() {
    const HomePageData: HomePageProps = {
        foodList: food_mock_data,
        foodTypes: [
            { name: "Bánh mì", faIcon: "fa-baguette", type: "bread" },
            { name: "Xôi", faIcon: "fa-bowl-rice", type: "rice" },
            {
                name: "Mì trộn",
                faIcon: "fa-bowl-chopsticks-noodles",
                type: "noodle",
            },
        ],
        welcome_message: "Hôm nay bạn muốn ăn gì?",
        appName: "UCC Food App",
        avatarUrl: "",
        userName: "",
        userEmail: "",
    };

    const [cartItems, setCartItems] = useState<CartList>({});

    const CartPageData: CartProps = {
        foodList: food_mock_data,
        cartItems: cartItems,
        setCartItems: setCartItems,
    };

    useEffect(() => {
        setCartItems({
            "6fdd237b-6b0e-429e-9722-411ae1099753": 1,
            "fef8b604-577e-4adc-98ce-c5fe98debbb6": 2,
        });
    }, []);

    const routes: FootbarProps = [
        { icon: "fa-house", path: "/", page: <Home {...HomePageData} /> },
        {
            icon: "fa-cart-shopping",
            path: "/cart",
            page: <Cart {...CartPageData} />,
        },
        { icon: "fa-list", path: "/myorders", page: <MyOrders /> },
        { icon: "fa-user", path: "/signin", page: <SignIn /> },
    ];

    const foodDetailsProps: FoodDetailsProps = {
        cart: {},
        foodList: food_mock_data,
    };

    return (
        <BrowserRouter>
            <FootBar pages={routes} />
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.page} />
                ))}
                <Route
                    path={`${foodDetailPath}:foodId`}
                    element={<FoodDetails {...foodDetailsProps} />}
                />
            </Routes>
        </BrowserRouter>
    );
}
