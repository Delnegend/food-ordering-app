import { useState } from "react";

import { vibrateDuration } from "../assets/GlobalVariables";
import { FoodList } from "../components/FoodCard/FoodCard";
import QuantitySelector from "../components/QuantitySelector/QuantitySelector";

import styles from "./FoodDetails.module.scss";

type FoodDetailsProps = {
    cart: {
        [uuid: string]: number;
    };
    foodList: FoodList;
    maxQuantity?: number;
};

export type { FoodDetailsProps };

export default function FoodDetails(props: FoodDetailsProps) {
    const maxQuantity = props.maxQuantity || 10;
    const uuid = window.location.pathname.split("/")[2];
    const food = props.foodList[uuid];
    const [quantity, setQuantity] = useState(props.cart[uuid] || 0);

    return (
        <div className={styles.container}>
            <div className={styles["details-image__container"]}>
                <img
                    className={styles["details-image"]}
                    src={food.image}
                    alt={food.name}
                />
                <button
                    onClick={() => {
                        window.history.back();
                        navigator.vibrate(vibrateDuration);
                    }}
                >
                    <i className="fa-thin fa-arrow-left"></i>
                </button>
            </div>
            <div className={styles["details-title"]}>{food.name}</div>
            <div className={styles["details-eta"]}>
                <span>
                    <i className="fa-solid fa-clock"></i>
                </span>
                <span>Thời gian chuẩn bị dự kiến:</span>
                <span>{food.prepare_time}</span>
                <span>phút</span>
            </div>
            <div className={styles["details-price-quantity"]}>
                <div className={styles["details-price"]}>{food.price}</div>
                <QuantitySelector
                    maxQuantity={maxQuantity}
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
            </div>
            <div className={`${styles["details-description"]}`}>
                {food.description}
            </div>
            <button className={`${styles["add-to-cart-button"]}`}>
                <i
                    className={`${styles["cart-icon"]} fa-regular fa-shopping-cart fa-xl`}
                ></i>
                <span className={`${styles["cart-label"]}`}>
                    Thêm vào giỏ hàng
                </span>
            </button>
        </div>
    );
}
