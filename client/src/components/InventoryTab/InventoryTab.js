import "./InventoryTab.scss"
import axios from 'axios'
import edit from "../../assets/icons/edit-24px.svg";
import deletecon from "../../assets/icons/delete_outline-24px.svg"
import right from "../../assets/icons/chevron_right-24px.svg"
import dropdown from "../../assets/icons/arrow_drop_down-24px.svg"
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {DeleteInventoryModal} from "../DeleteInventoryModal/DeleteInventoryModal";

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
                            <article className="invent__tablet" key={inventory.id}>
                            <NavLink to={`/inventory/${inventory.id}`} className="invent__item invent__item--nav">
                                <p className="invent__object" >{inventory.item_name}</p>
                                <img className="invent__icons invent__icons--right" src={right} alt=""/>
                            </NavLink>
                            <div className="invent__item">{inventory.category}</div>
                            <div className='invent__item'><p className={`${inventory.quantity?'in' : 'out'}`}>{inventory.status}</p></div>
                            <div className="invent__item">{inventory.quantity}</div>
                            <div className="invent__item">{inventory.warehouse_name}</div>
                            <div className="invent__item invent__item--mod">
                                    <Link to={`/inventory/${inventory.id}/edit`}>
                                        <img  src={edit} alt='edit'/>
                                    </Link>
                                    <button className="invent__buttond" onClick={toggleModal} >
                                            <img  src={deletecon} alt="Delete"/>
                                    </button>
                                </div>
                            </article>
                            )

                    })
                }

            </div>
            <div>
                {
                    inventList.map((inventory) =>{
                        return(
                        <article className="invent__itemcon" >
                            <section className="invent__list">
                                <section className="invent__des">
                                    <div className="invent__container">
                                        <p>INVENTORY ITEM</p>
                                        <NavLink  className="invent__nav" to={`/inventory/${inventory.id}/`}>
                                            <p>{inventory.item_name}</p>
                                            <img className="invent__icons" src={right} alt=""/>
                                        </NavLink>
                                    </div>
                                    <div className="invent__container">
                                        <p className="invent__label" >CATEGORY</p>
                                        <p className="invent__item">{inventory.category}</p>
                                    </div>
                                </section>
                                <section className="invent__available">
                                    <div className="invent__container">
                                        <p className="invent__label" >STATUS</p>
                                        <p className={`invent__item ${inventory.quantity?'in' : 'out'}`}>{inventory.status}</p>
                                    </div>
                                    <div className="invent__container">
                                        <p className="invent__label" >QUANTITY</p>
                                        <p className="invent__item">{inventory.quantity}</p>
                                    </div>
                                    <div className="invent__container">
                                        <p className="invent__label" >WAREHOUSE</p>
                                        <p className="invent__item">{inventory.warehouse_name}</p>
                                    </div>
                                </section>
                            </section>
                                <section className='invent__actions'>
                                    <button className="invent__buttond" onClick={toggleModal} >
                                        <img src={deletecon} alt="Delete"/>
                                    </button>
                                    <Link to={`/inventory/${inventory.id}/edit`}>
                                        <img src={edit} alt='edit'/>
                                    </Link>
                                </section>
                        </article>
                    )})
                }
            </div>
            {modalOpen && <DeleteInventoryModal inventoryName="placeholder" closeModal={toggleModal} />}
        </div>
       
    )
}
 export default InventoryTab;