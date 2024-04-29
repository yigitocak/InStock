import closeIcon from "../../assets/icons/close-24px.svg";
import "./DeleteInventoryModal.scss"
import axios from "axios";

export const DeleteInventoryModal = ({itemName, closeModal, id }) => {
    const delRequest = async () => {
        try {
            // TODO: make it functional when the website has the item data visible in InventoryList Comp.
            const response = await axios.delete(`http://localhost:8080/api/inventories/${id}` )
            console.log(response.status)
        }
        catch (err) {
            console.error(err)
        }
        closeModal()
    }

    return (
        <>
            <div className="backdrop" onClick={closeModal}></div>
            <dialog className="modal" open>
                <h1
                    className="modal__header"
                >Delete {itemName} inventory item?</h1>
                <p
                    className="modal__info"
                >Please confirm that you’d like to delete {itemName} from the inventory list.
                    You won’t be able to undo this action.</p>
                <button
                    className="modal__button"
                    onClick={closeModal}
                >
                    <img
                        className="modal__button-image"
                        src={closeIcon}
                        alt="Close"
                    />
                </button>
                <div
                    className="modal__container"
                >
                    <button
                        className="modal__desicion modal__desicion--cancel"
                        onClick={closeModal}
                    >Cancel
                    </button>
                    <button
                        className="modal__desicion modal__desicion--delete"
                        onClick={delRequest}
                    >Delete
                    </button>
                </div>
            </dialog>
        </>
    );
}