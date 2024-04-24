import './Sidebar.css';
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { GiHandTruck } from "react-icons/gi";
import { IoBarChartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBox } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";

export const Sidebar = () => {

  const navigate = useNavigate();

  // Renamed functions to reflect their purposes
  const handleDashboardClick = () => { navigate("/dashboard") };
  const handleInventoryClick = () => { navigate("/inventory") }; 
  const handleReportsClick = () => { navigate("/reports")}
  const handleOrdersClick =  () => { navigate("/orders") }; 
  const handleSupplyClick = () => {navigate("/supply")}
  const handleManagementClick = () => { navigate("/management") };
  const handleSettingsClick = () => { navigate("/settings") };
  const handleLogoutClick = () => { navigate("/") };
  return (
    <div className='Sidebar'>
      <div className="top">
        <img src={logo} alt="sign in" className="logo" />
      </div>
      <div className="center">
        <ul>
          <li onClick={handleDashboardClick}>
            <span><CiHome className='icon1' /> Dashboard </span>
          </li>
          <li onClick={handleInventoryClick}>
            <span><GiHandTruck className='icon2'/> Inventory </span>
          </li>
          <li onClick={handleReportsClick}>
            <span><IoBarChartOutline className='icon3' /> Reports </span>
          </li>
          <li onClick={handleSupplyClick}>
            <span><FaRegUserCircle className='icon4'/> Suppliers </span>
          </li>
          <li onClick={handleOrdersClick}>
            <span><BsBox className='icon5'/> Orders </span>
          </li>
          <li onClick={handleManagementClick}>
            <span><GoChecklist className='icon6'/> Manage Stores </span>
          </li>
        </ul>
      </div>
      <div className='center2'>
        <ul>
          <li onClick={handleSettingsClick}>
            <span><IoSettingsOutline className='icon7'/> Settings </span>
          </li>
          <li onClick={handleLogoutClick}>
            <span><MdOutlineLogout className='icon8'/> Logout </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
