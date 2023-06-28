import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";

import food_mock_data from "./_SAMPLE_DATA/food_mock.json";
import { foodDetailPath } from "./assets/GlobalVariables";
import FootBar, { FootbarProps } from "./components/FootBar/Footbar";
import Cart, { CartList, CartProps } from "./pages/Cart";
import FoodDetails, { FoodDetailsProps } from "./pages/FoodDetails";
import Home, { HomePageProps } from "./pages/Home";
import MyOrders from "./pages/MyOrders";
import SignIn from "./pages/SignIn";

export default function App() {
    const [cartItems, _setCartItems] = useState<CartList>({});

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
        _setCartItems((currentCart) => {
            return {
                ...currentCart,
                [uuid]: (currentCart[uuid] ?? 0) + quantity,
            };
        });
    };

    const homePageData: HomePageProps = {
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

    const cartPageData: CartProps = {
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

        cart: {},
    const foodDetailsPageData: FoodDetailsProps = {
        foodList: food_mock_data,
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
