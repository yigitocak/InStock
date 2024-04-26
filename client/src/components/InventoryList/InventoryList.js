import "./InventoryList.scss"
import axios from 'axios'
import edit from "../../assets/icons/edit-24px.svg";
import deletecon from "../../assets/icons/delete_outline-24px.svg"
import right from "../../assets/icons/chevron_right-24px.svg"
import dropdown from "../../assets/icons/sort-24px.svg"
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const InventoryList =({warehouseId}) => {

    const ApiUrl = "http://localhost:8080/api"
    const [activeInventory, setactiveInventory] = useState(null)

    useEffect(() => {
        const getInventory = async() => {
            try{
                const response = await axios.get(`${ApiUrl}/warehouses/${warehouseId}/inventories`)
                setactiveInventory(response.data)
            }
            catch(err){
                console.error(err)
            }
        }
        getInventory()
        },[warehouseId])
        if (! activeInventory){
            return<div>Loading ...</div>
        }
    
    const statusOf =() => {
        activeInventory.forEach((inventory) =>{
            if (inventory.quantity === 0){
               return( <p className="invent__in">IN STOCK</p>)
            }
            else{
                return(<p className="invent__out">OUT OF STOCK</p>)
            }
        })
        
    }
    console.log(activeInventory)
    return (
        <div className="invent">
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
                <div className="invent__title">
                    <p>ACTIONS</p>
                    <img className="invent__icons" src={dropdown} alt="sort" />
                </div>
                
            </div>

            <div>
                {
                    activeInventory.map((inventory) =>{
                        return(
                        <article className="invent__itemcon" >
                            <section className="invent__list">
                                <section className="invent__des">
                                    <div className="invent__container">
                                        <p className="invent__label" >INVENTORY ITEM</p>
                                        <div className="invent__item">
                                            <p>{inventory.item_name}</p>
                                            <img className="invent__icons" src={right} alt=""/>
                                        </div>
                                    </div>
                                    <div className="invent__container">
                                        <p className="invent__label" >CATEGORY</p>
                                        <p className="invent__item">{inventory.category}</p>
                                    </div>
                                </section>
                                <section className="invent__available">
                                    <div className="invent__container">
                                        <p className="invent__label" >STATUS</p>
                                        <p className="invent__item">{inventory.status}</p>
                                    </div>
                                    <div className="invent__container">
                                        <p className="invent__label" >QUANTITY</p>
                                        <p className="invent__item">{inventory.quantity}</p>
                                    </div>
                                </section>
                            
                                <section className='invent__actions'>
                                    <button className="invent__button" >
                                        <img src={deletecon} alt="Delete"/>
                                    </button>
                                    <Link to='/api/warehouses'>
                                        <img src={edit} alt='edit'/>
                                    </Link>
                                </section>
                            </section>
                        </article>
                    )})
                }
            </div>
        </div>
    )
}
 export default InventoryList;