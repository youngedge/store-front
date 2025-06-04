import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
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

const demoSuggestions = [
  "Apples", "Bananas", "Carrots", "Dell Laptop", "Eggs", "Flour", "Grapes", "Honey",
  "iPhone 14", "Juice", "Kale", "Lemons", "Milk", "Notebook", "Orange Juice", "Pineapple",
  "Quinoa", "Rice", "Strawberries", "Tomatoes", "Umbrella", "Vegetable Oil", "Watermelon",
  "Xbox Controller", "Yogurt", "Zucchini", "Almonds", "Broccoli", "Cheese", "Dates",
  "Electric Kettle", "Face Wash", "Ginger", "Headphones", "Ice Cream", "Jam", "Keyboard",
  "Lettuce", "Mango", "Nuts", "Olive Oil", "Peanut Butter", "Quesadilla", "Raspberry",
  "Spinach", "Tea", "Udon Noodles", "Vanilla Extract", "Waffles", "Xiaomi Phone", "Yam",
  "Zebra Cake", "AirPods", "Backpack", "Camera", "Desk Lamp", "Earphones", "Fridge",
  "Gaming Mouse", "HDMI Cable", "Ink Cartridge", "Jeans", "Keyboard Cover", "Lipstick",
  "Monitor", "Neck Pillow", "Office Chair", "Power Bank", "Router", "Shoes", "Tablet",
  "USB Drive", "Vacuum Cleaner", "Wireless Charger", "Yoga Mat", "Zipper Bag",
  "Bluetooth Speaker", "Gaming Chair", "Graphics Card", "Laptop Stand", "Mechanical Keyboard",
  "Microphone", "NAS Drive", "PC Case", "Processor", "RAM Stick", "Ring Light", "Smartwatch",
  "SSD Drive", "Surge Protector", "Trackpad", "Tripod", "VR Headset", "Webcam", "WiFi Extender",
  ...Array.from({ length: 1000 }, (_, i) => `Tech Gadget ${i + 1}`),
    ...Array.from({ length: 1000 }, (_, i) => `Samsung S${i + 1}`),
    ...Array.from({ length: 1000 }, (_, i) => `Iphone ${i + 1}`)
];

  const updateSuggestions = (query: string) => {
    if (query.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = demoSuggestions.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    updateSuggestions(query);
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
            <div className="search-input-wrapper" style={{ position: "relative" }}>
              <div className="search-icon">🔍</div>
              <input
                type="text"
                className="search-input"
                placeholder="Search products, supplier, order"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              {suggestions.length > 0 && (
                <ul className="suggestions-dropdown">
                  {suggestions.map((item, index) => (
                    <li
                      key={index}
                      className="suggestion-item"
                      onClick={() => setSearchQuery(item)}
                    >
                      🔍 {item}
                    </li>
                  ))}
                </ul>
              )}
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