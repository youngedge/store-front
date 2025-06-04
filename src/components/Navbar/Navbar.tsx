import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarOpen]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  const handleNotificationClick = () => {
    console.log("Notification clicked");
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar toggled:", !isSidebarOpen);
  };

  return (
    <>
      <header className="navbar">
        <button 
          className="hamburger-btn"
          onClick={handleHamburgerClick}
          aria-label="Toggle Sidebar"
        >
          ☰
        </button>

        <div className="search-container">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <div className="search-input-wrapper">
              <div className="search-icon">🔍</div>
              <input
                type="text"
                className="search-input"
                placeholder="Search products, supplier, order"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </form>
        </div>
        
        <div className="navbar-right">
          <button 
            className="notification-btn"
            onClick={handleNotificationClick}
            aria-label="Notifications"
          >
            <div className="notification-icon">🔔</div>
            <span className="notification-badge">3</span>
          </button>
          
          <div className="profile-section">
            <button 
              className="profile-btn"
              onClick={handleProfileClick}
              aria-label="User Profile"
            >
              <div className="profile-avatar">JD</div>
            </button>
            <div className="profile-info">
              <div className="profile-name">John Doe</div>
              <div className="profile-role">Administrator</div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar for mobile */}
      <div className={`mobile-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          <li>
            <button
              className="hamburger-btn sidebar-hamburger"
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close Sidebar"
            >
              ×
            </button>
          </li>

          {/* Main menu items */}
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(false);
                navigate("/dashboard");
              }}
            >
              🏠 Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(false);
                navigate("/inventory");
              }}
            >
              📋 Inventory
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(false);
                navigate("/reports");
              }}
            >
              📊 Reports
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(false);
                navigate("/supply");
              }}
            >
              🏪 Suppliers
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(false);
                navigate("/orders");
              }}
            >
              🛒 Orders
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(false);
                navigate("/management");
              }}
            >
              🏬 Manage Stores
            </a>
          </li>

          {/* Bottom menu items */}
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(false);
                navigate("/settings");
              }}
            >
              ⚙️ Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsSidebarOpen(false);
                navigate("/");
              }}
            >
              🚪 Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;