import React, { useState } from "react";
import { Settings as SettingsIcon, Bell, Database, Palette, Shield, Save, User, Building, Mail, Phone, Globe, Lock, Clock, Eye, EyeOff } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import './settings.css';

interface SettingsState {
  company: {
    name: string;
    address: string;
    email: string;
    phone: string;
  };
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
    desktop: boolean;
  };
  inventory: {
    lowStockAlert: number;
    autoReorder: boolean;
    trackExpiry: boolean;
    barcodeScanning: boolean;
  };
  appearance: {
    theme: string;
    language: string;
    dateFormat: string;
    currency: string;
  };
  security: {
    twoFactor: boolean;
    sessionTimeout: number;
    passwordExpiry: number;
    loginAttempts: number;
  };
}

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('company');
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState<SettingsState>({
    company: {
      name: 'Your Company Ltd.',
      address: '123 Business Street, City, State 12345',
      email: 'admin@company.com',
      phone: '+1 (555) 123-4567'
    },
    notifications: {
      email: true,
      push: false,
      sms: true,
      desktop: false
    },
    inventory: {
      lowStockAlert: 10,
      autoReorder: false,
      trackExpiry: true,
      barcodeScanning: true
    },
    appearance: {
      theme: 'light',
      language: 'en',
      dateFormat: 'MM/DD/YYYY',
      currency: 'USD'
    },
    security: {
      twoFactor: false,
      sessionTimeout: 30,
      passwordExpiry: 90,
      loginAttempts: 5
    }
  });

  const handleSettingChange = (category: keyof SettingsState, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
    // Add your API call here
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      // Reset logic here
      console.log('Settings reset');
    }
  };

  const tabs = [
    { id: 'company', label: 'Company Info', icon: Building },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'inventory', label: 'Inventory', icon: Database },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  return (
    <div className="Container">
      <Sidebar />
      <Navbar />
      
      <div className="settings-main">
        <div className="settings-header">
          <div className="header-content">
            <div className="header-icon">
              <SettingsIcon size={32} />
            </div>
            <div className="header-text">
              <h1>System Settings</h1>
              <p>Configure your inventory management system preferences and options</p>
            </div>
          </div>
        </div>

        <div className="settings-container">
          <div className="settings-navigation">
            <div className="nav-header">
              <h3>Settings Menu</h3>
            </div>
            <div className="nav-tabs">
              {tabs.map(tab => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    disabled={activeTab === tab.id}
                    className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => {
                      console.log('Switching to tab:', tab.id);
                      setActiveTab(tab.id);
                    }}
                  >
                    <IconComponent size={20} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="settings-panel">
            {activeTab === 'company' && (
              <div className="panel-content">
                <div className="panel-header">
                  <h2>Company Information</h2>
                  <p>Update your business details and contact information</p>
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="companyName">
                      <Building size={16} />
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      value={settings.company.name}
                      onChange={(e) => handleSettingChange('company', 'name', e.target.value)}
                      placeholder="Enter company name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="companyPhone">
                      <Phone size={16} />
                      Phone Number
                    </label>
                    <input
                      id="companyPhone"
                      type="tel"
                      value={settings.company.phone}
                      onChange={(e) => handleSettingChange('company', 'phone', e.target.value)}
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="companyEmail">
                      <Mail size={16} />
                      Email Address
                    </label>
                    <input
                      id="companyEmail"
                      type="email"
                      value={settings.company.email}
                      onChange={(e) => handleSettingChange('company', 'email', e.target.value)}
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="companyAddress">
                      <Globe size={16} />
                      Business Address
                    </label>
                    <textarea
                      id="companyAddress"
                      value={settings.company.address}
                      onChange={(e) => handleSettingChange('company', 'address', e.target.value)}
                      placeholder="Enter business address"
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="panel-content">
                <div className="panel-header">
                  <h2>Notification Preferences</h2>
                  <p>Choose how you want to receive system notifications</p>
                </div>

                <div className="settings-list">
                  <div className="setting-item">
                    <div className="setting-info">
                      <Mail size={18} />
                      <div>
                        <h4>Email Notifications</h4>
                        <p>Receive notifications via email</p>
                      </div>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.email}
                        onChange={(e) => handleSettingChange('notifications', 'email', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <Bell size={18} />
                      <div>
                        <h4>Push Notifications</h4>
                        <p>Receive push notifications on mobile devices</p>
                      </div>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.push}
                        onChange={(e) => handleSettingChange('notifications', 'push', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <Phone size={18} />
                      <div>
                        <h4>SMS Alerts</h4>
                        <p>Receive important alerts via SMS</p>
                      </div>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.sms}
                        onChange={(e) => handleSettingChange('notifications', 'sms', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <SettingsIcon size={18} />
                      <div>
                        <h4>Desktop Notifications</h4>
                        <p>Show notifications on desktop</p>
                      </div>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.desktop}
                        onChange={(e) => handleSettingChange('notifications', 'desktop', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'inventory' && (
              <div className="panel-content">
                <div className="panel-header">
                  <h2>Inventory Management</h2>
                  <p>Configure your inventory tracking and alert settings</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="lowStockAlert">
                      <Database size={16} />
                      Low Stock Alert Threshold
                    </label>
                    <input
                      id="lowStockAlert"
                      type="number"
                      min="1"
                      max="100"
                      value={settings.inventory.lowStockAlert}
                      onChange={(e) => handleSettingChange('inventory', 'lowStockAlert', parseInt(e.target.value))}
                    />
                    <small>Alert when stock falls below this number</small>
                  </div>
                </div>

                <div className="settings-list">
                  <div className="setting-item">
                    <div className="setting-info">
                      <SettingsIcon size={18} />
                      <div>
                        <h4>Automatic Reordering</h4>
                        <p>Automatically reorder items when stock is low</p>
                      </div>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.inventory.autoReorder}
                        onChange={(e) => handleSettingChange('inventory', 'autoReorder', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <Clock size={18} />
                      <div>
                        <h4>Track Expiry Dates</h4>
                        <p>Monitor and alert for expiring products</p>
                      </div>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.inventory.trackExpiry}
                        onChange={(e) => handleSettingChange('inventory', 'trackExpiry', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <Database size={18} />
                      <div>
                        <h4>Barcode Scanning</h4>
                        <p>Enable barcode scanning for inventory management</p>
                      </div>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.inventory.barcodeScanning}
                        onChange={(e) => handleSettingChange('inventory', 'barcodeScanning', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div className="panel-content">
                <div className="panel-header">
                  <h2>Appearance & Localization</h2>
                  <p>Customize the look and feel of your system</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="theme">
                      <Palette size={16} />
                      Theme
                    </label>
                    <select
                      id="theme"
                      value={settings.appearance.theme}
                      onChange={(e) => handleSettingChange('appearance', 'theme', e.target.value)}
                    >
                      <option value="light">Light Mode</option>
                      <option value="dark">Dark Mode</option>
                      <option value="auto">Auto (System)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="language">
                      <Globe size={16} />
                      Language
                    </label>
                    <select
                      id="language"
                      value={settings.appearance.language}
                      onChange={(e) => handleSettingChange('appearance', 'language', e.target.value)}
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="it">Italian</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="dateFormat">
                      <Clock size={16} />
                      Date Format
                    </label>
                    <select
                      id="dateFormat"
                      value={settings.appearance.dateFormat}
                      onChange={(e) => handleSettingChange('appearance', 'dateFormat', e.target.value)}
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="currency">
                      <Database size={16} />
                      Currency
                    </label>
                    <select
                      id="currency"
                      value={settings.appearance.currency}
                      onChange={(e) => handleSettingChange('appearance', 'currency', e.target.value)}
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="JPY">JPY (¥)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="panel-content">
                <div className="panel-header">
                  <h2>Security Settings</h2>
                  <p>Manage your account security and access controls</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="sessionTimeout">
                      <Clock size={16} />
                      Session Timeout (minutes)
                    </label>
                    <input
                      id="sessionTimeout"
                      type="number"
                      min="5"
                      max="480"
                      value={settings.security.sessionTimeout}
                      onChange={(e) => handleSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
                    />
                    <small>Automatically log out after inactivity</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="passwordExpiry">
                      <Lock size={16} />
                      Password Expiry (days)
                    </label>
                    <input
                      id="passwordExpiry"
                      type="number"
                      min="30"
                      max="365"
                      value={settings.security.passwordExpiry}
                      onChange={(e) => handleSettingChange('security', 'passwordExpiry', parseInt(e.target.value))}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="loginAttempts">
                      <Shield size={16} />
                      Max Login Attempts
                    </label>
                    <input
                      id="loginAttempts"
                      type="number"
                      min="3"
                      max="10"
                      value={settings.security.loginAttempts}
                      onChange={(e) => handleSettingChange('security', 'loginAttempts', parseInt(e.target.value))}
                    />
                  </div>
                </div>

                <div className="settings-list">
                  <div className="setting-item">
                    <div className="setting-info">
                      <Shield size={18} />
                      <div>
                        <h4>Two-Factor Authentication</h4>
                        <p>Add an extra layer of security to your account</p>
                      </div>
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={settings.security.twoFactor}
                        onChange={(e) => handleSettingChange('security', 'twoFactor', e.target.checked)}
                      />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            <div className="panel-actions">
              <button className="btn-secondary" onClick={handleReset}>
                Reset to Default
              </button>
              <button className="btn-primary" onClick={handleSave}>
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;