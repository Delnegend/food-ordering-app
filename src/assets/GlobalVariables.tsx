const foodDetailPath = "/food-details/";

const readablePrice = (price: number) => {
    const priceString = price.toString();
    const priceLength = priceString.length;

    let result = "";
    for (let i = 0; i < priceLength; i++) {
        result += priceString[i];
        if ((priceLength - i - 1) % 3 === 0 && i !== priceLength - 1) {
            result += ".";
        }
    }

    return result + "đ";
};

const vibrateDuration = 8;

export { foodDetailPath, readablePrice, vibrateDuration };
