import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './EditFormInventoryItem.scss';
import arrowDrop from '../../assets/icons/arrow_drop_down-24px.svg';

const EditFormInventoryItem = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    const [status, setStatus] = useState('');
    const [itemData, setItemData] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/inventories/${id}`);
                const itemData = response.data;
                setItemData(itemData); 
                setStatus(itemData.status);
                const allItemsResponse = await axios.get('http://localhost:8080/api/inventories');
                const allItems = allItemsResponse.data;
                const uniqueCategories = Array.from(new Set(allItems.map(item => item.category)));
                const uniqueWarehouses = Array.from(new Set(allItems.map(item => item.warehouse_name)));
                setCategories(uniqueCategories);
                setWarehouses(uniqueWarehouses);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'status') {
            setStatus(value);
            setItemData(prevItemData => ({
                ...prevItemData,
                [name]: value,
                quantity: value === 'inStock' ? prevItemData.quantity || 10 : ''
            }));
        } else {
            setItemData(prevItemData => ({
                ...prevItemData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const quantity = itemData.status === "Out of Stock" ? 0 : itemData.quantity;
            await axios.put(`http://localhost:8080/api/inventories/${id}`, {
                item_name: itemData.item_name,
                description: itemData.description,
                category: itemData.category,
                status: itemData.status,
                warehouse_name: itemData.warehouse_name,
                quantity: quantity
            });
            alert("Item successfully Edited!");
            navigate("/inventory");
        } catch (error) {
            console.error("Error editing item:", error);
            alert("Failed to edit item. Please try again.");
        }
    };

    if (!itemData) {
        return <div>Loading...</div>;
    }


    return (
        <section className='edit__main'>
            <form className='edit__container' onSubmit={handleSubmit}>
                <div className='edit__tablet'>
                    <section className='edit__item'>
                        <h2 className='edit__title'>Item Details</h2>
                        <div className='edit__form'>
                            <label htmlFor='item_name' className='edit__label'>Item Name</label>
                            <input id='item_name' className='edit__input' type='text' defaultValue={itemData.item_name} onChange={handleInputChange} required />
                        </div>
                        <div className='edit__form'>
                            <label htmlFor='description' className='edit__label'>Description</label>
                            <textarea id='description' className='edit__input-description' type='text' defaultValue={itemData.description} onChange={handleInputChange} required />
                        </div>
                        <div className='edit__form edit__select-wrapper'>
                            <label htmlFor='category' className='edit__label'>Category</label>
                            <select id='category' className='edit__select' defaultValue={itemData.category} onChange={handleInputChange}>
                                <option value="">{itemData.category}</option>
                                {categories.map((category, index) => (
                                    category !== itemData.category && (
                                        <option key={index} value={category}>{category}</option>
                                    )
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
                                    name="status"
                                    value="inStock"
                                    checked={itemData.status === 'inStock'}
                                    onChange={handleInputChange}
                                    className='edit__radio-button'
                                />
                                <label className='edit__radio-label' htmlFor="inStock">In stock</label>
                            </div>
                            <div className="edit__status-selector">
                                <input
                                    type="radio"
                                    id="outOfStock"
                                    name="status"
                                    value="outOfStock"
                                    checked={itemData.status === 'outOfStock'}
                                    onChange={handleInputChange}
                                    className='edit__radio-button'
                                />
                                <label className='edit__radio-label' htmlFor="outOfStock">Out of stock</label>
                            </div>
                        </div>
                        {itemData.status === 'inStock' && (
                            <div className='edit__quantity'>
                                <label htmlFor='quantity' className='edit__label'>Quantity</label>
                                <input id='quantity' className='edit__input-q' type='text' valuealue={itemData.quantity} onChange={handleInputChange} required />
                            </div>
                        )}
                        <div className='edit__container-2'>
                            <label htmlFor='warehouse_name' className='edit__label'>Warehouse</label>
                            <select id='warehouse_name' className='edit__select' defaultValue={itemData.warehouse_name} onChange={handleInputChange}>
                                <option value="">{itemData.warehouse_name}</option>
                                {warehouses.map((warehouse, index) => (
                                    warehouse !== itemData.warehouse_name && (
                                        <option key={index} value={warehouse}>{warehouse}</option>
                                    )
                                ))}
                            </select>
                            <img className='edit__arrowdrop' src={arrowDrop} alt='arrow drop down' />
                        </div>
                    </section>
                </div>
                <section className='edit__buttons'>
                    <button type='button' className='edit__button' onClick={() => navigate("/inventory")}>Cancel</button>
                    <button type='submit' className='edit__button edit__button--blue'>Save</button>
                </section>
            </form>
        </section>
    );
};

export default EditFormInventoryItem;
