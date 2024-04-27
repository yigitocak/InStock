import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './AddNewWarehouseForm.scss';

const AddNewWarehouseForm = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const warehouse_name = form.warehouse_name.value;
        const address = form.address.value;
        const city = form.city.value;
        const country = form.country.value;
        const contact_name = form.contact_name.value;
        const contact_position = form.contact_position.value;
        const contact_phone = form.contact_phone.value;
        const contact_email = form.contact_email.value;

        if (warehouse_name === "" || address === "" || city === "" || country === "" || contact_name === "" || contact_position === "" || contact_phone === "" || contact_email === "") {
            alert("You must fill out all fields");
            return;
        }

        const warehouseData = {
            warehouse_name,
            address,
            city,
            country,
            contact_name,
            contact_position,
            contact_phone,
            contact_email
        };

        try {
            const response = await axios.post("http://localhost:8080/api/warehouses", warehouseData);

            if (response.status === 201) {
                alert("Warehouse added successfully!");
                navigate("/");
            } else {
                alert("Failed to add warehouse. Please try again.");
            }
        } catch (error) {
            console.error("Error adding warehouse:", error);
            alert("Failed to add warehouse. Please try again.");
        }

    };
    return (
        <form className='form' onSubmit={handleSubmit}>
            <section className='form__bigContainer'>
                <section className='form__warehouse'>
                    <h2 className="form__subheader">Warehouse Details</h2>
                    <div className='form__container'>
                        <label className="form__label" htmlFor='warehouse_name'>Warehouse Name</label>
                        <input
                            className='form__input'
                            type='text'
                            name='warehouse_name'
                            placeholder="Warehouse Name"
                            required
                        />
                    </div>
                    <div className='form__container'>
                        <label className="form__label" htmlFor='address'>Street Address</label>
                        <input
                            className='form__input'
                            type='text'
                            name='address'
                            placeholder="Street Address"
                            required
                        />
                    </div>
                    <div className='form__container'>
                        <label className="form__label" htmlFor='city'>City</label>
                        <input
                            className='form__input'
                            type='text'
                            name='city'
                            placeholder="City"
                            required
                        />
                    </div>
                    <div className='form__container'>
                        <label className="form__label" htmlFor='country'>Country</label>
                        <input
                            className='form__input'
                            type='text'
                            name='country'
                            placeholder="Country"
                            required
                        />
                    </div>
                </section>
                <div className='form__border'></div>
                <section className='form__contact'>
                    <h2 className="form__subheader">Contact Details</h2>
                    <div className='form__container'>
                        <label className="form__label" htmlFor='contact_name'>Contact Name</label>
                        <input
                            className='form__input'
                            type='text'
                            name='contact_name'
                            placeholder="Contact Name"
                            required
                        />
                    </div>
                    <div className='form__container'>
                        <label className="form__label" htmlFor='contact_position'>Position</label>
                        <input
                            className='form__input'
                            type='text'
                            name='contact_position'
                            placeholder="Position"
                            required
                        />
                    </div>
                    <div className='form__container'>
                        <label className="form__label" htmlFor='contact_phone'>Phone Number</label>
                        <input
                            className='form__input'
                            type='text'
                            name='contact_phone'
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className='form__container'>
                        <label className="form__label" htmlFor='contact_email'>Email</label>
                        <input
                            className='form__input'
                            type='text'
                            name='contact_email'
                            placeholder="Email"
                            required
                        />
                    </div>
                </section>
            </section>
            <section className='form__buttons'>
                <button type='button' className='form__button' onClick={() => navigate("/")}>Cancel</button>
                <button type='submit' className='form__button form__button--blue'>+ Add Warehouse</button>
            </section>
        </form>

    );
};

export default AddNewWarehouseForm;