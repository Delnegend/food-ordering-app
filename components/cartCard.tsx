import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle, faMinusCircle, faTrash } from "@fortawesome/fontawesome-free-solid"
import { useState } from "react"

function Item(props) {
    const [quantity, setQuantity] = useState(props.quantity)

    return (
        <div style={{display:"flex",padding:"20px 20px 20px 20px",userSelect:"none"}}>
            <img src={props.image} alt="Not found" style={{width:"100px",height:"100px"}}></img>
            <div className="Info">
                <div style={{display:"flex",width:"100%"}}>
                    <div className="Name">{props.name}</div>
                    <FontAwesomeIcon icon={faTrash} id="delete" onClick={
                        () => {
                            
                        }
                    }/>
                </div>
                <div className="Note">{props.note}</div>
                <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                    <div className="Price">{props.price}</div>
                    <div className="Quantity">
                        <FontAwesomeIcon icon={faMinusCircle} style={{color:"#fe734c"}} size="lg" onClick={
                            () => {
                                if (quantity > 0) {
                                    setQuantity(quantity - 1)
                                }
                            }} 
                        />
                        <span id="value">{quantity}</span>
                        <FontAwesomeIcon icon={faPlusCircle} style={{color:"#fe734c"}} size="lg" onClick={
                            () => {
                                setQuantity(+quantity + 1)
                            }
                        }/>
                        </div>
                    </div>
                </div>
                
        </div>
  )
}

export default Item




