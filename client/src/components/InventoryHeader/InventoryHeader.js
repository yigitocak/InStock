import './InventoryHeader.scss'
import search from '../../assets/icons/search-24px.svg'
import { Link } from 'react-router-dom'

const InventoryHeader = () => {
    return (
        <section className='invent__t'>
            <form className='invent__form'>
                <h1 className='invent__titles'>Inventory</h1>
                <label htmlFor='search'></label>
                <div className='invent__containers'>
                    <input className='invent__input' placeholder='Search...'></input>
                    <img src={search} className='invent__loopIcon'></img>
                </div>
            </form> 
            <Link to='/inventory/add'>
                <button className='invent__buttons'>+ Add New Inventory</button>            
            </Link>   
        </section>
    )
}

export default InventoryHeader;