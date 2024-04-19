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
    const handleClick = () => { navigate("../Dashboard") }

    return (
        <div className='Sidebar'>
            <div className="top">
                <img src={logo} alt="sign in" className="logo" />
            </div>
            <div className="center">
                <ul>
                    <li onClick={handleClick} >
                        <span><CiHome className='icon1' /> Dashboard </span>
                    </li>
                    <li>
                        <span><GiHandTruck className='icon2'/> Inventory </span>
                    </li>
                    <li>
                        <span><IoBarChartOutline className='icon3' /> Reports </span>
                    </li>
                    <li>
                        <span><FaRegUserCircle className='icon4'/> Suppliers </span>
                    </li>
                    <li>
                        <span><BsBox className='icon5'/> Orders </span>
                    </li>
                    <li>
                        <span><GoChecklist className='icon6'/> Manage Stores </span>
                    </li>
                </ul>
            </div>
                    <div className='center2'>
                        <ul>
                            <li>
                                <span><IoSettingsOutline className='icon7'/> Settings </span>
                            </li>
                            <li>
                                <span><MdOutlineLogout className='icon8'/> Logout </span>
                            </li>
                        </ul>
                    </div>
        </div>
    )
}
export default Sidebar;