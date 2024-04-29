import './WarehouseNav.scss'
import sort from '../../assets/icons/sort-24px.svg'

const WarehouseNav = () => {
    return (
        <nav className='warehouseNav'>
            <div className='warehouseNav__div'>
                <p className='item__label'>WAREHOUSE</p>
                <img src={sort} alt='sort'/>
            </div>
            <div className='warehouseNav__div'>
                <p className='item__label'>ADDRESS</p>
                <img src={sort} alt='sort'/>
            </div>
            <div className='warehouseNav__div'>
                <p className='item__label'>CONTACT NAME</p>
                <img src={sort} alt='sort'/>
            </div>
            <div className='warehouseNav__div'>
                <p className='item__label'>CONTACT INFORMATION</p>
                <img src={sort} alt='sort'/>
            </div>
            <div className='warehouseNav__div'>
                <p className='item__label'>ACTIONS</p>
            </div>
        </nav>
    )
}

export default WarehouseNav