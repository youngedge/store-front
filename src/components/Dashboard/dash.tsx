import React from "react";
import "./dash.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";


const Dash = () => {
    return (
        <div className="Container" >
            <Sidebar />
            <Navbar />

            <div className="wrapper">
                <div className="widget-1">
                    <h2>Sales Overview</h2>
                </div>
                <div className="widget-2">
                    <h2>Inventory Summary</h2>
                </div>
                <div className="widget-1">
                    <h2>Purchase Overview</h2>
                </div>
                <div className="widget-2">
                    <h2>Product Summary</h2>
                </div>
                <div className="widget-3">
                    <h2>Sales & Purchase</h2>
                </div>
                <div className="widget-4">
                    <h2>Order Summary</h2>
                </div>
                <div className="widget-3">
                    <h2>Top Selling Stock</h2>
                </div>
                <div className="widget-4">
                    <h2>Low Quantity Stock</h2>
                </div>
            </div>
            </div>

    );
}
export default Dash;