import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./reports.css";

const reports = () => {
    return (
        <div className="Container" >
            <Sidebar />
            <Navbar />
            <div className="reports-widget1">
                <h2 className="orders-text1">Overview</h2>
                </div>
                <div className="reports-widget2">
                    <h2 className="orders-text2">Best Selling Category</h2>
                </div>
                <div className="reports-widget3">
                    <h2 className="orders-text3">Profit & Revenue</h2>
                </div>
                <div className="reports-widget4">
                    <h2 className="orders-text4">Best Selling Product</h2>
                </div>
</div>
    );
}
export default reports;