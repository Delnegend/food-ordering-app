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
    return (
        <div className={styles.container}>
            <HomeTopBar
                avatarUrl={props.avatarUrl}
                appName={props.appName}
                userName={props.userName}
                userEmail={props.userEmail}
            />
            <div className={styles["welcome-message"]}>
                {props.welcome_message}
            </div>
            <div className={styles["label-container"]}>
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
