import './Warehouses.scss'
import WarehouseSearch from "../../components/WarehouseSearch/WarehouseSearch"
import WarehouseItem from '../../components/WarehouseItem/WarehouseItem'

const Warehouses = () => {
    return (
        <main className='warehousesMain'>
            <section className='warehousesMain__container'>
                <WarehouseSearch />
                <WarehouseItem />
            </section>
           
        </main>
    )
}

export default Warehouses