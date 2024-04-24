import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./orders.css";

const orders = () => {
    return (
        <div className="Container" >
            <Sidebar />
            <Navbar />
            <div className="orders-widget1">
                <h2 className="Orders-text1">Overall Orders</h2>
                </div>
                <div className="orders-widget2">
                <h2 className="Orders-text2">Orders</h2>
                    </div>
</div>
    );
}
export default orders;