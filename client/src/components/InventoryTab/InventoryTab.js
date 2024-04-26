import "./InventoryTab.scss"
import axios from 'axios'
import edit from "../../assets/icons/edit-24px.svg";
import deletecon from "../../assets/icons/delete_outline-24px.svg"
import right from "../../assets/icons/chevron_right-24px.svg"
import dropdown from "../../assets/icons/arrow_drop_down-24px.svg"
const InventoryTab =({inventList}) => {

    const [inventory, setInventory] = useState(null)

    useEffect(() => {
        const getInventory = async() => {
            try{
                const response = await axios.get(`${ApiUrl}/inventories`)
                setInventory(response.data)
            }
            catch(err){
                console.error(err)
            }
        }
        getInventory()
        },[])
        if (! inventory){
            return<div>Loading ...</div>
        }

    const statusOf =() => {
        inventList.forEach((inventory) =>{
            if (inventList.quantity === 0){
                <p className="invent__in">IN STOCK</p>
            }
            else{
                <p className="invent__out">OUT OF STOCK</p>
            }
        })
        
    }
    return (
        <div className="invent__titlecon">
            <div className="invent__titlecon">
                <div className="invent__title" >
                    <p>INVENTORY ITEM</p>
                    <img className="invent__icons" src={dropdown} alt="" />
                </div>
                <div className="invent__title">
                    <p>CATEGORY</p>
                    <img className="invent__icons" src={dropdown} alt="" />
                </div>
                <div className="invent__title">
                    <p>STATUS</p>
                    <img className="invent__icons" src={dropdown} alt="" />
                </div>
                <div className="invent__title">
                    <p>QUANTITY</p>
                    <img className="invent__icons" src={dropdown} alt="" />
                </div>
                <div className="invent__title">
                    <p>WAREHOUSE</p>
                    <img className="invent__icons" src={dropdown} alt="" />
                </div>
                <div className="invent__title">
                    <p>ACTIONS</p>
                    <img className="invent__icons" src={dropdown} alt="" />
                </div>
                
            </div>
            <div>
                {
                    inventList.forEach((inventory) =>{
                        <article>
                        <div className="invent__item">
                            <p>{inventList.item_name}</p>
                            <img className="invent__icons" src={right} alt=""/>
                        </div>
                        <div className="invent__item">{inventList.category}</div>
                        <div className="invent__item">{statusOf}</div>
                        <div className="invent__item">{inventList.quantity}</div>
                        <div className="invent__item">{inventList.warehouse_name}</div>
                        <div className="invent__item">
                            <img className="invent__icons" src={edit} alt =""/>
                            <img className="invent__icons" src={deletecon} alt =""/>
                        </div>
                        </article>
                    })
                }

            </div>
        </div>

    )
}
 export default InventoryTab;