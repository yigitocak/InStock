import InventoryDetails from "../../components/InventoryDetails/InventoryDetails"
import { useParams } from "react-router-dom"
import "./InventoryItemDetails.scss"

const InventoryItemDetails = () => {

   const {inventoryId} = useParams()

    return (
        <div className="details" >
            <div className="deatails__container" >
                <InventoryDetails
                inventoryId={inventoryId}
                />
            </div>
        </div>
    )
}

export default InventoryItemDetails