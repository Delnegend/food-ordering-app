import styles from "./FoodCard.module.scss";
import { useNavigate } from "react-router-dom";
import { foodDetailPath } from "../../assets/GlobalVariables";
import { vibrateDuration } from "../../assets/GlobalVariables";

type FoodItem = {
    name: string;
    price: number;
    prepare_time: number;
    taglist: string[];
    image: string;
    type: string;
    description: string;
};

type FoodList = {
    [uuid: string]: FoodItem;
};

export type { FoodItem, FoodList };

type FoodCardProps = FoodItem & {
    uuid: string;
};

export default function FoodCard(props: FoodCardProps) {
    const navigate = useNavigate();
    const openFoodDetails = (uuid: string) => {
        navigator.vibrate(vibrateDuration);
        navigate(foodDetailPath + uuid);
    };

    return (
        <div
            className={styles.container}
            onClick={() => openFoodDetails(props.uuid)}
        >
            <img className={styles.image} src={props.image} />
            <div className={styles.body}>
                <div className={styles.foodname}>{props.name}</div>
                <div className={styles.info}>
                    <i className="fa-solid fa-moped"></i>
                    <span>{props.price} ₫</span>
                    <i className="fa-solid fa-clock"></i>
                    <span>{props.prepare_time} phút</span>
                </div>
                <div className={styles.taglist}>
                    {props.taglist.map((tag, index) => {
                        return (
                            <span className={styles.tag} key={index}>
                                {tag}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
