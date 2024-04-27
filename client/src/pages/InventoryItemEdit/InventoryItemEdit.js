import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import arrowIcon from "../../assets/icons/arrow_back-24px.svg";
import EditFormInventoryItem from "../../components/EditFormInventoryItem/EditFormInventoryItem";

import "./InventoryItemEdit.scss";

const InventoryItemEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [inventoryItem, setInventoryItem] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const inventoryData = await axios.get(
            `http://localhost:8080/api/inventories/${id}`
          );
          setInventoryItem(inventoryData.data);
        } catch (error) {
          console.error(error);
        }
      };
      console.log(inventoryItem);
  
      fetchData();
  
      return () => {
        
      };
    }, [id]);

  return (
    <main className="main">
      <section className="main__container">
        <div className="main__top">
          <img className="main__arrow" src={arrowIcon} alt="arrow icon" onClick={() => navigate("/inventories")} />
          <h1 className="main__title">Edit Inventory Item</h1>
        </div>

        <EditFormInventoryItem item={inventoryItem} />
      </section>
    </main>
  );
};

export default InventoryItemEdit;