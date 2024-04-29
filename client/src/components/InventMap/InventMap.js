import edit from "../../assets/icons/edit-24px.svg";
import deletecon from "../../assets/icons/delete_outline-24px.svg"
import right from "../../assets/icons/chevron_right-24px.svg"
import { NavLink, Link} from "react-router-dom";
import { useState } from "react";
import { DeleteInventoryModal } from "../DeleteInventoryModal/DeleteInventoryModal";


const InventMap = ({inventory, reRender}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(!modalOpen);
    
    return(
        <div>
            <article className="invent__tablet" key={inventory.id} >
                                
                                <NavLink to={`/inventory/${inventory.id}`} className="invent__item invent__item--nav">
                                    <p className="invent__object" >{inventory.item_name}</p>
                                    <img className="invent__icons invent__icons--right" src={right} alt=""/>
                                </NavLink>
                                <div className="invent__item">{inventory.category}</div>
                                <div className='invent__item'><p className={`${inventory.quantity?'in' : 'out'}`}>{inventory.status}</p></div>
                                <div className="invent__item">{inventory.quantity}</div>
                                <div className="invent__item invent__item--mod">
                                    <button className="invent__buttond" onClick={toggleModal} >
                                            <img  src={deletecon} alt="Delete"/>
                                    </button>
                                    <Link to='/inventory/:id/edit'>
                                        <img src={edit} alt='edit'/>
                                    </Link>
                                    
                                </div>
                                </article>
                                <article className="invent__itemcon" key={inventory.id} >
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
                                </section>
                                </section>
                                <section className='invent__actions'>
                                    <button className="invent__buttond" onClick={toggleModal} >
                                        <img src={deletecon} alt="Delete"/>
                                    </button>
                                    <Link to='/api/warehouses'>
                                        <img src={edit} alt='edit'/>
                                    </Link>
                                </section>
                                
                                </article>
                                {modalOpen && <DeleteInventoryModal itemName={inventory.item_name} id={inventory.id} reRender={reRender} closeModal={toggleModal} />}
        </div>
    )
}
export default InventMap;