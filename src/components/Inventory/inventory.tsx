import React from "react";
import "./inventory.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";


const inventory = () => {
    return (
        <div className="Container" >
            <Sidebar />
            <Navbar />

            <div className="inventory-widget1">
            <h2 className="text-wrapper1">OverAll Inventory</h2>
            <div className="inventory-widget2">
            <h2 className="text-wrapper2">Products</h2>
            </div>
            </div>
</div>
    );
}
export default inventory;