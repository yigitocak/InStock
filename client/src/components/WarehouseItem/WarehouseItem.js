import './WarehouseItem.scss'
import trash from '../../assets/icons/delete_outline-24px.svg'
import pencil from '../../assets/icons/edit-24px.svg'
import sort from '../../assets/icons/sort-24px.svg'
import arrow from '../../assets/icons/chevron_right-24px.svg'
import {useState} from "react";
import {DeleteWarehouseModal} from "../DeleteWarehouseModal/DeleteWarehouseModal";

const WarehouseItem = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => setModalOpen(!modalOpen);
    return (
        <>
        <article className='item'>
            <section className='item__allData'>
                <section className='item__left'>
                    <div className='item__container'>
                        <p className='item__label'>WAREHOUSE</p>
                        <p className='item__name'>placeholder</p>
                    </div>
                    <div className='item__container'>
                        <p className='item__label'>ADDRESS</p>
                        <p className='item__data'>placeholder</p>
                    </div>
                </section>

                <section className='item__right'>
                    <div className='item__container'>
                        <p className='item__label'>CONTACT NAME</p>
                        <p className='item__data'>placeholder</p>
                    </div>
                    <div className='item__container'>
                        <p className='item__label'>CONTACT INFORMATION</p>
                        <p className='item__data'>placeholder</p>
                    </div>
                </section>
            </section>

            <section className='item__actions'>
                // TODO: id needs to passed as a prop
                <button className="item__button" onClick={toggleModal}><img src={trash} alt="Delete"/></button>
                <img src={pencil} alt="pencil"/>
            </section>
        </article>

            <nav className='warehouseNav'>
            <div className='warehouseNav__div'>
                <p className='item__label'>WAREHOUSE</p>
                <img src={sort} alt="sort"/>
            </div>
            <div className='warehouseNav__div'>
                <p className='item__label'>ADDRESS</p>
                <img src={sort} alt="sort"/>
            </div>
            <div className='warehouseNav__div'>
                <p className='item__label'>CONTACT NAME</p>
                <img src={sort} alt="sort"/>
            </div>
            <div className='warehouseNav__div'>
                <p className='item__label'>CONTACT INFORMATION</p>
                <img src={sort} alt="sort"/>
            </div>
            <div className='warehouseNav__div'>
                <p className='item__label'>ACTIONS</p>
            </div>
        </nav>

        <article className='otherItem'>
            <div className='warehouseNav__div'>
                <p className='item__name'>placeholder</p>
                <img src={arrow} alt="arrow"/>
            </div>
            <div className='warehouseNav__div'>
                <p className='item__data'>placeholder</p>
            </div>
            <div className='warehouseNav__div'>
                <p className='item__data'>placeholder</p>
            </div>
            <div className='warehouseNav__div'>
                <p className='item__data'>placeholder</p>
            </div>
            <section className='item__actions'>
                // TODO: id needs to passed as a prop
                <button className="item__button" onClick={toggleModal}><img src={trash} alt="Delete"/></button>
                <img src={pencil} alt="pencil"/>
            </section>
        </article>
            {modalOpen && <DeleteWarehouseModal warehouseName="placeholder" closeModal={toggleModal} />}
        </>
    )
}

export default WarehouseItem