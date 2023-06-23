import FoodCard from "../components/FoodCard/FoodCard";
import { FoodList } from "../assets/GlobalTypes";
import Label from "../components/CategoryLabel/Label";
import food_mock_data from "../_SAMPLE_DATA/food_mock.json";
type FoodType = {
    name: string;
    icon: string;
};
import styles from "./Home.module.scss";

export default function Home() {
    const food_mock: FoodList = food_mock_data;
    const food_types: FoodType[] = [
        { name: "Bánh mì", icon: "fa-baguette" },
        { name: "Xôi", icon: "fa-bowl-rice" },
        { name: "Mì trộn", icon: "fa-bowl-chopsticks-noodles" },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.label_container}>
                {food_types.map((value, index) => {
                    return (
                        <Label
                            key={index}
                            name={value.name}
                            type={value.icon}
                        />
                    );
                })}
            </div>
            <div className={styles.food_item_container}>
                {Object.entries(food_mock).map(([key, value]) => {
                    return (
                        <FoodCard
                            key={key}
                            name={value.name}
                            price={value.price}
                            prepare_time={value.prepare_time}
                            taglist={value.taglist}
                            image={value.image}
                        />
                    );
                })}
            </div>
        </div>
    );
}
