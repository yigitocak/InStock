import './WarehouseDetailsPage.scss'
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails"
import InventoryList from '../../components/InventoryList/InventoryList'
import { useParams } from "react-router-dom";
const WarehouseDetailsPage = () => {

    const {warehouseId} = useParams();
    
    return (
        <main className='details'>
            <section className='details__container'>
                <WarehouseDetails
                    warehouseId = {warehouseId}
                />
                <InventoryList
                    warehouseId = {warehouseId}
                />
            </section>
        </main>
    )
}
export default WarehouseDetailsPage;