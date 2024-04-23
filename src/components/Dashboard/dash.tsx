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
                    <h3>Sales Overview</h3>
                </div>
                <div className="widget-2">
                    <h3>Inventory Summary</h3>
                </div>
                <div className="widget-1">
                    <h3>Sales Overview</h3>
                </div>
                <div className="widget-2">
                    <h3>Inventory Summary</h3>
                </div>
                <div className="widget-3">
                    <h3>Sales Overview</h3>
                </div>
                <div className="widget-4">
                    <h3>Inventory Summary</h3>
                </div>
                <div className="widget-3">
                    <h3>Sales Overview</h3>
                </div>
                <div className="widget-4">
                    <h3>Inventory Summary</h3>
                </div>
            </div>
            </div>

    );
}
export default Dash;