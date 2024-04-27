import './WarehouseEdit.scss'
import arrow from '../../assets/icons/arrow_back-24px.svg'
import FormWarehouseDetails from '../../components/FormWarehouseDetails/FormWarehouseDetails'
import { Link, useParams } from 'react-router-dom'

const WarehouseEdit = () => {

const {warehouseId} = useParams()

    return (
        <main className='edit'>
            <section className='edit__container'>
                <div className='edit__top'>
                    <Link to='/' className='edit__link'>
                        <img src={arrow} alt='arrow to the left'/>
                    </Link>
                    <h1 className='edit__title'>Edit Warehouse</h1>
                </div>
                
                <FormWarehouseDetails 
                    warehouseId={warehouseId}
                />
            </section>
        </main>
    )
}

export default WarehouseEdit