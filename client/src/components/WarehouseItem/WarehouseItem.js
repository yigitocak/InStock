import './WarehouseItem.scss'
import { Link } from 'react-router-dom'
import trash from '../../assets/icons/delete_outline-24px.svg'
import pencil from '../../assets/icons/edit-24px.svg'
import arrow from '../../assets/icons/chevron_right-24px.svg'
import {useState} from "react";
import {DeleteWarehouseModal} from "../DeleteWarehouseModal/DeleteWarehouseModal";

const WarehouseItem = ({warehouseId, name, address, city, country, contactName, contactPhone, contactEmail}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(!modalOpen);

    return (
        <>
            <article className='item'>
                <section className='item__allData'>
                    <section className='item__left'>
                        <div className='item__container'>
                            <p className='item__label'>WAREHOUSE</p>
                            <Link to={`/warehouses/${warehouseId}`} className='item__link'>
                                <p className='item__name'>{name}</p>
                            </Link>
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
                    <button className="item__button" onClick={toggleModal}><img src={trash} alt="Delete"/></button>
                    <Link to={`/warehouses/${warehouseId}/edit`}>
                        <img src={pencil} alt='pencil'/>
                    </Link>
                </section>
            </article>
            
            <article className='otherItem'>
                <div className='otherItem__container--first'>
                <Link to='warehouses/:warehouseId' className='item__link'>
                    <p className='item__name'>{name}</p>
                </Link>
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
                    <button className="item__button" onClick={toggleModal}><img src={trash} alt="Delete"/></button>
                    <Link to={`/warehouses/${warehouseId}/edit`}>
                        <img src={pencil} alt='pencil'/>
                    </Link>
                </section>
            </article>
            {modalOpen && <DeleteWarehouseModal warehouseName="placeholder" closeModal={toggleModal} />}
        </>
    )
}
export default WarehouseItem