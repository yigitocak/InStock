import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FormWarehouseDetails.scss';
import axios from 'axios'

const FormWarehouseDetails = ({warehouseId}) => {

    const navigate = useNavigate()
    const API_URL = 'http://localhost:8080/api'
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const requiredFields = ['warehouse_name', 'address', 'city', 
            'country', 'contact_name', 'contact_position', 'contact_phone', 'contact_email'];
        const missingFields = requiredFields.filter(field => !formData[field]);
    
        if (missingFields.length > 0) {
            alert('Please fill in all required fields.');
            return;
        }
        try {
            const response = await axios.put(`${API_URL}/warehouses/${warehouseId}`, formData, {
                headers: {'Content-Type': 'application/json'}
            });
            if (response.status === 200) {
                alert('Warehouse details updated successfully')
                navigate('/')
            } else {
                alert('Failed to update warehouse details')
            }
        } catch (error) {
            console.error('Error:', error)
            alert('An error occurred while updating warehouse details')
        }
    };


    const [warehouseOptions, setWarehouseOptions] = useState(null);
    useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const warehouses = await axios.get(`${API_URL}/warehouses/${warehouseId}`)
        const warehousesData = warehouses.data
        setWarehouseOptions(warehousesData)

      } catch (error) {
        console.error(error);
      }
    };
    fetchWarehouses();
    }, [warehouseId]);


    const wName = warehouseOptions ? warehouseOptions.warehouse_name : null
    const wAddress = warehouseOptions ? warehouseOptions.address : null
    const wcity = warehouseOptions ? warehouseOptions.city : null
    const wCountry = warehouseOptions ? warehouseOptions.country : null
    const wContactName = warehouseOptions ? warehouseOptions.contact.name : null
    const wContactPos = warehouseOptions ? warehouseOptions.contact.position : null
    const wContactPHone = warehouseOptions ? warehouseOptions.contact.phone : null
    const wContactEmail = warehouseOptions ? warehouseOptions.contact.email : null

    const [formData, setFormData] = useState(
        {
            warehouse_name: '',
            address: '',
            city: '',
            country: '',
            contact_name: '',
            contact_position: '',
            contact_phone: '',
            contact_email: ''
        });

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    };


    return (
        <form className='form' onSubmit={handleSubmit}>
            <section className='form__bigContainer'>
                <section className='form__warehouse'>
                    <h2>Warehouse Details</h2>
                    <div className='form__container'>
                        <label htmlFor='warehouse_name'>Warehouse Name</label>
                        <input
                            className='form__input'
                            type='text'
                            name='warehouse_name'
                            value={formData.warehouse_name}
                            onChange={handleInputChange}
                            placeholder={wName}
                            defaultValue={wName}
                           
                        />
                    </div>
                    <div className='form__container'>
                        <label htmlFor='address'>Address</label>
                        <input
                            className='form__input'
                            type='text'
                            name='address'
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder={wAddress}
                            defaultValue={wAddress}
                            
                        />
                    </div>
                    <div className='form__container'>
                        <label htmlFor='city'>City</label>
                        <input
                            className='form__input'
                            type='text'
                            name='city'
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder={wcity}
                            defaultValue={wcity}
                        />
                    </div>
                    <div className='form__container'>
                        <label htmlFor='country'>Country</label>
                        <input
                            className='form__input'
                            type='text'
                            name='country'
                            value={formData.country}
                            onChange={handleInputChange}
                            placeholder={wCountry}
                            defaultValue={wCountry}
                        />
                    </div>
                </section>
                <div className='form__border'></div>
                <section className='form__contact'>
                    <h2>Contact Details</h2>
                    <div className='form__container'>
                        <label htmlFor='contact_name'>Contact Name</label>
                        <input
                            className='form__input'
                            type='text'
                            name='contact_name'
                            value={formData.contact_name}
                            onChange={handleInputChange}
                            placeholder={wContactName}
                            defaultValue={wContactName}
                        />
                    </div>
                    <div className='form__container'>
                        <label htmlFor='contact_position'>Position</label>
                        <input
                            className='form__input'
                            type='text'
                            name='contact_position'
                            value={formData.contact_position}
                            onChange={handleInputChange}
                            placeholder={wContactPos}
                            defaultValue={wContactPos}
                        />
                    </div>
                    <div className='form__container'>
                        <label htmlFor='contact_phone'>Phone Number</label>
                        <input
                            className='form__input'
                            type='text'
                            name='contact_phone'
                            value={formData.contact_phone}
                            onChange={handleInputChange}
                            placeholder={wContactPHone}
                            defaultValue={wContactPHone}
                        />
                    </div>
                    <div className='form__container'>
                        <label htmlFor='contact_email'>Email</label>
                        <input
                            className='form__input'
                            type='text'
                            name='contact_email'
                            value={formData.contact_email}
                            onChange={handleInputChange}
                            placeholder={wContactEmail}
                            defaultValue={wContactEmail}
                        />
                    </div>
                </section>
            </section>
            <section className='form__buttons'>
                <Link to='/'>
                    <button className='form__button'>Cancel</button>
                </Link>
                <button 
                    type='submit' 
                    className='form__button form__button--blue'
                > Save</button>
            </section>
        </form>
    );
};

export default FormWarehouseDetails;