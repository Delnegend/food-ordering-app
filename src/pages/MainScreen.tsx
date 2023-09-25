import { strings } from "../assets/store";
import FoodCard from "../components/FoodCard";
import HomeTopBar from "../components/HomeTopBar/HomeTopBar";
import Label from "../components/Label";
import { useRef, useEffect } from "react";
import type { FoodList } from "../components/FoodCard";
import type { HomeTopBarProps } from "../components/HomeTopBar/HomeTopBar";
import type { LabelItem } from "../components/Label";

interface HomePageProps {
	foodList: FoodList;
	foodListUnfiltered: FoodList;
	foodTypes: Array<LabelItem>;
	avatarUrl: string;
	userName: string;
	userEmail: string;
	currentActiveLabel: string;
	setCurrentActiveLabel: (label: string) => void;
	filteredFoodList: FoodList;
	setFilteredFoodList: (foodList: FoodList) => void;
	homeTopBarData: HomeTopBarProps["path"];
}

export type { HomePageProps };

export default function MainScreen(props: HomePageProps) {
	const labelContainerRef = useRef<HTMLDivElement>(null);
	const containerTopRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!labelContainerRef.current || !containerTopRef.current) {
			return;
		}

		// const computedStyle = window.getComputedStyle(labelContainerRef.current);
		// const leftPadStr = computedStyle.getPropertyValue("padding-left");
		// const rightPadStr = computedStyle.getPropertyValue("padding-right");
		// const leftPad = Number(leftPadStr.slice(0, -2));
		// const rightPad = Number(rightPadStr.slice(0, -2));

		const computedDocStyle = window.getComputedStyle(document.documentElement);
		const pageMaxWidthStr = computedDocStyle.getPropertyValue("--page-max-width");
		const pageMaxWidth = Number(pageMaxWidthStr.substring(0, pageMaxWidthStr.length - 2));

		const labelContainerWidth = window.innerWidth > 600 ? pageMaxWidth : window.innerWidth;

		labelContainerRef.current.style.width = `${labelContainerWidth}px`;
	}, []);

	return (
		<div>
			<div
				className="mx-auto mb-0 mt-6 flex w-[--page-width] max-w-[--page-max-width] flex-col items-center"
				ref={containerTopRef}
			>
				<HomeTopBar
					avatarUrl={props.avatarUrl}
					userName={props.userName}
					userEmail={props.userEmail}
					path={props.homeTopBarData}
				/>
				<div className="mb-4 mt-7 w-full text-left font-sans text-5xl font-bold capitalize text-dark [text-wrap:balance]">
					{strings.welcomeMessage}
				</div>
			</div>

			<div
				className="mx-auto my-0 flex gap-4 overflow-y-visible overflow-x-scroll px-8 py-4"
				ref={labelContainerRef}
			>
				{props.foodTypes.map((value, index) => {
					return (
						<Label
							key={index}
							name={value.name}
							thisLabel={value.thisLabel}
							faIcon={value.faIcon}
							activeLabel={props.currentActiveLabel}
							setActiveLabel={props.setCurrentActiveLabel}
							filteredFoodList={props.filteredFoodList}
							setFilteredFoodList={props.setFilteredFoodList}
							foodList={props.foodListUnfiltered}
						/>
					);
				})}
			</div>

			<div className="mx-auto mb-[calc(var(--footbar-height)+1rem)] flex w-[--page-width] max-w-[--page-max-width] flex-col items-center justify-items-center gap-4">
				{Object.entries(props.foodList).map(([key, value]) => {
					return (
						<FoodCard
							key={key}
							uuid={key}
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
		</div>
	);
}
