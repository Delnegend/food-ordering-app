import styles from './CartCard.module.css';

type TotalProps = {
    total: number;
}

function Total(props: TotalProps){
    return (
        <>
            <div className={styles.container}>
                <p className={styles.totalText}>Tổng Tiền:</p>
                <p className={styles.price}>{props.total}</p>
            </div>
        </>
    )
}


export default Total;