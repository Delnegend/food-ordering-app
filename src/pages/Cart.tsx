import CartCard from "../components/CartCard/CartCard";
import Total from "../components/CartCard/Total";
import cart_mock_data from "../_SAMPLE_DATA/cart_mock.json";
import food_mock_data from "../_SAMPLE_DATA/food_mock.json";
import styles from "./Cart.module.scss";
import { FoodList } from "../components/FoodCard/FoodCard";

type CartList = {
    [uuid: string]: number;
};

export type { CartList };

const TotalSum = (food: FoodList, cart: CartList) => {
    let total = 0;
    Object.entries(cart).forEach(([uuid, quantity]) => {
        total += food[uuid].price * quantity;
    });
    return total;
};

export default function Cart() {
    const cart_items: CartList = cart_mock_data;
    const food_items: FoodList = food_mock_data;

    return (
        <div className={styles.container}>
            {Object.entries(cart_items).map(([uuid, quantity]) => {
                return (
                    <CartCard
                        foodList={food_items}
                        uuid={uuid}
                        quantity={quantity}
                    />
                );
            })}
            <div>
                <Total total={TotalSum(food_items, cart_items)} />
            </div>
        </div>
    );
}
