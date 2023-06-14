import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";
import Search from "./pages/Search";
import Footbar from '../components/Footbar'
export default function App() {
  return (
    <BrowserRouter>
      <Footbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/food" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}