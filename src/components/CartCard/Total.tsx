import styles from "./CartCard.module.css";

type TotalProps = {
  total: number;
};

export default function Total(props: TotalProps) {
  return (
    <div className={styles.container}>
      <p className={styles.totalText}>Tổng tiền:</p>
      <p className={styles.price}>{props.total}</p>
    </div>
  );
}
