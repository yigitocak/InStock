import closeIcon from "../../assets/icons/close-24px.svg";
import "./DeleteWarehouseModal.scss"
import axios from "axios";

export const DeleteWarehouseModal = ({warehouseName, closeModal, id, reRender }) => {
    const delRequest = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/warehouses/${id}` )
        }
        catch (err) {
            console.error(err)
        }
        reRender()
        closeModal()
    }

    return (
        <>
            <div className="backdrop" onClick={closeModal}></div>
            <dialog className="modal" open>
                <h1
                    className="modal__header"
                >Delete {warehouseName} warehouse?</h1>
                <p
                    className="modal__info"
                >Please confirm that you’d like to delete {warehouseName} from the list of warehouses. You won’t be able
                    to undo this action.</p>
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