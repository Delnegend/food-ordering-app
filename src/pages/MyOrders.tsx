import food_mock_data from "../_SAMPLE_DATA/food_mock.json";
import { FoodList } from "../components/FoodCard/FoodCard";
import MyOrderCard from "../components/MyOrderCard/MyOrderCard";

import styles from "./MyOrders.module.scss";

export default function MyOrders() {
    const food_mock: FoodList = food_mock_data;
    return (
        <div className={styles.container}>
            {Object.entries(food_mock).map(([key, value]) => {
                return (
                    <MyOrderCard
                        key={key}
                        name={value.name}
                        price={value.price}
                        prepare_time={value.prepare_time}
                        taglist={value.taglist}
                        image={value.image}
                        type={value.type}
                        description={value.description}
                    />
                );
            })}
        </div>
    );
}
