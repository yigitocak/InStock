import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FormAddInventoryItem.scss';
import arrowDrop from '../../assets/icons/arrow_drop_down-24px.svg';


const FormAddInventoryItem = () => {
    
    const [status, setStatus] = useState('');
    const handleStatusClick = (newStatus) => {
        setStatus(newStatus);
    };
    const navigate = useNavigate();


    return (
            <form className='addForm__container' >
                <div className='addForm__tablet'>
                    <section className='addForm__item'>
                        <h2 className='addForm__title'>Item Details</h2>
                        <div className='addForm__form'>
                            <label htmlFor='item-name' className='addForm__label'>
                                Item Name
                            </label>
                            <input id='item-name' className='addForm__input' type='text' />
                        </div>
                        <div className='addForm__form'>
                            <label htmlFor='description' className='addForm__label'>
                                Description
                            </label>
                            <textarea id='description' className='addForm__input-description' type='text'/>
                        </div>
                        <div className='addForm__form addForm__select-wrapper'>
                            <label htmlFor='category' className='addForm__label'>Category</label>
                            <select id='category' className='addForm__select'>
                            {/* <option value="">{item.category}</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))} */}
                            </select>
                            <img className='addForm__arrowdrop' src={arrowDrop} alt='arrow drop down' />
                        </div>
                    </section>
                    <div className='addForm__border'></div>
                    <section className='addForm__availability'>
                        <h2 className='addForm__title'>Item Availability</h2>
                        <h3 className='addForm__label'>Status</h3>
                        <div className='addForm__radio'>
                            <div className="addForm__status-selector">
                                <input
                                    type="radio"
                                    id="inStock"
                                    value="inStock"
                                    checked={status === 'inStock'}
                                    onChange={() => handleStatusClick('inStock')}
                                    className='addForm__radio-button'
                                />
                                <label className='addForm__radio-label' htmlFor="inStock">In stock</label>
                            </div>
                            <div className="addForm__status-selector">
                                <input
                                    type="radio"
                                    id="outOfStock"
                                    value="outOfStock"
                                    checked={status === 'outOfStock'}
                                    onChange={() => handleStatusClick('outOfStock')}
                                    className='addForm__radio-button'
                                />
                                <label className='addForm__radio-label' htmlFor="outOfStock">Out of stock</label>
                            </div>
                        </div>
                        {status === 'inStock' && (
                            <div className='addForm__quantity'>
                                <label htmlFor='item-name' className='addForm__label'>Quantity</label>
                                <input id='item-name' className='addForm__input-q' type='text' />
                            </div>
                        )}
                        <div className='addForm__container-2'>
                        <label htmlFor='warehouse_name' className='addForm__label'>Warehouse</label>
                            <select id='warehouse_name' className='addForm__select' >
                                {/* <option value="">{item.warehouse_name}</option> */}
                                {/* {warehouses.map((warehouse, index) => (
                                    warehouse !== item.warehouse_name && (
                                    <option key={index} value={warehouse}>{warehouse}</option>
                                    )
                                ))} */}
                            </select>
                            <img className='addForm__arrowdrop' src={arrowDrop} alt='arrow drop down' />
                        </div>
                    </section>
                </div>
                <section className='addForm__buttons'>
                    <button type='button' className='addForm__button' onClick={() => navigate("/inventories")}>Cancel</button>
                    <button type='submit' className='addForm__button addForm__button--blue'>Save</button>
                </section>
            </form>
    );
}
export default FormAddInventoryItem