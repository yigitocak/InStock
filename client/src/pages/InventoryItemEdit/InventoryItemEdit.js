import React from "react";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/icons/arrow_back-24px.svg";
import EditFormInventoryItem from "../../components/EditFormInventoryItem/EditFormInventoryItem";

import "./InventoryItemEdit.scss";
const InventoryItemEdit = () => {
    const navigate = useNavigate();

    return (
        <main className="main">
            <section className="main__container">
                <div className="main__top">
                    <img className="main__arrow" src={arrowIcon} alt="arrow icon" onClick={() => navigate("/inventory")} />
                    <h1 className="main__title">Edit Inventory Item</h1>
                </div>

                <EditFormInventoryItem />
            </section>
        </main>
    );
};

export default InventoryItemEdit;