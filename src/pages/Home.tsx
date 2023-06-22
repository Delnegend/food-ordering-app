import FoodCard from "../components/FoodCard/FoodCard";
import { ContainerCard } from "../assets/GlobalStyles";
import { FoodList } from "../assets/GlobalTypes";

import food_mock_data from "../_SAMPLE_DATA/food_mock.json";

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
        <Total total={TotalSum(cartsample)} />
      </div>
    </>
  );
}
