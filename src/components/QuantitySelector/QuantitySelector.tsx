import { useEffect } from "react";

import { vibrateDuration } from "../../assets/GlobalVariables";

import styles from "./QuantitySelector.module.scss";

type QuantitySelectorProps = {
    minQuantity?: number;
    maxQuantity?: number;
    quantity: number;
    setQuantity: (quantity: number) => void;
};

export type { QuantitySelectorProps };

export default function QuantitySelector({
    minQuantity,
    maxQuantity,
    quantity,
    setQuantity,
}: QuantitySelectorProps) {
    const _maxQuantity = maxQuantity ?? 99;
    const _minQuantity = minQuantity ?? 0;

    useEffect(() => {
        if (quantity < _minQuantity) {
            setQuantity(_minQuantity);
        } else if (quantity > _maxQuantity) {
            setQuantity(_maxQuantity);
        }
    }, [quantity, _minQuantity, _maxQuantity, setQuantity]);

    return (
        <div className={styles["container"]}>
            <button
                className={styles["button-remove"]}
                disabled={quantity === _minQuantity}
                onClick={() => {
                    setQuantity(quantity - 1);
                    navigator.vibrate(vibrateDuration);
                }}
            >
                <i className="fa-solid fa-minus"></i>
            </button>
            <div className={styles["quantity"]}>{quantity}</div>
            <button
                className={styles["button-add"]}
                onClick={() => {
                    setQuantity(quantity + 1);
                    navigator.vibrate(vibrateDuration);
                }}
                disabled={quantity === _maxQuantity}
            >
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}
