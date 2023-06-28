import CartCard from "../components/CartCard/CartCard";
import food_mock_data from "../_SAMPLE_DATA/food_mock.json";
import styles from "./Cart.module.scss";
import { FoodList } from "../components/FoodCard/FoodCard";
import { vibrateDuration } from "../assets/GlobalVariables";

type CartList = {
    [uuid: string]: number;
};

type CartProps = {
    foodList: FoodList;
    cartItems: CartList;
    setCartItems: React.Dispatch<React.SetStateAction<CartList>>;
};

export type { CartList, CartProps };

export default function Cart(props: CartProps) {
    const foodList: FoodList = food_mock_data;

    const setQuantity = (uuid: string, quantity: number) => {
        props.setCartItems((currentCart) => {
            if (quantity === 0) {
                const newCart: CartList = { ...currentCart };
                delete newCart[uuid];
                return newCart;
            }
            return {
                ...currentCart,
                [uuid]: quantity,
            };
        });
    };

    const totalSum = (food: FoodList, cart: CartList) => {
        let total = 0;
        Object.entries(cart).forEach(([uuid, quantity]) => {
            total += food[uuid].price * quantity;
        });
        return total;
    };

    const checkOut = () => {
        navigator.vibrate(vibrateDuration);
        alert(
            Object.entries(props.cartItems).map(([uuid, quantity]) => {
                return `\n${foodList[uuid].name} x ${quantity} = ${
                    foodList[uuid].price * quantity
                }`;
            })
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles["cart-items"]}>
                {Object.entries(props.cartItems).map(([uuid, quantity]) => {
                    return (
                        <CartCard
                            foodList={foodList}
                            uuid={uuid}
                            quantity={quantity}
                            setQuantity={(quantity: number) => {
                                setQuantity(uuid, quantity);
                            }}
                        />
                    );
                })}
            </div>
            <div className={styles["cart-total"]}>
                <span className={styles["cart-total-text"]}>Tổng cộng:</span>
                <span className={styles["cart-total-price"]}>
                    {totalSum(foodList, props.cartItems)}
                </span>
            </div>
            <button className={styles["cart-checkout-btn"]} onClick={checkOut}>
                Thanh toán
            </button>
        </div>
    );
}
