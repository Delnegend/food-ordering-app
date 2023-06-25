import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import FootBar from "./components/FootBar/Footbar";
import { RouteList } from "./assets/GlobalTypes";

export default function App() {
    const routes: RouteList = [
        { icon: "fa-house", path: "/", page: <Home /> },
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
