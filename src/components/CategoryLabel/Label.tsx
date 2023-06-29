import { vibrateDuration } from "../../assets/GlobalVariables";

import styles from "./Label.module.scss";

type LabelProps = {
    name: string;
    type: string;
    faIcon: string;
    currentActiveLabel: string;
    setCurrentActiveLabel: (label: string) => void;
};

export type { LabelProps };

export default function Label(props: LabelProps) {
    const activeClass =
        props.currentActiveLabel === props.type
            ? styles["label__container--active"]
            : "";

    const handleActiveLabel = () => {
        navigator.vibrate(vibrateDuration);
        if (props.currentActiveLabel === props.type)
            props.setCurrentActiveLabel("");
        else props.setCurrentActiveLabel(props.type);
    };

    return (
        <button
            className={`${styles["label__container"]} ${activeClass}`}
            onClick={handleActiveLabel}
        >
            <div className={styles["label-icon__container"]}>
                <i className={`fa-solid ${props.faIcon}`}></i>
            </div>
            <div className={styles["label-text"]}>{props.name}</div>
        </button>
    );
}
