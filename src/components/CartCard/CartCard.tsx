import styles from "./CartCard.module.css";
import { FoodList } from "../../assets/GlobalTypes";

export default function CartCard(props: {
  uuid: string;
  quantity: number;
  foodList: FoodList;
}) {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={props.foodList[props.uuid].image}
        alt={props.foodList[props.uuid].name}
      />
      <div className={styles.body}>
        <p className={styles.foodname}>{props.foodList[props.uuid].name}</p>
        <p className={styles.price}>{props.foodList[props.uuid].price}</p>
        <div className={styles.quantity}>
          <i className="fa-solid fa-circle-minus"></i>
          <p className={styles.value}>{props.quantity}</p>
          <i className="fa-solid fa-circle-plus"></i>
        </div>
      </div>
    </div>
  );
}
