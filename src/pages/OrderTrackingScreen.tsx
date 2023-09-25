import foodMockData from "../../public/food_mock.json";
import { OrderStatus } from "../assets/store";
import OrderCard from "../components/OrderCard";
import type { FoodList } from "../components/FoodCard";

export default function OrderTrackingScreen() {
	const foodMock: FoodList = foodMockData;

	return (
		<div className="mx-auto mb-[calc(var(--footbar-height)+2rem)] mt-6 flex w-[--page-width] max-w-[--page-max-width] flex-col gap-4">
			{Object.entries(foodMock).map(([key, value]) => {
				return (
					<OrderCard
						key={key}
						name={value.name}
						price={value.price}
						etaInMinutes={value.prepare_time}
						image={value.image}
						status={OrderStatus.Preparing}
						orderNumber="123456"
					/>
				);
			})}
		</div>
	);
}
