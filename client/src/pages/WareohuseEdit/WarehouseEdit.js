import './WarehouseEdit.scss'
import arrow from '../../assets/icons/arrow_back-24px.svg'
import FormWarehouseDetails from '../../components/FormWarehouseDetails/FormWarehouseDetails'
import { Link, useParams } from 'react-router-dom'

const WarehouseEdit = () => {

const {warehouseId} = useParams()

    return (
        <main className='editW'>
            <section className='editW__container'>
                <div className='editW__top'>
                    <Link to='/' className='editW__link'>
                        <img src={arrow} alt='arrow to the left' className='editW__image'/>
                    </Link>
                    <h1 className='editW__title'>Edit Warehouse</h1>
                </div>
                
                <FormWarehouseDetails 
                    warehouseId={warehouseId}
                />
            </section>
        </main>
    )
}

export default WarehouseEdit