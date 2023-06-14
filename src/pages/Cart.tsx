import Item from '../../components/cartCard.tsx'
import '../../styles/cartCard.css'
import banhmi from '../../public/banhmi.png'

export default function Cart() {
    return (
        <>
            <Item name="Bánh Mì" note="Trứng thịt xúc xích" price="20.000d" quantity="0" image={banhmi}/>
        </>
    )
}