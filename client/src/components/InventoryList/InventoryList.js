import "./InventoryList.scss"
import axios from 'axios'
import edit from "../../assets/icons/edit-24px.svg";
import deletecon from "../../assets/icons/delete_outline-24px.svg"
import right from "../../assets/icons/chevron_right-24px.svg"
import dropdown from "../../assets/icons/arrow_drop_down-24px.svg"
import {useState, useEffect} from 'react'

const InventoryList =({activeWh}) => {

    const ApiUrl = "http://localhost:8080"
    const [activeInventory, setactiveInventory] = useState(null)

    useEffect(() => {
        const getInventory = async() => {
            try{
                const response = await axios.get(`${ApiUrl}/`)
                setactiveVideo(response.data)
            }
            catch(err){
                console.error(err)
            }
        }
        getInventory()
        },[activeWh])
        if (! activeInventory){
            return<div>Loading ...</div>
        }
    
    const statusOf =() => {
        activeInventory.forEach((inventory) =>{
            if (activeInventory.quantity === 0){
               return( <p className="invent__in">IN STOCK</p>)
            }
            else{
                return(<p className="invent__out">OUT OF STOCK</p>)
            }
        })
        
    }
    return (
        <div className="invent__titlecon">
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
                    <p>ACTIONS</p>
                    <img className="invent__icons" src={dropdown} alt="" />
                </div>
                
            </div>
            <div>
                {
                    activeInventory.forEach((inventory) =>{
                        <article>
                        <div className="invent__item">
                            <p>{activeInventory.item_name}</p>
                            <img className="invent__icons" src={right} alt=""/>
                        </div>
                        <div className="invent__item">{activeInventory.category}</div>
                        <div className="invent__item">{statusOf}</div>
                        <div className="invent__item">{activeInventory.quantity}</div>
                        <div className="invent__item">
                            <img className="invent__icons" src={edit} alt =""/>
                            <img className="invent__icons" src={deletecon} alt =""/>
                        </div>
                        </article>
                    })
                }

            </div>
        </div>

    )
}
 export default InventoryList;