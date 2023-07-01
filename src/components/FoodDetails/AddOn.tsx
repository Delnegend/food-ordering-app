import { readablePrice } from "../../assets/GlobalVariables";
import { FoodItem } from "../FoodCard/FoodCard";

import styles from "./AddOn.module.scss"



export default function AddOn(props: FoodItem) {
    return (        
        <div className={styles.container}>
            <div className={styles["details-image-container"]}>
                <img className={styles["details-image"]} src={props.image} alt={props.name} />
            </div>
            <div className={styles["details-title"]}>{props.name}</div>
            <div className={styles["details-price-quantity"]}>
                <div className={styles["details-price"]}>
                    +{readablePrice(props.price)}đ
                </div>
            </div>
        </div>
        )
}