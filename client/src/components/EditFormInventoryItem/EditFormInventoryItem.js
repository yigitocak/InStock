import React, { useState } from 'react';
import './EditFormInventoryItem.scss';
import arrowDrop from '../../assets/icons/arrow_drop_down-24px.svg';

const EditFormInventoryItem = ({ item }) => {
    const [selectedCategory, setSelectedCategory] = useState(item.category);
    const [selectedWarehouse, setSelectedWarehouse] = useState(item.warehouse_name);
    const [status, setStatus] = useState(item.status);

    const { item_name, description, category, warehouse_name } = item;

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleWarehouseChange = (event) => {
        setSelectedWarehouse(event.target.value);
    };

    const handleStatusClick = (newStatus) => {
        setStatus(newStatus);
    };

    return (
        <section className='edit__main'>
            <section className='edit__container'>
                <div className='edit__tablet'>
                    <section className='edit__item'>
                        <h2 className='edit__title'>Item Details</h2>
                        <div className='edit__form'>
                            <label htmlFor='item-name' className='edit__label'>Item Name</label>
                            <input id='item-name' className='edit__input' type='text' placeholder={item_name} />
                        </div>
                        <div className='edit__form'>
                            <label htmlFor='description' className='edit__label'>Description</label>
                            <input id='description' className='edit__input-description' type='text' placeholder={description} />
                        </div>
                        <div className='edit__form edit__select-wrapper'>
                            <label htmlFor='category' className='edit__label'>Category</label>
                            <select id='category' className='edit__select' value={selectedCategory} onChange={handleCategoryChange}>
                                <option value="">{item_name}</option>
                                {category && category.map((cat, index) => (
                                    <option key={index} value={cat}>{cat}</option>
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
                        <div className='edit__container-2'>
                            <label className='edit__label' htmlFor='warehouse'>Warehouse</label>
                            <select id='warehouse' className='edit__select' value={selectedWarehouse} onChange={handleWarehouseChange}>
                                <option value=""></option>
                                <option value={warehouse_name}>{warehouse_name}</option>
                            </select>
                            <img className='edit__arrowdrop' src={arrowDrop} alt='arrow drop down' />
                        </div>
                    </section>
                </div>
                <section className='edit__buttons'>
                    <button className='edit__button'>Cancel</button>
                    <button className='edit__button edit__button--blue'>Save</button>
                </section>
            </section>
        </section>
    );
}

export default EditFormInventoryItem;