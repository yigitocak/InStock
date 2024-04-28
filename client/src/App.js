import './App.css';
import "./styles/partials/_globals.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import Warehouses from './pages/Warehouses/Warehouses';
import Inventory from './pages/Inventory/Inventory';
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
import WarehouseEdit from './pages/WareohuseEdit/WarehouseEdit';
import WarehouseAdd from './pages/WarehouseAdd/WarehouseAdd';
import InventoryItemDetails from './pages/InventoryItemDetails/InventoryItemDetails';
import InventoryItemEdit from './pages/InventoryItemEdit/InventoryItemEdit';
import InventoryAddItem from './pages/InventoryAddItem/InventoryAddItem';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={< Warehouses />}/>
        <Route path='/warehouses/:warehouseId' element={<WarehouseDetails />} />
        <Route path='/warehouses/:warehouseId/edit' element={<WarehouseEdit />} />
        <Route path='/warehouses/add' element={<WarehouseAdd />} />

        <Route path='/inventory' element={< Inventory />}/>
        <Route path='/inventory/:inventoryId' element={<InventoryItemDetails />} />
        <Route path='/inventory/:inventoryId/edit' element={<InventoryItemEdit />} />
        <Route path='/inventory/add' element={< InventoryAddItem />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
