import React, { useState } from "react";
import "./Navbar.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Add your search logic here
  };

  const handleNotificationClick = () => {
    console.log("Notification clicked");
    // Add your notification logic here
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
    // Add your profile logic here
  };

  return (
    <header className="navbar">
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
  );
};

export default Navbar;