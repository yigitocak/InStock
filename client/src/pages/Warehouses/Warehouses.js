import './Warehouses.scss'
import WarehouseSearch from "../../components/WarehouseSearch/WarehouseSearch"
import WarehouseItem from '../../components/WarehouseItem/WarehouseItem'
import { useState, useEffect } from 'react'
import axios from 'axios'
import WarehouseNav from '../../components/WarehouseNav/WarehouseNav'
const Warehouses = () => {
    const [warehouseList, setWarehouseList] = useState([])
    const API_URL = "http://localhost:8080/api"
    useEffect(() => {
        const getWarehouses = async() => {
            try {
                const warehousesData = await axios.get(API_URL + '/warehouses')
                setWarehouseList(warehousesData.data)
            } catch (error) {
                console.error(error)
            }
        }
        getWarehouses()
    }, [])
    return (
        <main className='warehousesMain'>
            <section className='warehousesMain__container'>
                <WarehouseSearch />
                <WarehouseNav />
                {warehouseList.map((warehouse) => {
                    return (
                        <WarehouseItem
                            key={warehouse.id}
                            name={warehouse.warehouse_name}
                            address={warehouse.address}
                            city={warehouse.city}
                            country={warehouse.country}
                            contactName={warehouse.contact_name}
                            contactPhone={warehouse.contact_phone}
                            contactEmail={warehouse.contact_email}
                        />
                    )
                })}
            </section>
        </main>
    )
}
export default Warehouses