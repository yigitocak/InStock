import axios from 'axios'
import back from "../../assets/icons/arrow_back-24px.svg"
import "./InventoryDetails.scss"
import {useState, useEffect} from 'react'
import { NavLink,Link } from 'react-router-dom'


const InventoryDetails = ({inventoryId}) => {

    const ApiUrl = "http://localhost:8080/api"
    const [activeIn, setactiveIn] = useState(null)

    useEffect(() => {
        const getInDetails = async() => {
            try{
                const response = await axios.get(`${ApiUrl}/inventories/${inventoryId}`)
                setactiveIn(response.data)
            }
            catch(err){
                console.error(err)
            }
        }
        getInDetails()
        },[inventoryId])
        if (! activeIn){
            return<div>Loading ...</div>
        }

    return(
    <div>
        <div className="" >
            <div className='details__headers' >
                <div className='details__name' >
                    <NavLink to="/inventory" >
                    <img src={back} alt="" />
                    </NavLink>
                    <h1>{activeIn.item_name}</h1>
                </div>
                <div>
                    <Link to={`/warehouses/${inventoryId}/edit`} className='details__icn'>
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
                        {/* <img src={MyIcon} className='details__icons' alt='edit icon'/> */}
                    </Link>
                    <NavLink to={`/inventory/${inventoryId}/edit`} className='details__edit'>
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
            </div>
            <div className='details__divs' >
                <div className="details__dess" >
                    <div className='details__desd' >
                        <div>
                            <h3>ITEM DESCRIPTION:</h3>
                            <p>{activeIn.description}</p>
                        </div>
                        <div>
                            <h3>CATEGORY:</h3>
                            <p>{activeIn.category}</p>
                        </div>
                    </div>
                </div>
                <div className='details__cons' >
                    <div className='details__cond' >
                        <div >
                            <h3>STATUS:</h3>
                            <div className='invent__item' ><p className={`${activeIn.quantity?'in' : 'out'}`}>{activeIn.status}</p></div>
                        </div>
                        <div className="" >
                            <h3>WAREHOUSE:</h3>
                            <p>{activeIn.warehouse_name}</p>
                        </div>
                    </div>
                    <div className='details__conc' >
                        <h3>QUANTITY:</h3>
                        <p>{activeIn.quantity}</p>
                    </div>
                </div>
            </div>
            

        </div>

    </div>


    )
}
export default InventoryDetails;