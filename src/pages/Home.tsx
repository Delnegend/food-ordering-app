import FoodCard from "../components/FoodCard/FoodCard";
import Label from "../components/CategoryLabel/Label";
import { LabelProps } from "../components/CategoryLabel/Label";
import HomeTopBar from "../components/HomeTopBar/HomeTopBar";
import { FoodList } from "../assets/GlobalTypes";

import styles from "./Home.module.scss";

type HomePageProps = {
    food_list: FoodList;
    food_types: LabelProps[];
    welcome_message: string;
    appName: string;
    avatarUrl: string;
    userName: string;
    userEmail: string;
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
            <div className={styles.welcome_message}>
                {props.welcome_message}
            </div>
            <div className={styles.label_container}>
                {props.food_types.map((value, index) => {
                    return (
                        <Label
                            key={index}
                            name={value.name}
                            type={value.type}
                            faIcon={value.faIcon}
                        />
                    );
                })}
            </div>
            <div className={styles.food_item_container}>
                {Object.entries(props.food_list).map(([key, value]) => {
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
            </div>
        </div>
    );
}
