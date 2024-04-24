import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./management.css";

const management = () => {
    return (
        <div className="Container" >
            <Sidebar />
            <Navbar />
            <div className="management-widget"> 
             <h2 className="text-wrapper1">Manage Store</h2>
            </div>

</div>
    );
}
export default management;