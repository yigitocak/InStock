import { Link } from 'react-router-dom'
import './InventoryAddItem.scss'
import arrow from '../../assets/icons/arrow_back-24px.svg'
import FormAddInventoryItem from '../../components/FormAddInventoryItem/FormAddInventoryItem'

const InventoryAddItem = () => {
    return (
        <main className='add'>
        <section className='add__container'>
            <div className='add__top'>
                <Link to='/Inventory' className='add__link'>
                    <img src={arrow} alt='arrow to the left'/>
                </Link>
                <h1 className='add__title'>Add New Inventory Item</h1>
            </div>
           <FormAddInventoryItem />
        </section>
    </main>
    )
}

export default InventoryAddItem