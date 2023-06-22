import styles from "./MyOrderCard.module.css";
import { FoodItem } from "../../assets/GlobalTypes";

export default function MyOrderCard(props: FoodItem) {
    return (
        <div className={styles.container}>
            <div>
                <span className={styles.price}> {props.price}</span>
            </div>
            <div>
                <img className={styles.image} src={props.image} />
                <span className={styles.foodname}> {props.name} </span>
            </div>
            <div className={styles.text}>Estimated Arrival</div>
            <div>
                <span className={styles.time}>{props.prepare_time}</span> phút
            </div>
            <div>
                <button className={`${styles["cancel-button"]}`}>
                    <span className={styles.cancel}> Cancel </span>
                </button>
                <button className={`${styles["track-button"]}`}>
                    <span className={styles.track}> Track Order </span>
                </button>
            </div>
        </div>
    );
}
