import styles from "./Label.module.scss";
type LabelProps = {
    name: string;
    type: string;
    faIcon: string;
};

export type { LabelProps };

export default function Label(props: LabelProps) {
    return (
        <div className={styles.label}>
            <div className={styles.icon}>
                <i className={`fa-solid ${props.faIcon}`}></i>
            </div>
            <div className={styles.text}>{props.name}</div>
        </div>
    );
}
