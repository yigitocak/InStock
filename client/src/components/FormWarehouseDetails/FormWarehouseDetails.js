
import './FormWarehouseDetails.scss'

const FormWarehouseDetails = () => {
    return(
        <form className='form'>
            <section className='form__bigContainer'>
            <section className='form__warehouse'>
                <h2>Warehouse Details</h2>
                <div className='form__container'>
                    <label htmlFor='warehouse name'>Warehouse Name</label>
                    <input className='form__input' type='text' placeholder=''></input>
                </div>
                <div className='form__container'>
                    <label htmlFor='address'>Street Address</label>
                    <input className='form__input' type='text' placeholder=''></input>
                </div>
                <div className='form__container'>
                    <label htmlFor='city'>City</label>
                    <input className='form__input' type='text' placeholder=''></input>
                </div>
                <div className='form__container'>
                    <label htmlFor='country'>Country</label>
                    <input className='form__input' type='text' placeholder=''></input>
                </div>
            </section>
            <div className='form__border'></div>
            <section className='form__contact'>
                <h2>Contact Details</h2>
                <div className='form__container'>
                    <label htmlFor='Contact name'>Contact Name</label>
                    <input className='form__input' type='text' placeholder=''></input>
                </div>
                <div className='form__container'>
                    <label htmlFor='Position'>Position</label>
                    <input className='form__input' type='text' placeholder=''></input>
                </div>
                <div className='form__container'>
                    <label htmlFor='Phone Number'>Phone Number</label>
                    <input className='form__input' type='text' placeholder=''></input>
                </div>
                <div className='form__container'>
                    <label htmlFor='email'>Email</label>
                    <input className='form__input' type='text' placeholder=''></input>
                </div>
            </section>
            </section>
            <section className='form__buttons'>
                <button className='form__button'>Cancel</button>
                <button className='form__button form__button--blue'>Save</button>
            </section>
        </form>
    )
}

export default FormWarehouseDetails