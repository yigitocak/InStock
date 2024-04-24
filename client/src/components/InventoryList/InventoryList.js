import "./InventoryList.scss"
import axios from 'axios'

const InventoryList =({inventList}) => {
    return (
        <div className="invent__titlecon">
            <div className="invent__titlecon">
                <p>INVENTORY ITEM</p>
                <p>CATEGORY</p>
                <p>STATUS</p>
                <p>QUANTITY</p>
                <p>ACTIONS</p>
            </div>
            <div>
                {
                    inventList.forEach((inventory) =>{
                        <div>
                        <div className="invent_item">{inventList.item_name}</div>
                        <div className="invent_item">{inventList.category}</div>
                        <div className="invent_item">{statusOf}</div>
                        <div className="invent_item">{inventList.quantity}</div>
                        <div className="invent_item">{inventList.item_name}</div>
                        </div>
                    })
                }

            </div>
        </div>

    )
}
 export default InventoryList;