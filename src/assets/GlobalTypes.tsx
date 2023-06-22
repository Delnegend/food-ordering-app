type FoodItem = {
    name: string;
    price: number;
    prepare_time: number;
    taglist: string[];
    image: string;
};

type FoodList = {
    [key: string]: FoodItem;
};

type CartList = {
    [key: string]: number;
};

type RouteList = {
    icon: string;
    path: string;
    page: JSX.Element;
}[];

export type { FoodItem, FoodList, CartList, RouteList };
