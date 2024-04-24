import axios from 'axios'
import "./WarehouseDetails.scss"
import InventoryList from '../InventoryList/InventoryList'
import back from "../../assets/icons/arrow_back-24px.svg"


const WarehouseDetails = ({activeWh}) => {

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
            <InventoryList />
        </div>
    </div>


    )
}
export default WarehouseDetails;