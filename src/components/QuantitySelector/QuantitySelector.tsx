import styles from "./QuantitySelector.module.scss";

type QuantitySelectorProps = {
    maxQuantity: number;
    quantity: number;
    setQuantity: (quantity: number) => void;
};

export type { QuantitySelectorProps };

export default function QuantitySelector({
    maxQuantity,
    quantity,
    setQuantity,
}: QuantitySelectorProps) {
    return (
        <div className={styles["container"]}>
            <button
                className={styles["button__remove"]}
                disabled={quantity === 0}
                onClick={() => setQuantity(quantity - 1)}
            >
                <i className="fa-solid fa-minus"></i>
            </button>
            <div className={styles["quantity"]}>{quantity}</div>
            <button
                className={styles["button__add"]}
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity === maxQuantity}
            >
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}
