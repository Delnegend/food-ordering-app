import styles from "./FoodCard.module.css";
import { FoodItem } from "../../assets/GlobalTypes";

export default function FoodCard(props: FoodItem) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.image} />
      <div className={styles.body}>
        <p className={styles.foodname}>{props.name}</p>
        <div className={styles.info}>
          <i className="fa-solid fa-moped"></i>
          <span>{props.price} ₫</span>
          <i className="fa-solid fa-clock"></i>
          <span>{props.prepare_time} phút</span>
        </div>
        <div className={styles.taglist}>
          {props.taglist.map((tag, index) => {
            return (
              <p className={styles.tag} key={index}>
                {tag}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
