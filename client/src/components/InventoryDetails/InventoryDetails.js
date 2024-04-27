import axios from 'axios'
import back from "../../assets/icons/arrow_back-24px.svg"
import "./InventoryDetails.scss"
import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import pencil from "../../assets/icons/edit-24px.svg"


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
            <div className='details__header' >
                <div className='details__name' >
                    <NavLink to="/inventory" >
                    <img src={back} alt="" />
                    </NavLink>
                    <h1>{activeIn.item_name}</h1>
                </div>
                <div>
                    <NavLink to={`/inventory/${inventoryId}/edit`} className='details__edit'>
                    <button className='details__button'> <img className='details__pencil' src={pencil} alt="edit"/>
                    EDIT</button>
                    </NavLink>

                </div>
            </div>
            <div className='details__div' >
                <div className="details__des" >
                    <div>
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
                <div className='details__con' >
                    <div>
                        <div className="" >
                            <h3>STATUS:</h3>
                            <p>{activeIn.status}</p>
                        </div>
                        <div className="" >
                            <h3>WAREHOUSE:</h3>
                            <p>{activeIn.warehouse_name}</p>
                        </div>
                    </div>
                    <div>
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