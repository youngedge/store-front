import React from "react";
import "./dash.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const Dash = () => {
  return (
    <div className="Container">
      <Sidebar />
      <Navbar />
      <div className="main-content">
        <div className="dashboard-grid">
          {/* Row 1 */}
          <div className="widget widget-small">
            <div className="widget-title">Sales Overview</div>
            <div className="widget-content">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">$24,5K</div>
                  <div className="stat-label">Total Sales</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">142</div>
                  <div className="stat-label">Orders</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="widget widget-small">
            <div className="widget-title">Inventory Summary</div>
            <div className="widget-content">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">1,247</div>
                  <div className="stat-label">Total Items</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">89</div>
                  <div className="stat-label">Categories</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="widget widget-medium">
            <div className="widget-title">Purchase Overview</div>
            <div className="widget-content">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">$18,2K</div>
                  <div className="stat-label">Total Purchases</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">67</div>
                  <div className="stat-label">Purchase Orders</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">23</div>
                  <div className="stat-label">Suppliers</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="widget widget-medium">
            <div className="widget-title">Product Summary</div>
            <div className="widget-content">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">456</div>
                  <div className="stat-label">Active Products</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">12</div>
                  <div className="stat-label">Low Stock</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">34</div>
                  <div className="stat-label">New This Month</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Row 3 */}
          <div className="widget widget-large">
            <div className="widget-title">Sales & Purchase</div>
            <div className="widget-content">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">$42,7K</div>
                  <div className="stat-label">Total Revenue</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">$18,2K</div>
                  <div className="stat-label">Total Expenses</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">$24,5K</div>
                  <div className="stat-label">Net Profit</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">57.4%</div>
                  <div className="stat-label">Profit Margin</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="widget widget-large">
            <div className="widget-title">Order Summary</div>
            <div className="widget-content">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">209</div>
                  <div className="stat-label">Total Orders</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">187</div>
                  <div className="stat-label">Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">15</div>
                  <div className="stat-label">Pending</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">7</div>
                  <div className="stat-label">Cancelled</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Row 4 */}
          <div className="widget widget-small">
            <div className="widget-title">Top Selling Stock</div>
            <div className="widget-content">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">342</div>
                  <div className="stat-label">Units Sold</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">$8,750</div>
                  <div className="stat-label">Revenue</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="widget widget-small">
            <div className="widget-title">Low Quantity Stock</div>
            <div className="widget-content">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">12</div>
                  <div className="stat-label">Items</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">Alert</div>
                  <div className="stat-label">Status</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;