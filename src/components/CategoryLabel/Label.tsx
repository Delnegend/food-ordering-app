import styles from "./Label.module.scss";
type LabelProps = {
    name: string;
    type: string;
};
export default function Label(props: LabelProps) {
    return (
        <div className={styles.label}>
            <div className={styles.icon}>
                <i className={`fa-solid ${props.type}`}></i>
            </div>
            <div className={styles.text}>{props.name}</div>
        </div>
    );
}
