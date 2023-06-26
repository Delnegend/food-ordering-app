import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import FootBar from "./components/FootBar/Footbar";
import { RouteList } from "./assets/GlobalTypes";

import { HomePageProps } from "./pages/Home";
import food_mock_data from "./_SAMPLE_DATA/food_mock.json";

export default function App() {
    const HomePageData: HomePageProps = {
        food_list: food_mock_data,
        food_types: [
            { name: "Bánh mì", faIcon: "fa-baguette", type: "bread" },
            { name: "Xôi", faIcon: "fa-bowl-rice", type: "rice" },
            {
                name: "Mì trộn",
                faIcon: "fa-bowl-chopsticks-noodles",
                type: "noodle",
            },
        ],
        welcome_message: "Bạn muốn ăn gì?",
        appName: "UCC Food App",
        avatarUrl: "",
        userName: "",
        userEmail: "",
    };

    const routes: RouteList = [
        { icon: "fa-house", path: "/", page: <Home {...HomePageData} /> },
        { icon: "fa-cart-shopping", path: "/cart", page: <Cart /> },
        { icon: "fa-list", path: "/myorders", page: <MyOrders /> },
        { icon: "fa-user", path: "/signin", page: <SignIn /> },
    ];

    return (
        <BrowserRouter>
            <FootBar routes={routes} />
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.page} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}
