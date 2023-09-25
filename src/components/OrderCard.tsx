import { readablePrice, strings } from "../assets/store";
import type { OrderStatus } from "../assets/store";

export default function OrderCard(props: {
	image: string;
	name: string;
	price: number;
	orderNumber: string;
	etaInMinutes: number;
	status: OrderStatus;
}) {
	return (
		<div className="flex flex-col gap-4 rounded-xl p-8 shadow-xl">
			{/* thumb, title, price, order number */}
			<div className="flex flex-row items-stretch justify-between gap-6">
				<img
					className="h-20 w-20 rounded-2xl object-cover shadow-[11px_17px_22px_0_#D3D1D873]"
					src={props.image}
				/>
				<span className="flex w-full flex-col items-start justify-center">
					<span className="font-sans text-2xl font-bold">{props.name}</span>
					<span className={`font-sans`}>{readablePrice(props.price)}</span>
				</span>
				<span className="font-sans text-xl text-primary">#{props.orderNumber}</span>
			</div>

			{/* status */}
			<div className="flex flex-row justify-between">
				<span className="flex flex-col gap-1">
					<span className="font-sans text-gray">{strings.eta}</span>
					<span className="font-sans">
						<span className="text-5xl font-bold text-dark">{props.etaInMinutes}</span>
						<span className="text-dark">&nbsp;{strings.minutes}</span>
					</span>
				</span>
				<span className="flex flex-col gap-1">
					<span className="font-sans text-gray">{strings.now}</span>
					<span className="font-sans text-dark">{props.status}</span>
				</span>
			</div>

			{/* action buttons */}
			<div className="grid grid-cols-2 gap-4">
				<button className="rounded-full py-3 font-sans text-lg shadow-btn-alt transition-all hover:scale-105 active:scale-100">
					{strings.cancelOrder}
				</button>
				<button className="rounded-full bg-[--color-primary] py-3 font-sans text-lg text-white shadow-btn-primary transition-all hover:scale-105 active:scale-100">
					{strings.viewJourney}
				</button>
			</div>
		</div>
	);
}
