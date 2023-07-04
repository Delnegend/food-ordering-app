import { useState } from "react";

import { readablePrice } from "../../assets/GlobalVariables";
import { FoodItem } from "../FoodCard/FoodCard";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

import styles from "./AddOn.module.scss"

export default function AddOn(props: FoodItem) {
    const [ addOnQuantity, setAddOnQuantity ] = useState(0);

    return (        
        <div className={styles.container}>
            <div className={styles["details-image-container"]}>
                <img className={styles["details-image"]} src={props.image} alt={props.name} />
            </div>
            <div className={styles["details-title"]}>{props.name}</div>
            <div className={styles["details-price"]}>{ (props.price * addOnQuantity ==  0) ? ("Free"): ("+ " + readablePrice(props.price * addOnQuantity)+ " VNĐ" )   }</div>
            <div className={styles["details-quantity"]}>
                <QuantitySelector minQuantity={0} maxQuantity={10} quantity={ addOnQuantity } setQuantity={setAddOnQuantity} />
            </div>
        </div>
        )
}