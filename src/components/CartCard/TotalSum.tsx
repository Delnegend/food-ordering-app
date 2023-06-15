import { CartCardProps } from "./CartCard";

function TotalSum(props: Array<CartCardProps>){
    let total = 0;
    props.forEach((item) => {
        total += item.price * item.quantity;
    })
    return total;
}

export default TotalSum;