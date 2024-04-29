import './WarehouseSearch.scss'
import loop from '../../assets/icons/search-24px.svg'
import { Link } from 'react-router-dom'

const WarehouseSearch = () => {
    return (
        <section className='search'>
            <form className='warehouseForm'>
                <h1 className='warehouseForm__title'>Warehouses</h1>
                <label htmlFor='search'></label>
                <div className='warehouseForm__container'>
                    <input className='warehouseForm__input' placeholder='Search...'></input>
                    <img src={loop} className='warehouseForm__loopIcon'alt="search"></img>

                </div>
            </form> 
            <Link to='/warehouses/add' className='addLink'>
                <button className='newButton'>+ Add New Warehouse</button>            
            </Link>   
        </section>
    )
}

export default WarehouseSearch