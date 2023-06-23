import FoodCard from "../components/FoodCard/FoodCard";
import { FoodList } from "../assets/GlobalTypes";
import Label from "../components/CategoryLabel/Label";
import food_mock_data from "../_SAMPLE_DATA/food_mock.json";
import styles from "./Home.module.scss";

export default function Home() {
    const food_mock: FoodList = food_mock_data;
    return (
        <div style={ContainerCard}>
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
            <div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <Label name="Banh Mi" type="baguette" />
                    <Label name="Xoi" type="bowl-rice" />
                    <Label name="Mi tron" type="bowl-chopsticks-noodles" />
                </div>
            </div>
        </div>
    );
}
