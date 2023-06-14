import styles from './FoodCard.module.css';
type FoodCardProps = {
    name: string;
    info: {
        delivery_price: number;
        time: number;
    }
    taglist: string[];
    image: string;
}
function FoodCard(props: FoodCardProps) {
    return (
        <>
            <div className={styles.container}>
                <img
                    className={styles.image} 
                    src={props.image}
                />
                <div className={styles.body}>
                    <p className={styles.foodname}>{props.name}</p>
                    <div className={styles.info}>
                        <i className="fa-solid fa-moped"></i><span>{props.info.delivery_price} </span>
                        <i className="fa-solid fa-clock"></i><span>{props.info.time} mins</span>
                    </div>
                    <div className={styles.taglist}>
                        {
                            props.taglist.map((tag, index) => {
                                return (
                                    <p className={styles.tag} key={index}>{tag}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default FoodCard;