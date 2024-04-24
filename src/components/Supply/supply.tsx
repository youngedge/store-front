import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./supply.css";

const supply = () => {
    return (
        <div className="Container" >
            <Sidebar />
            <Navbar />
            <div className="supply-widget1">
            <h2 className="text-wrapper1">Suppliers</h2>
            </div>
</div>
    );
}
export default supply;