import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠', path: '/dashboard' },
    { id: 'inventory', label: 'Inventory', icon: '📋', path: '/inventory' },
    { id: 'reports', label: 'Reports', icon: '📊', path: '/reports' },
    { id: 'suppliers', label: 'Suppliers', icon: '🏪', path: '/supply' },
    { id: 'orders', label: 'Orders', icon: '🛒', path: '/orders' },
    { id: 'stores', label: 'Manage Stores', icon: '🏬', path: '/management' },
  ];

  const bottomMenuItems = [
    { id: 'settings', label: 'Settings', icon: '⚙️', path: '/settings' },
    { id: 'logout', label: 'Logout', icon: '🚪', path: '/' },
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="sidebar">
      <div className="logo-container">
        <div className="logo-icon">📦</div>
        <div className="logo-text">
          <div className="logo-title">inventory management</div>
          <div className="logo-subtitle">Smart Inventory Solutions</div>
        </div>
      </div>
      
      <div className="nav-menu">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`nav-item${location.pathname === item.path ? ' active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick(item.path);
            }}
          >
            <div className="nav-icon">{item.icon}</div>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </div>
      
      <div className="nav-bottom">
        {bottomMenuItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`nav-item${location.pathname === item.path ? ' active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick(item.path);
            }}
          >
            <div className="nav-icon">{item.icon}</div>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;