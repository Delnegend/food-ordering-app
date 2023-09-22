import { useEffect, useState } from "react";

import { readablePrice, vibrateDuration } from "../assets/GlobalVariables";
import CartCard from "../components/CartCard/CartCard";
import { FoodList } from "../components/FoodCard/FoodCard";

import styles from "./Cart.module.scss";

type CartList = {
    [uuid: string]: number;
};

type CartProps = {
    foodList: FoodList;
    cartItems: CartList;
    emptyCartText: string;
    checkOutText: string;
    totalText: string;
    setCartItems: (uuid: string, quantity: number) => void;
};

export type { CartList, CartProps };

export default function Cart(props: CartProps) {
    const totalSum = (food: FoodList, cart: CartList) => {
        let total = 0;
        Object.entries(cart).forEach(([uuid, quantity]) => {
            total += food[uuid].price * quantity;
        });
        return total;
    };

    const checkOut = () => {
        navigator.vibrate(vibrateDuration);
        setTimeout(() => {
            alert(
                Object.entries(props.cartItems).map(([uuid, quantity]) => {
                    return `\n${props.foodList[uuid].name} x ${quantity} = ${
                        props.foodList[uuid].price * quantity
                    }`;
                })
            );
        }, vibrateDuration);
    };

    const [isCartEmpty, setIsCartEmpty] = useState<boolean>(true);
    useEffect(() => {
        setIsCartEmpty(Object.keys(props.cartItems).length === 0);
    }, [props.cartItems]);
    const emptyCartClass = isCartEmpty ? styles["cart-empty"] : "";

    return (
        <div className={styles.container}>
            <div
                className={`${styles["cart-container-top"]} ${emptyCartClass}`}
            >
                <div className={styles["cart-items"]}>
                    {Object.entries(props.cartItems).map(([uuid, quantity]) => {
                        return (
                            <CartCard
                                key={uuid}
                                uuid={uuid}
                                foodList={props.foodList}
                                quantity={quantity}
                                setQuantity={(quantity) =>
                                    props.setCartItems(uuid, quantity)
                                }
                            />
                        );
                    })}
                </div>
                <div className={styles["cart-total"]}>
                    <span className={styles["cart-total-text"]}>
                        {props.totalText}
                    </span>
                    <span className={styles["cart-total-price"]}>
                        {readablePrice(
                            totalSum(props.foodList, props.cartItems)
                        )}
                    </span>
                </div>
            </div>
            <div
                className={`${styles["cart-container-bottom"]} ${emptyCartClass}`}
            >
                <button
                    className={styles["cart-checkout-btn"]}
                    onClick={checkOut}
                >
                    {props.checkOutText}
                </button>
            </div>
            <div
                className={`${styles["cart-container-empty"]} ${emptyCartClass}`}
            >
                <span className={styles["cart-empty-text"]}>
                    {props.emptyCartText}
                </span>
            </div>
        </div>
    );
}
