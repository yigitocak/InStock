import axios from 'axios'
import "./WarehouseDetails.scss"
import InventoryList from '../InventoryList/InventoryList'
import back from "../../assets/icons/arrow_back-24px.svg"
import {useState, useEffect} from 'react'


const WarehouseDetails = ({id}) => {

    const ApiUrl = "http://localhost:8080"
    const [activeWh, setactiveWh] = useState(null)

    useEffect(() => {
        const getWhDetails = async() => {
            try{
                const response = await axios.get(`${ApiUrl}/`)
                setactiveWh(response.data)
            }
            catch(err){
                console.error(err)
            }
        }
        getWhDetails()
        },[id])
        if (! activeWh){
            return<div>Loading ...</div>
        }

    return(
    <div>
        <div className="" >
            <div>
                <img src={back} alt="" />
                <h1>{activeWh.warehouse_name}</h1>
            </div>
            <div className="" >
                <h3>WAREHOUSE ADDRESS:</h3>
                <p>{activeWh.address}</p>
                <br />
                <p>{activeWh.city},{activeWh.country}</p>
            </div>
            <div>
                <div className="" >
                <h3>CONTACT NAME:</h3>
                <p>{activeWh.contact_name}</p>
                <br/>
                <p>{activeWh.contact_position}</p>
                </div>
                <div className="" >
                <h3>CONTACT INFORMATION:</h3>
                <p>{activeWh.contact_phone}</p>
                <br />
                <p>{activeWh.contact_email}</p>
                </div>
            </div>
            

        </div>
        <div>
            <InventoryList 
                activeWh = {activeWh}
            />
        </div>
    </div>


    )
}
export default WarehouseDetails;