import {
    maxQuantityPerItem,
    vibrateDuration,
    readablePrice,
} from "../../assets/GlobalVariables";
import { FoodList } from "../FoodCard/FoodCard";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

import styles from "./CartCard.module.scss";

type CartCardProps = {
    uuid: string;
    quantity: number;
    setQuantity: (quantity: number) => void;
    foodList: FoodList;
};

export type { CartCardProps };

export default function CartCard(props: CartCardProps) {
    const totalPrice = props.foodList[props.uuid].price * props.quantity;

    return (
        <div className={styles.container}>
            <img
                className={styles["cartcard-image"]}
                src={props.foodList[props.uuid].image}
                alt={props.foodList[props.uuid].name}
            />
            <div className={styles["cartcard-info"]}>
                <div className={styles["cartcard-title-and-close-btn"]}>
                    <span className={styles["cartcard-title"]}>
                        {props.foodList[props.uuid].name}
                    </span>
                    <button
                        className={styles["cartcard-close-btn"]}
                        onClick={() => {
                            props.setQuantity(0);
                            navigator.vibrate(vibrateDuration);
                        }}
                    >
                        <i className="fa-solid fa-times"></i>
                    </button>
                </div>
                <div className={styles["cartcard-topping"]}>Lorem ipsum.</div>
                <div className={styles["cartcard-price-quantity"]}>
                    <span className={styles["cartcard-price"]}>
                        {readablePrice(totalPrice)}
                    </span>
                    <QuantitySelector
                        maxQuantity={maxQuantityPerItem}
                        minQuantity={1}
                        quantity={props.quantity}
                        setQuantity={props.setQuantity}
                    />
                </div>
            </div>
        </div>
    );
}
