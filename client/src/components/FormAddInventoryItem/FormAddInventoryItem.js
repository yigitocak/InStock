import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FormAddInventoryItem.scss';
import arrowDrop from '../../assets/icons/arrow_drop_down-24px.svg';

const FormAddInventoryItem = () => {

    const API_URL = 'http://localhost:8080/api'
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        warehouse_id: '',
        item_name: '',
        description: '',
        category: '',
        status: '',
        quantity: ''
      });

      const handleStatusClick = (newStatus) => {
        setFormData(prevState => ({
          ...prevState,
          status: newStatus
        }));
      };

    const [categories, setCategories] = useState([]);
    const [warehouseOptions, setWarehouseOptions] = useState([]);
    
    useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await axios.get(API_URL + '/inventories')
        const responseData = response.data
        const uniqueCategories = [...new Set(responseData.map(obj => obj.category))]
        setCategories(uniqueCategories)

        const warehouses = await axios.get(API_URL + '/warehouses')
        const warehousesData = warehouses.data
        setWarehouseOptions(warehousesData)

      } catch (error) {
        console.error(error);
      }
    };
    fetchOptions();
    }, []);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

    const handleWarehouseChange = (e) => {
        const selectedWarehouseId = e.target.value;
        setFormData({ ...formData, warehouse_id: selectedWarehouseId });
    };
    
    const handleSubmit = async (e) => {  
        console.log('Form Data:', formData);
        e.preventDefault();
        const requiredFields = ['warehouse_id', 'item_name', 'description', 'category', 'status'];
        const missingFields = requiredFields.filter(field => !formData[field]);
    
        if (missingFields.length > 0) {
            alert('Please fill in all required fields.');
            return;
        }

        try {
          const response = await axios.post(API_URL + '/inventories', formData);
          console.log(response.data);
          alert('You have added a new item to the inventory!')
          navigate('/inventories');
        } catch (error) {
          console.error('Error adding item:', error);
          alert('Failed to add new item to the inventory.')
        }
      };

    return (
        <form className='addForm__container' onSubmit={handleSubmit}>
            <div className='addForm__tablet'>
                <section className='addForm__item'>
                    <h2 className='addForm__title'>Item Details</h2>
                    <div className='addForm__form'>
                        <label htmlFor='item name' className='addForm__label'>
                            Item Name
                        </label>
                        <input className='addForm__input' 
                            type="text" name="item_name" 
                            value={formData.item_name} 
                            onChange={handleChange} />
                    </div>
                    <div className='addForm__form'>
                        <label htmlFor='description' className='addForm__label'>
                            Description
                        </label>
                        <textarea className='addForm__input-description' 
                            type="text" name="description" 
                            value={formData.description} 
                            onChange={handleChange} />
                    </div>
                    <div className='addForm__form addForm__select-wrapper'>
                        <label htmlFor='category' className='addForm__label'>Category</label>
                        <select className='addForm__select' 
                            name="category" 
                            value={formData.category} 
                            onChange={handleChange}
                        >
                            <option value="">Select Category</option>
                            {categories.map((category, index) => (
                            <option key={category.id || index} value={category.id}>{category}</option>
                            ))}

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
                                checked={formData.status === 'in stock'}
                                onChange={() => handleStatusClick('in_stock')}
                                name="status"
                                className='addForm__radio-button'
                            />
                            <label className='addForm__radio-label' htmlFor="inStock">In stock</label>
                        </div>
                        <div className="addForm__status-selector">
                            <input
                                type="radio"
                                id="outOfStock"
                                checked={formData.status === 'out of stock'}
                                onChange={() => handleStatusClick('out_of_stock')}
                                name="status"
                                className='addForm__radio-button'
                            />
                            <label className='addForm__radio-label' htmlFor="outOfStock">Out of stock</label>
                        </div>
                    </div>
                    {formData.status === 'in_stock' && (
                    <div className='addForm__quantity'>
                    <label htmlFor='quantity' className='addForm__label'>Quantity</label>
                    <input
                        className='addForm__input-q'
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                    />
                    </div>
                )}
                    <div className='addForm__container-2'>
                        <label htmlFor='warehouse name' className='addForm__label'>Warehouse</label>
                        <select id='warehouse_name' className='addForm__select' name='warehouse_id' value={formData.warehouse_id} onChange={handleWarehouseChange}>
                            <option value="">Select Warehouse</option>
                            {warehouseOptions.map((warehouse) => (
                                <option key={warehouse.id} value={warehouse.id}>{warehouse.warehouse_name}</option>
                            ))}
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