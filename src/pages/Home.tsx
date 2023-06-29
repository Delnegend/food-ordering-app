import { useRef, useEffect } from "react";

import Label, { LabelProps } from "../components/CategoryLabel/Label";
import FoodCard, { FoodList } from "../components/FoodCard/FoodCard";
import HomeTopBar from "../components/HomeTopBar/HomeTopBar";

import styles from "./Home.module.scss";

type LabelPropsWithoutActiveLabel = Omit<
    LabelProps,
    | "currentActiveLabel"
    | "setCurrentActiveLabel"
    | "filteredFoodList"
    | "setFilteredFoodList"
    | "foodList"
>;

type HomePageProps = {
    foodList: FoodList;
    foodListUnfiltered: FoodList;
    foodTypes: LabelPropsWithoutActiveLabel[];
    welcome_message: string;
    appName: string;
    avatarUrl: string;
    userName: string;
    userEmail: string;
    currentActiveLabel: string;
    setCurrentActiveLabel: (label: string) => void;
    filteredFoodList: FoodList;
    setFilteredFoodList: (foodList: FoodList) => void;
};

export type { HomePageProps };

export default function Home(props: HomePageProps) {
    const labelContainerRef = useRef<HTMLDivElement>(null);
    const containerTopRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!labelContainerRef.current) return;
        if (!containerTopRef.current) return;
        const computedStyle = window.getComputedStyle(
            labelContainerRef.current
        );
        const leftPadStr = computedStyle.getPropertyValue("padding-left");
        const rightPadStr = computedStyle.getPropertyValue("padding-right");
        const leftPad = parseInt(leftPadStr.slice(0, -2));
        const rightPad = parseInt(rightPadStr.slice(0, -2));

        const computedDocStyle = window.getComputedStyle(
            document.documentElement
        );
        const pageMaxWidthStr =
            computedDocStyle.getPropertyValue("--page-max-width");
        const pageMaxWidth = parseInt(
            pageMaxWidthStr.substring(0, pageMaxWidthStr.length - 2)
        );

        const labelContainerWidth =
            window.innerWidth > 600 ? pageMaxWidth : window.innerWidth;

        labelContainerRef.current.style.width = `${
            labelContainerWidth - leftPad - rightPad
        }px`;
    }, []);

    return (
        <div>
            <div className={styles["container-top"]} ref={containerTopRef}>
                <HomeTopBar
                    avatarUrl={props.avatarUrl}
                    appName={props.appName}
                    userName={props.userName}
                    userEmail={props.userEmail}
                />
                <div className={styles["welcome-message"]}>
                    {props.welcome_message}
                </div>
            </div>

            <div className={styles["label-container"]} ref={labelContainerRef}>
                {props.foodTypes.map((value, index) => {
                    return (
                        <Label
                            key={index}
                            name={value.name}
                            type={value.type}
                            faIcon={value.faIcon}
                            currentActiveLabel={props.currentActiveLabel}
                            setCurrentActiveLabel={props.setCurrentActiveLabel}
                            filteredFoodList={props.filteredFoodList}
                            setFilteredFoodList={props.setFilteredFoodList}
                            foodList={props.foodListUnfiltered}
                        />
                    );
                })}
            </div>

            <div className={styles["food-item-container"]}>
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
