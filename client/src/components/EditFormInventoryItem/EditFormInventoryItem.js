import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditFormInventoryItem.scss';
import arrowDrop from '../../assets/icons/arrow_drop_down-24px.svg';

const EditFormInventoryItem = ({ item }) => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (item.quantity > 0) {
            setStatus('inStock');
        } else {
            setStatus('outOfStock');
        }

        const fetchCategories = async () => {
            try {
                const categoriesResponse = await axios.get('http://localhost:8080/api/inventories');
                const uniqueCategories = Array.from(new Set(categoriesResponse.data.map(item => item.category)));
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        const fetchWarehouses = async () => {
            try {
                const warehousesResponse = await axios.get('http://localhost:8080/api/inventories');
                const uniqueWarehouses = Array.from(new Set(warehousesResponse.data.map(item => item.warehouse_name)));
                setWarehouses(uniqueWarehouses);
            } catch (error) {
                console.error('Error fetching warehouses:', error);
            }
        };

        fetchCategories();
        fetchWarehouses();
    }, [item]);

    const handleStatusClick = (newStatus) => {
        setStatus(newStatus);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const itemData = {
            name: item.item_name,
            description: item.description,
            category: item.category,
            quantity: item.quantity,
            warehouse: item.warehouse_name
        };

        try {
            const response = await axios.put(`http://localhost:8080/inventories/${item.id}`, itemData);

            if (response.status === 201) {
                alert("Item successfully Edited!");
                navigate("/");
            } else {
                alert("Failed to edit item. Please try again.");
            }
        } catch (error) {
            console.error("Error editing item:", error);
            alert("Failed to edit item. Please try again.");
        }
    };

    return (
        <section className='edit__main'>
            <form className='edit__container' onSubmit={handleSubmit}>
                <div className='edit__tablet'>
                    <section className='edit__item'>
                        <h2 className='edit__title'>Item Details</h2>
                        <div className='edit__form'>
                            <label htmlFor='item-name' className='edit__label'>Item Name</label>
                            <input id='item-name' className='edit__input' type='text' defaultValue={item.item_name} />
                        </div>
                        <div className='edit__form'>
                            <label htmlFor='description' className='edit__label'>Description</label>
                            <textarea id='description' className='edit__input-description' type='text' defaultValue={item.description} />
                        </div>
                        <div className='edit__form edit__select-wrapper'>
                            <label htmlFor='category' className='edit__label'>Category</label>
                            <select id='category' className='edit__select' defaultValue={item.category}>
                            <option value="">{item.category}</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                                
                            </select>
                            <img className='edit__arrowdrop' src={arrowDrop} alt='arrow drop down' />
                        </div>
                    </section>
                    <div className='edit__border'></div>
                    <section className='edit__availability'>
                        <h2 className='edit__title'>Item Availability</h2>
                        <h3 className='edit__label'>Status</h3>
                        <div className='edit__radio'>
                            <div className="edit__status-selector">
                                <input
                                    type="radio"
                                    id="inStock"
                                    value="inStock"
                                    checked={status === 'inStock'}
                                    onChange={() => handleStatusClick('inStock')}
                                    className='edit__radio-button'
                                />
                                <label className='edit__radio-label' htmlFor="inStock">In stock</label>
                            </div>
                            <div className="edit__status-selector">
                                <input
                                    type="radio"
                                    id="outOfStock"
                                    value="outOfStock"
                                    checked={status === 'outOfStock'}
                                    onChange={() => handleStatusClick('outOfStock')}
                                    className='edit__radio-button'
                                />
                                <label className='edit__radio-label' htmlFor="outOfStock">Out of stock</label>
                            </div>
                        </div>
                        {status === 'inStock' && (
                            <div className='edit__quantity'>
                                <label htmlFor='item-name' className='edit__label'>Quantity</label>
                                <input id='item-name' className='edit__input-q' type='text' defaultValue={item.quantity} />
                            </div>
                        )}
                        <div className='edit__container-2'>
                        <label htmlFor='warehouse_name' className='edit__label'>Warehouse</label>
                            <select id='warehouse_name' className='edit__select' defaultValue={item.warehouse_name}>
                                <option value="">{item.warehouse_name}</option>
                                {warehouses.map((warehouse, index) => (
                                    warehouse !== item.warehouse_name && (
                                    <option key={index} value={warehouse}>{warehouse}</option>
                                    )
                                ))}
                            </select>
                            <img className='edit__arrowdrop' src={arrowDrop} alt='arrow drop down' />
                        </div>
                    </section>
                </div>
                <section className='edit__buttons'>
                    <button type='button' className='edit__button' onClick={() => navigate("/inventories")}>Cancel</button>
                    <button type='submit' className='edit__button edit__button--blue'>Save</button>
                </section>
            </form>
        </section>
    );
}

export default EditFormInventoryItem;