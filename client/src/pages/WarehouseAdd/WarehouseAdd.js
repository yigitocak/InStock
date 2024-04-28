import React from "react";
import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/icons/arrow_back-24px.svg";
import AddNewWarehouseForm from "../../components/AddNewWarehouseForm/AddNewWarehouseForm";

import "./WarehouseAdd.scss";

const WarehouseAdd = () => {
    const navigate = useNavigate();

    return (
        <main className="main">
            <section className="main__container">
                <div className="main__top">
                    <img className="main__arrow" src={arrowIcon} alt="arrow icon" onClick={() => navigate("/")} />
                    <h1 className="main__title">Add New Warehouse</h1>
                </div>

                <AddNewWarehouseForm />
            </section>
        </main>
    );
};

export default WarehouseAdd;