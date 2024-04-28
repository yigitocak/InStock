import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FormAddInventoryItem.scss';
import arrowDrop from '../../assets/icons/arrow_drop_down-24px.svg';

const FormAddInventoryItem = () => {
    const [formData, setFormData] = useState({
        item_name: '',
        description: '',
        category: '',
        status: '',
        quantity: '',
        warehouseName: ''
    });

    const [status, setStatus] = useState('')
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleStatusClick = (newStatus) => {
        setStatus(newStatus);
    };

    const API_URL = "http://localhost:8080/api"
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_URL + '/inventories', formData)
            console.log(response.data)
            alert('You have added a new item to the inventory!')
        } catch (error) {
            console.error(error)
            alert('Failed to add new item to the inventory.')
        }
    };
    
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [warehouseOptions, setWarehouseOptions] = useState([]);

    useEffect(() => {
        const getTheOptions = async () => {
            try {
                const options = await axios.get(API_URL + '/inventories')
                const optionsData = options.data;

                const uniqueCategories = [...new Set(optionsData.map(obj => obj.category))]
                const categoryOptions = uniqueCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ));
                setCategoryOptions(categoryOptions);

                const uniqueWarehouses = [...new Set(optionsData.map(obj => obj.warehouse_name))]
                const warehouseOptions = uniqueWarehouses.map((warehouse, index) => (
                    <option key={index} value={warehouse}>{warehouse}</option>
                ));
                setWarehouseOptions(warehouseOptions);
            } catch(error) {
                console.error(error)
            }
        }
        getTheOptions();
    }, []);

    return (
        <form className='addForm__container' onSubmit={handleSubmit}>
            <div className='addForm__tablet'>
                <section className='addForm__item'>
                    <h2 className='addForm__title'>Item Details</h2>
                    <div className='addForm__form'>
                        <label htmlFor='item-name' className='addForm__label'>
                            Item Name
                        </label>
                        <input id='item-name' className='addForm__input' type='text' name='item_name' value={formData.item_name} onChange={handleChange} />
                    </div>
                    <div className='addForm__form'>
                        <label htmlFor='description' className='addForm__label'>
                            Description
                        </label>
                        <textarea id='description' className='addForm__input-description' type='text' name='description' value={formData.description} onChange={handleChange} />
                    </div>
                    <div className='addForm__form addForm__select-wrapper'>
                        <label htmlFor='category' className='addForm__label'>Category</label>
                        <select id='category' className='addForm__select' name='category' value={formData.category} onChange={handleChange}>
                            {categoryOptions}
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
                            <label htmlFor='quantity' className='addForm__label'>Quantity</label>
                            <input id='quantity' className='addForm__input-q' type='number' name='quantity' value={formData.quantity} onChange={handleChange} />
                        </div>
                    )}
                    <div className='addForm__container-2'>
                        <label htmlFor='warehouseName' className='addForm__label'>Warehouse</label>
                        <select id='warehouseName' className='addForm__select' name='warehouseName' value={formData.warehouseName} onChange={handleChange} >
                            {warehouseOptions}
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

export default FormAddInventoryItem;