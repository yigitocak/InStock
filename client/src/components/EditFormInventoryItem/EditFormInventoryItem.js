import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditFormInventoryItem.scss';
import arrowDrop from '../../assets/icons/arrow_drop_down-24px.svg';

const EditFormInventoryItem = ({ item }) => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.item_name.value;
        const description = form.description.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const warehouse = form.warehouse_name.value;

        const itemData = {
            name,
            description,
            category,
            quantity,
            warehouse
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
                            <input id='description' className='edit__input-description' type='text' defaultValue={item.description} />
                        </div>
                        <div className='edit__form edit__select-wrapper'>
                            <label htmlFor='category' className='edit__label'>Category</label>
                            <select id='category' className='edit__select' defaultValue={item.category}>
                                <option value="">{item.item_name}</option>
                                
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
                                    checked={item.status === 'inStock'}
                                    className='edit__radio-button'
                                />
                                <label className='edit__radio-label' htmlFor="inStock">In stock</label>
                            </div>
                            <div className="edit__status-selector">
                                <input
                                    type="radio"
                                    id="outOfStock"
                                    value="outOfStock"
                                    checked={item.status === 'outOfStock'}
                                    className='edit__radio-button'
                                />
                                <label className='edit__radio-label' htmlFor="outOfStock">Out of stock</label>
                            </div>
                        </div>
                        {item.status === 'inStock' && (
                            <div className='edit__quantity'>
                                <label htmlFor='item-name' className='edit__label'>Quantity</label>
                                <input id='item-name' className='edit__input-q' type='text' defaultValue={item.quantity} />
                            </div>
                        )}
                        <div className='edit__container-2'>
                            <label className='edit__label' htmlFor='warehouse'>Warehouse</label>
                            <select id='warehouse' className='edit__select' defaultValue={item.warehouse_name}>
                                <option value=""></option>
                                <option value={item.warehouse_name}>{item.warehouse_name}</option>
                            </select>
                            <img className='edit__arrowdrop' src={arrowDrop} alt='arrow drop down' />
                        </div>
                    </section>
                </div>
                <section className='edit__buttons'>
                    <button className='edit__button' onClick={() => navigate("/inventories")}>Cancel</button>
                    <button className='edit__button edit__button--blue'>Save</button>
                </section>
            </form>
        </section>
    );
}

export default EditFormInventoryItem;