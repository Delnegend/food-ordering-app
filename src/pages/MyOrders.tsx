import MyOrderCard from "../components/MyOrderCard/MyOrderCard";
import { ContainerCard } from "../assets/GlobalStyles";
import { FoodList } from "../assets/GlobalTypes";
import food_mock_data from "../_SAMPLE_DATA/food_mock.json";

export default function MyOrders() {
    const food_mock: FoodList = food_mock_data;
    return (
        <div style={ContainerCard}>
            {Object.entries(food_mock).map(([key, value]) => {
                return (
                    <MyOrderCard
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
    );
}
