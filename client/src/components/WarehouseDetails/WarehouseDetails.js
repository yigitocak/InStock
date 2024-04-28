import axios from 'axios'
import "./WarehouseDetails.scss"
import back from "../../assets/icons/arrow_back-24px.svg"
import edit from "../../assets/icons/edit-24px.svg"
import {useState, useEffect} from 'react'


const WarehouseDetails = ({warehouseId}) => {

    const ApiUrl = "http://localhost:8080/api"
    const [activeWh, setactiveWh] = useState(null)

    useEffect(() => {
        const getWhDetails = async() => {
            try{
                const response = await axios.get(`${ApiUrl}/warehouses/${warehouseId}`)
                setactiveWh(response.data)
            }
            catch(err){
                console.error(err)
            }
        }
        getWhDetails()
        },[warehouseId])
        if (! activeWh){
            return<div>Loading ...</div>
        }

    return(
    <div>
        <div className="" >
            <div className='details__h'>
                <div className='details__tit' >
                    <img src={back} alt="" />
                    <h1>{activeWh.warehouse_name}</h1>
                </div>
                <div className='details__icn'>
                    <img src={edit} className='details__icons' alt='edit icon'/>
                </div>
            </div>
            <div className='details__div' >
                <div className="" >
                    <h3>WAREHOUSE ADDRESS:</h3>
                    <p>{activeWh.address}</p>
                    <br />
                    <p>{activeWh.city},{activeWh.country}</p>
                </div>
                <div className='details__con' >
                    <div className="" >
                        <h3>CONTACT NAME:</h3>
                        <p>{activeWh.contact.name}</p>
                        <br/>
                        <p>{activeWh.contact.position}</p>
                    </div>
                    <div className="" >
                        <h3>CONTACT INFORMATION:</h3>
                        <p>{activeWh.contact.phone}</p>
                        <br />
                        <p>{activeWh.contact.email}</p>
                    </div>
                </div>
            </div>
            

        </div>

    </div>


    )
}
export default WarehouseDetails;