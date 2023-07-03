import { useEffect, useRef, useState } from "react";

import {
    readablePrice,
    vibrateDuration,
    maxQuantityPerItem,
} from "../assets/GlobalVariables";
import { FoodList } from "../components/FoodCard/FoodCard";
import AddOn from "../components/FoodDetails/AddOn";
import QuantitySelector from "../components/QuantitySelector/QuantitySelector";

import styles from "./FoodDetails.module.scss";

type FoodDetailsProps = {
    cartItems: {
        [uuid: string]: number;
    };
    addCartItems: (uuid: string, quantity: number) => void;
    foodList: FoodList;
    etaText: string;
    addToCartText: string;
    minuteText: string;
};

export type { FoodDetailsProps };

export default function FoodDetails(props: FoodDetailsProps) {
    const uuid = window.location.pathname.split("/")[2];
    const food = props.foodList[uuid];
    const [foodQuantity, setQuantity] = useState(0);
    const maxQuantity = useRef(
        maxQuantityPerItem - (props.cartItems[uuid] ?? 0)
    );

    useEffect(() => {
        maxQuantity.current = maxQuantityPerItem - (props.cartItems[uuid] ?? 0);
    }, [props.cartItems, uuid]);

    return (
        <div className={styles.container}>
            {/* region: top-section */}
            <div>
                <div className={styles["details-image-container"]}>
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
                    <span>{props.etaText}</span>
                    <span>{food.prepare_time}</span>
                    <span>{props.minuteText}</span>
                </div>
                <div className={styles["details-price-quantity"]}>
                    <div className={styles["details-price"]}>
                        {readablePrice(food.price)}
                    </div>
                    <QuantitySelector
                        maxQuantity={maxQuantity.current}
                        quantity={foodQuantity}
                        setQuantity={setQuantity}
                    />
                </div>
                <div className={styles["details-description"]}>
                    {food.description}
                </div>
                <div className={styles["optional-ingredients"]}>
                    <AddOn
                        {...props.foodList[
                            "497a38dd-d3a7-4c16-add1-7d18d1667632"
                        ]}
                    />

                    {/*This quantity selector lets the user choose how many of this topping they want
                    (0 for not having the topping)
                    
                    TODO: make this quantity selector work
                    */}
                    <div className={styles["optional-ingredients-quantity"]}>
                        <QuantitySelector
                            maxQuantity={maxQuantity.current}
                            quantity={foodQuantity}
                            setQuantity={setQuantity}
                        />
                    </div>
                </div>
            </div>
            {/* endregion */}

            {/* region: bottom-section */}
            <div>
                <button
                    className={styles["add-to-cart-button"]}
                    onClick={() => {
                        window.history.back();
                        props.addCartItems(uuid, foodQuantity);
                        navigator.vibrate(vibrateDuration);
                    }}
                >
                    <i
                        className={`${styles["cart-icon"]} fa-regular fa-shopping-cart fa-xl`}
                    ></i>
                    <span className={styles["cart-label"]}>
                        {props.addToCartText}
                    </span>
                </button>
            </div>
            {/* endregion */}
        </div>
    );
}
