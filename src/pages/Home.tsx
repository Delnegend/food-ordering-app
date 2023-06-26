import FoodCard from "../components/FoodCard/FoodCard";
import Label from "../components/CategoryLabel/Label";
import { LabelProps } from "../components/CategoryLabel/Label";
import HomeTopBar from "../components/HomeTopBar/HomeTopBar";
import { FoodList } from "../assets/GlobalTypes";

import food_mock_data from "../_SAMPLE_DATA/food_mock.json";
import styles from "./Home.module.scss";

export default function Home() {
    const food_mock: FoodList = food_mock_data;
    const food_types: LabelProps[] = [
        { name: "Bánh mì", faIcon: "fa-baguette", type: "bread" },
        { name: "Xôi", faIcon: "fa-bowl-rice", type: "rice" },
        {
            name: "Mì trộn",
            faIcon: "fa-bowl-chopsticks-noodles",
            type: "noodle",
        },
    ];
    const welcome_message = "Bạn muốn ăn gì?";
    const appName = "UCC Food App";

    return (
        <div className={styles.container}>
            <HomeTopBar
                avatarUrl=""
                appName={appName}
                userName=""
                userEmail=""
            />
            <div className={styles.welcome_message}>{welcome_message}</div>
            <div className={styles.label_container}>
                {food_types.map((value, index) => {
                    return (
                        <Label
                            key={index}
                            name={value.name}
                            type={value.type}
                            faIcon={value.faIcon}
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
