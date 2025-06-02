import React, { useState, useEffect } from 'react';
import { TrendingUp, Package, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import './reports.css';

const Reports = () => {
  const [data, setData] = useState({
    overview: {
      totalRevenue: 125000,
      totalOrders: 1250,
      totalCustomers: 850,
      growthRate: 12.5
    },
    bestSellingCategory: [
      { name: 'Electronics', sales: 45000, percentage: 36 },
      { name: 'Clothing', sales: 32000, percentage: 25.6 },
      { name: 'Home & Garden', sales: 28000, percentage: 22.4 },
      { name: 'Books', sales: 20000, percentage: 16 }
    ],
    profitRevenue: {
      revenue: 125000,
      profit: 32500,
      profitMargin: 26,
      monthlyGrowth: 8.3
    },
    bestSellingProducts: [
      { name: 'Wireless Headphones', sales: 320, revenue: 25600 },
      { name: 'Smart Watch', sales: 280, revenue: 42000 },
      { name: 'Laptop Stand', sales: 450, revenue: 13500 },
      { name: 'Phone Case', sales: 620, revenue: 12400 }
    ]
  });

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      console.log('Data loaded');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="reports-container">
      <Sidebar />
      <Navbar />
      
      <div className="main-content">
        <div className="widgets-grid">
          
          {/* Overview Widget */}
          <div className="widget overview-widget">
            <div className="widget-header">
              <h2 className="widget-title">
                <TrendingUp className="widget-icon" />
                Overview
              </h2>
              <div className="growth-indicator">
                <ArrowUpRight className="growth-icon" />
                <span>+{data.overview.growthRate}%</span>
              </div>
            </div>
            
            <div className="overview-metrics">
              <div className="metric-card revenue-card">
                <p className="metric-label">Total Revenue</p>
                <p className="metric-value">${data.overview.totalRevenue.toLocaleString()}</p>
              </div>
              <div className="metric-card orders-card">
                <p className="metric-label">Total Orders</p>
                <p className="metric-value">{data.overview.totalOrders.toLocaleString()}</p>
              </div>
              <div className="metric-card customers-card">
                <p className="metric-label">Customers</p>
                <p className="metric-value">{data.overview.totalCustomers.toLocaleString()}</p>
              </div>
              <div className="metric-card growth-card">
                <p className="metric-label">Growth Rate</p>
                <p className="metric-value">{data.overview.growthRate}%</p>
              </div>
            </div>
          </div>

          {/* Best Selling Category Widget */}
          <div className="widget category-widget">
            <h2 className="widget-title">
              <Package className="widget-icon" />
              Best Selling Category
            </h2>
            
            <div className="category-list">
              {data.bestSellingCategory.map((category, index) => (
                <div key={index} className="category-item">
                  <div className="category-info">
                    <p className="category-name">{category.name}</p>
                    <p className="category-sales">${category.sales.toLocaleString()} sales</p>
                  </div>
                  <div className="category-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                    <span className="progress-percentage">{category.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profit & Revenue Widget */}
          <div className="widget profit-widget">
            <h2 className="widget-title">
              <DollarSign className="widget-icon" />
              Profit & Revenue
            </h2>
            
            <div className="profit-metrics">
              <div className="profit-card revenue-profit-card">
                <div className="profit-main">
                  <p className="profit-label">Total Revenue</p>
                  <p className="profit-value">${data.profitRevenue.revenue.toLocaleString()}</p>
                </div>
                <div className="profit-secondary">
                  <p className="profit-label">Monthly Growth</p>
                  <div className="profit-growth">
                    <ArrowUpRight className="growth-icon" />
                    <span>{data.profitRevenue.monthlyGrowth}%</span>
                  </div>
                </div>
              </div>
              
              <div className="profit-card net-profit-card">
                <div className="profit-main">
                  <p className="profit-label">Net Profit</p>
                  <p className="profit-value">${data.profitRevenue.profit.toLocaleString()}</p>
                </div>
                <div className="profit-secondary">
                  <p className="profit-label">Profit Margin</p>
                  <p className="profit-margin">{data.profitRevenue.profitMargin}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Best Selling Product Widget */}
          <div className="widget products-widget">
            <h2 className="widget-title">
              <Package className="widget-icon" />
              Best Selling Products
            </h2>
            
            <div className="products-list">
              {data.bestSellingProducts.map((product, index) => (
                <div key={index} className="product-item">
                  <div className="product-info">
                    <div className="product-rank">#{index + 1}</div>
                    <div className="product-details">
                      <p className="product-name">{product.name}</p>
                      <p className="product-sales">{product.sales} units sold</p>
                    </div>
                  </div>
                  <div className="product-revenue">
                    <p className="revenue-value">${product.revenue.toLocaleString()}</p>
                    <p className="revenue-label">Revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;