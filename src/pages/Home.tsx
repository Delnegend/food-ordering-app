import FoodCard from "../components/FoodCard/FoodCard"
import CartCard from "../components/CartCard/CartCard"
import Total from "../components/CartCard/Total"
import TotalSum from "../components/CartCard/TotalSum"

export default function Home() {
    const foodsample = [
        {
            name: 'Bánh Mì',
            info: {
                delivery_price: 20000,
                time: 30
            },
            taglist: ['Trứng', 'Thịt', 'Xúc xích'],
            image: 'https://hips.hearstapps.com/hmg-prod/images/banh-mi-with-grilled-pork1-1663331872.jpg?crop=0.683xw:1.00xh;0.317xw,0&resize=1200:*'
        },
        {
            name: 'Mì Ý',
            info: {
                delivery_price: 20000,
                time: 30
            },
            taglist: ['Trứng', 'Thịt', 'Xúc xích'],
            image: 'https://forza.com.vn/wp-content/uploads/2021/07/cach-lam-mi-y-thom-ngon-chuan-vi-tai-nha-6.jpeg'
        }
    ]
    const cartsample = [
        {
            name: 'Bánh Mì',
            note: 'Không ớt',
            price: 20000,
            image: 'https://hips.hearstapps.com/hmg-prod/images/banh-mi-with-grilled-pork1-1663331872.jpg?crop=0.683xw:1.00xh;0.317xw,0&resize=1200:*',
            quantity: 2
        },
        {
            name: 'Mì Ý',
            note: 'Không ớt',
            price: 20000,
            image: 'https://forza.com.vn/wp-content/uploads/2021/07/cach-lam-mi-y-thom-ngon-chuan-vi-tai-nha-6.jpeg',
            quantity: 1
        }
    ]
    return (
        <>
            <div style={
                {
                    display: 'flex',
                    width: '100%',
                    flexWrap: 'wrap',
                }
            }>
                {
                    foodsample.map((food, index) => {
                        return (
                            <FoodCard
                                key={index}
                                name={food.name}
                                info={food.info}
                                taglist={food.taglist}
                                image={food.image}
                            />
                        )
                    })
                }
                
            </div>
            {
                    cartsample.map((food, index) => {
                        return (
                            <CartCard
                                key={index}
                                name={food.name}
                                note={food.note}
                                price={food.price}
                                image={food.image}
                                quantity={food.quantity}
                            />
                        )
                    })
                }
            <div>
                <Total total={TotalSum(cartsample)}/>
            </div>
        </>
    )
}