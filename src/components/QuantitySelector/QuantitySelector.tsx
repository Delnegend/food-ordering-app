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

    return (
        <div className={styles["container"]}>
            <button
                className={styles["button__remove"]}
                disabled={quantity === _minQuantity}
                onClick={() => setQuantity(quantity - 1)}
            >
                <i className="fa-solid fa-minus"></i>
            </button>
            <div className={styles["quantity"]}>{quantity}</div>
            <button
                className={styles["button__add"]}
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity === _maxQuantity}
            >
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}
