import './WarehouseItem.scss'
import { Link } from 'react-router-dom'
import trash from '../../assets/icons/delete_outline-24px.svg'
import pencil from '../../assets/icons/edit-24px.svg'
import arrow from '../../assets/icons/chevron_right-24px.svg'

const WarehouseItem = ({name, address, city, country, contactName, contactPhone, contactEmail}) => {
    return (
        <>
        <article className='item'>
            <section className='item__allData'>
                <section className='item__left'>
                    <div className='item__container'>
                        <p className='item__label'>WAREHOUSE</p>
                        <p className='item__name'>{name}</p>
                    </div>
                    <div className='item__container'>
                        <p className='item__label'>ADDRESS</p>
                        <p className='item__data'>{address}</p>
                        <p className='item__data'>{city}, {country}</p>
                    </div>
                </section>

                <section className='item__right'>
                    <div className='item__container'>
                        <p className='item__label'>CONTACT NAME</p>
                        <p className='item__data'>{contactName}</p>
                    </div>
                    <div className='item__container'>
                        <p className='item__label'>CONTACT INFORMATION</p>
                        <p className='item__data'>{contactPhone}</p>
                        <p className='item__data'>{contactEmail}</p>
                    </div>
                </section>
            </section>

            <section className='item__actions'>
                <img src={trash} alt='trash bin'/>
                <Link to='/warehouses/:warehouseId/edit'>
                    <img src={pencil} alt='pencil'/>    
                </Link>
            </section>
        </article>


        <article className='otherItem'>
            <div className='otherItem__container--first'>
                <p className='item__name'>{name}</p>
                <img src={arrow} alt='arrow'/>
            </div>
            <div className='otherItem__container'>
                <p className='item__data'>{address}</p>
                <p className='item__data'>{city}, {country}</p>
            </div>
            <div className='otherItem__container'>
                <p className='item__data'>{contactName}</p>
            </div>
            <div className='otherItem__container'>
                <p className='item__data'>{contactPhone}</p>
                <p className='item__data'>{contactEmail}</p>
            </div>
            <section className='item__actions'>
                <Link >
                    <img src={trash} alt='trash-bin'/>
                </Link>
                <Link to='/warehouses/:warehouseId/edit'>
                    <img src={pencil} alt='pencil'/>
                </Link>
            </section>
        </article>
        </>
    )
}

export default WarehouseItem