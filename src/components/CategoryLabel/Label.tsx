import { vibrateDuration } from "../../assets/GlobalVariables";
import { FoodList } from "../FoodCard/FoodCard";

import styles from "./Label.module.scss";

type LabelProps = {
    foodList: FoodList;
    filteredFoodList: FoodList;
    setFilteredFoodList: (foodList: FoodList) => void;
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
            ? styles["label-container-active"]
            : "";

    const handleActiveLabel = () => {
        navigator.vibrate(vibrateDuration);
        const type = props.currentActiveLabel === props.type ? "" : props.type;
        props.setCurrentActiveLabel(type);

        if (type === "") props.setFilteredFoodList(props.foodList);
        else {
            const filteredFoodList: FoodList = {};
            Object.entries(props.foodList).forEach(([key, value]) => {
                if (value.type === type) filteredFoodList[key] = value;
            });
            props.setFilteredFoodList(filteredFoodList);
        }
    };

    return (
        <button
            className={`${styles["label-container"]} ${activeClass}`}
            onClick={handleActiveLabel}
        >
            <div className={styles["label-icon-container"]}>
                <i className={`fa-solid ${props.faIcon}`}></i>
            </div>
            <div className={styles["label-text"]}>{props.name}</div>
        </button>
    );
}
