import "./InventoryList.scss"
import axios from 'axios'
import {useState, useEffect} from 'react'
import InventMap from "../InventMap/InventMap";
import dropdown from "../../assets/icons/sort-24px.svg"

const InventoryList =({warehouseId}) => {
    const ApiUrl = "http://localhost:8080/api"
    const [activeInventory, setactiveInventory] = useState(null)

    const getInventory = async() => {
        try{
            const response = await axios.get(`${ApiUrl}/warehouses/${warehouseId}/inventories`)
            setactiveInventory(response.data)
        }
        catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        getInventory()
        },[warehouseId])
        if (! activeInventory){
            return<div>Loading ...</div>
        }
    return (
        <div className="invent__h">
            <div className="invent__titlecon">
                <div className="invent__title" >
                    <p>INVENTORY ITEM</p>
                    <img className="invent__icons" src={dropdown} alt="sort" />
                </div>
                <div className="invent__title">
                    <p>CATEGORY</p>
                    <img className="invent__icons" src={dropdown} alt="sort" />
                </div>
                <div className="invent__title">
                    <p>STATUS</p>
                    <img className="invent__icons" src={dropdown} alt="sort" />
                </div>
                <div className="invent__title">
                    <p>QUANTITY</p>
                    <img className="invent__icons" src={dropdown} alt="sort" />
                </div>
                <div className="invent__title invent__title--mod">
                    <p>ACTIONS</p>
                    <img className="invent__icons invent__icons--mod" src={dropdown} alt="sort" />
                </div>
                
            </div>
            <div>{
                    activeInventory.map((inventory) =>{
                        return(
                            <div>
                          <InventMap
                          key={inventory.id}
                          inventory={inventory}
                          reRender={getInventory}
                          />
                        </div>
                    )})
                
                }

            </div>
        </div>
    )
}
 export default InventoryList;