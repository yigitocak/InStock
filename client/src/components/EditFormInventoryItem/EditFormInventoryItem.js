import React, { useState } from 'react';
import './EditFormInventoryItem.scss'

const EditFormInventoryItem = ({ item }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedWarehouse, setSelectedWarehouse] = useState('');
    const [status, setStatus] = useState('inStock');

    const { item_name, description, category, warehouse_name } = item || {};

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
        <main className='edit'>
            <section className='edit__container'>
                <section className='edit__item'>
                    <h2 className='edit__title'>Item Details</h2>
                    <div className='edit__form'>
                        <label htmlFor='label' className='edit__label'>Item Name</label>
                        <input className='edit__input' type='text' placeholder={item_name} />
                    </div>
                    <div className='edit__form'>
                        <label htmlFor='label' className='edit__label'>Description</label>
                        <input className='edit__input-description' type='text' placeholder={description} />
                    </div>
                    <div className='edit__form'>
                        <label htmlFor='category' className='edit__label'>Category</label>
                        <select className='edit__select' value={selectedCategory} onChange={handleCategoryChange}>
                            <option value="">{item_name}</option>
                            {category && category.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </section>
                <div className='edit__border'></div>
                <section className='edit__availability'>
                    <h2 className='edit__title'>Item Availability</h2>
                    <div className='edit__container'>
                        <label className='edit__label' htmlFor='status'>Status</label>
                        <div
                            className={`status-circle ${status === 'inStock' ? 'selected' : ''}`}
                            onClick={() => handleStatusClick('inStock')}
                        />
                        <div
                            className={`status-circle ${status === 'outOfStock' ? 'selected' : ''}`}
                            onClick={() => handleStatusClick('outOfStock')}
                        />
                    </div>
                    <div className='edit__container'>
                        <label className='edit__label' htmlFor='warehouse'>Warehouse</label>
                        <select className='edit__select' value={selectedWarehouse} onChange={handleWarehouseChange}>
                            <option value=""></option>
                            <option value={warehouse_name}>{warehouse_name}</option>
                        </select>
                    </div>
                </section>
            </section>
            <section className='edit__buttons'>
                <button className='edit__button'>Cancel</button>
                <button className='edit__button edit__button--blue'>Save</button>
            </section>
        </main>
    );
}

export default EditFormInventoryItem;