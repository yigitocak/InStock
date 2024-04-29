import "./WarehouseDetails.scss"
import back from "../../assets/icons/arrow_back-24px.svg"
import {useState, useEffect} from 'react'
import axios from "axios";
import { Link, NavLink } from 'react-router-dom'

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
                    <Link to ="/">
                    <img src={back} alt="" />
                    </Link>
                    <h1>{activeWh.warehouse_name}</h1>
                </div>
                <Link to={`/warehouses/${warehouseId}/edit`} className='details__icn'>
                    <svg className='details__icons' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1154_166)">
                    <path d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86668C17.5833 5.54168 17.5833 5.01668 17.2583 4.69168L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39168L17.2583 5.86668Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1154_166">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    
                </Link>
                <NavLink to={`/inventory/${warehouseId}/edit`} className='details__edit'>
                    <button className='details__button'> <svg className='details__icons' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1154_166)">
                        <path d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86668C17.5833 5.54168 17.5833 5.01668 17.2583 4.69168L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39168L17.2583 5.86668Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1154_166">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    EDIT</button>
                </NavLink>
            </div>
            <div className='details__div' >
                <div className="details__divw" >
                    <h3>WAREHOUSE ADDRESS:</h3>
                    <p className='details__divad'>{activeWh.address},</p>
                    <p className='details__divad'>{activeWh.city},{activeWh.country}</p>
                </div>
                <div className='details__con' >
                    <div className="details__conad" >
                        <h3>CONTACT NAME:</h3>
                        <p>{activeWh.contact.name}</p>
                        <p>{activeWh.contact.position}</p>
                    </div>
                    <div className="details__conin" >
                        <h3>CONTACT INFORMATION:</h3>
                        <p>{activeWh.contact.phone}</p>
                        <p>{activeWh.contact.email}</p>
                    </div>
                </div>
            </div>
            

        </div>

    </div>


    )
}
export default WarehouseDetails;