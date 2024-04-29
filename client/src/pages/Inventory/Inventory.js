import InventoryTab from "../../components/InventoryTab/InventoryTab"
import InventoryHeader from "../../components/InventoryHeader/InventoryHeader"
import "./Inventory.scss"

const Inventory = () => {
    return (
        <div className="invents" >
            <div className="invents__div" >
            <InventoryHeader/>
            <InventoryTab />
            </div>
        </div>
    )
}

export default Inventory