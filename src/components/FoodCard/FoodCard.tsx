import styles from "./FoodCard.module.scss";

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
    return (
        <div className={styles.container}>
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
