import styles from './CartCard.module.css';

type CartCardProps = {
    name: string;
    note: string;
    price: number;
    image: string;
    quantity: number;
}
function CartCard(props: CartCardProps) {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.image} src={props.image} />
                <div className={styles.body}>
                    <p className={styles.foodname}>{props.name}</p>
                    <p className={styles.note}>{props.note}</p>
                    <p className={styles.price}>{props.price}</p>
                    <div className={styles.quantity}>
                        <i className="fa-solid fa-circle-minus"></i>
                        <p className={styles.value}>{props.quantity}</p>
                        <i className="fa-solid fa-circle-plus"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCard;




