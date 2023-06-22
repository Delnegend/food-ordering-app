import styles from "./Label.module.css";
type LabelProps = {
    name: string;
    type: string;
};
export default function Label(props: LabelProps) {
    return (
        <div className={styles.label}>
            <div className={styles.icon}>
                <i className={`fa-solid fa-${props.type}`}></i>
            </div>
            <p className={styles.text}>{props.name}</p>
        </div>
    );
}
