import "./InventoryTab.scss"
import axios from 'axios'
import dropdown from "../../assets/icons/sort-24px.svg"
import { useState, useEffect } from "react";
import {DeleteInventoryModal} from "../DeleteInventoryModal/DeleteInventoryModal";
import InventMapT from "../InventMapT/InventMapT";

const InventoryTab =() => {
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(!modalOpen);

    const [inventList, setinventList] = useState(null)
    const ApiUrl = "http://localhost:8080/api"

    useEffect(() => {
        const getInventory = async() => {
            try{
                const response = await axios.get(`${ApiUrl}/inventories`)
                setinventList(response.data)
            }
            catch(err){
                console.error(err)
            }
        }
        getInventory()
        },[])
        if (! inventList){
            return<div>Loading ...</div>
        }

 
    return (
        <div className="invent">
            <div className="invent__titlecon">
                <div className="invent__title" >
                    <p>INVENTORY ITEM</p>
                    <img className="invent__icons" src={dropdown} alt="" />
                </div>
                <div className="invent__title">
                    <p>CATEGORY</p>
                    <img className="invent__icons" src={dropdown} alt="" />
                </div>
                <div className="invent__title">
                    <p>STATUS</p>
                    <img className="invent__icons" src={dropdown} alt="" />
                </div>
                <div className="invent__title">
                    <p>QUANTITY</p>
                    <img className="invent__icons" src={dropdown} alt="" />
                </div>
                <div className="invent__title">
                    <p>WAREHOUSE</p>
                    <img className="invent__icons" src={dropdown} alt="" />
                </div>
                <div className="invent__title">
                    <p>ACTIONS</p>
                    <img className="invent__icons" src={dropdown} alt="" />
                </div>
                
            </div>
            <div>
                {
                    inventList.map((inventory) =>{
                        return(
                           <div>
                            <InventMapT 
                            key = {inventory.id}
                            inventory={inventory}
                            />
                        {modalOpen && <DeleteInventoryModal inventoryName="placeholder" closeModal={toggleModal} />}
                        </div>
                    )})
                }
            </div>
        </div>
       
    )
}
 export default InventoryTab;