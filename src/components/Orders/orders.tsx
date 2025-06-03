import React, { useState, useEffect } from "react";
import "./orders.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

// Mock data for demonstration
const mockOrders = [
  {
    id: "ORD-001",
    customer: "Acme Corporation",
    items: 5,
    total: 2450.00,
    status: "delivered",
    date: "2024-05-28",
    priority: "high",
    paymentStatus: "paid"
  },
  {
    id: "ORD-002", 
    customer: "Tech Solutions Ltd",
    items: 3,
    total: 1890.50,
    status: "shipped",
    date: "2024-05-30",
    priority: "medium",
    paymentStatus: "paid"
  },
  {
    id: "ORD-003",
    customer: "Global Industries",
    items: 8,
    total: 3750.25,
    status: "processing",
    date: "2024-06-01",
    priority: "high",
    paymentStatus: "pending"
  },
  {
    id: "ORD-004",
    customer: "StartUp Inc",
    items: 2,
    total: 950.00,
    status: "pending",
    date: "2024-06-02",
    priority: "low",
    paymentStatus: "paid"
  },
  {
    id: "ORD-005",
    customer: "Enterprise Corp",
    items: 12,
    total: 5200.75,
    status: "delivered",
    date: "2024-05-25",
    priority: "high",
    paymentStatus: "paid"
  }
];

const Orders = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [filteredOrders, setFilteredOrders] = useState(mockOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Filter and search orders
  useEffect(() => {
    let filtered = orders;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(order => 
        order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(order => order.status === statusFilter);
    }

    // Priority filter
    if (priorityFilter !== "all") {
      filtered = filtered.filter(order => order.priority === priorityFilter);
    }

    // Sort orders
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.date) - new Date(a.date);
        case "total":
          return b.total - a.total;
        case "customer":
          return a.customer.localeCompare(b.customer);
        default:
          return 0;
      }
    });

    setFilteredOrders(filtered);
  }, [orders, searchTerm, statusFilter, priorityFilter, sortBy]);

  // Calculate statistics
  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    totalValue: orders.reduce((sum, order) => sum + order.total, 0),
    avgOrderValue: orders.length > 0 ? orders.reduce((sum, order) => sum + order.total, 0) / orders.length : 0
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return '⏳';
      case 'processing': return '⚙️';
      case 'shipped': return '🚚';
      case 'delivered': return '✅';
      default: return '📦';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '⚪';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="orders-layout">
      <Sidebar />
      <div className="orders-main">
        <Navbar />
        <div className="orders-main-content"></div>
        <div className="orders-container">
          {/* Header Section */}
          <div className="orders-header">
            <div className="header-content">
              <div className="title-section">
                <h1 className="page-title">
                  <span className="title-icon">📦</span>
                  Order Management
                </h1>
                <p className="page-subtitle">
                  Track and manage all your orders in one place
                </p>
                <div className="current-time">
                  Last updated: {currentTime.toLocaleTimeString()}
                </div>
              </div>
              <button className="add-order-btn">
                <span className="btn-icon">+</span>
                New Order
              </button>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="stats-grid">
            <div className="stat-card total-orders">
              <div className="stat-icon-wrapper">
                <span className="stat-icon">📊</span>
              </div>
              <div className="stat-content">
                <div className="stat-number">{stats.total}</div>
                <div className="stat-label">Total Orders</div>
              </div>
            </div>
            
            <div className="stat-card pending-orders">
              <div className="stat-icon-wrapper">
                <span className="stat-icon">⏳</span>
              </div>
              <div className="stat-content">
                <div className="stat-number">{stats.pending}</div>
                <div className="stat-label">Pending Orders</div>
              </div>
            </div>
            
            <div className="stat-card total-value">
              <div className="stat-icon-wrapper">
                <span className="stat-icon">💰</span>
              </div>
              <div className="stat-content">
                <div className="stat-number">{formatCurrency(stats.totalValue)}</div>
                <div className="stat-label">Total Value</div>
              </div>
            </div>
            
            <div className="stat-card avg-value">
              <div className="stat-icon-wrapper">
                <span className="stat-icon">📈</span>
              </div>
              <div className="stat-content">
                <div className="stat-number">{formatCurrency(stats.avgOrderValue)}</div>
                <div className="stat-label">Avg Order Value</div>
              </div>
            </div>
          </div>

          {/* Controls Section */}
          <div className="controls-section">
            <div className="search-container">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="search-input"
                placeholder="Search orders or customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-controls">
              <select
                className="filter-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
              
              <select
                className="filter-select"
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
              >
                <option value="all">All Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              
              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date">Sort by Date</option>
                <option value="total">Sort by Value</option>
                <option value="customer">Sort by Customer</option>
              </select>
            </div>
          </div>
          

          {/* Orders Grid */}
          <div className="orders-grid">
            {filteredOrders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="card-header">
                  <div className="order-info">
                    <h3 className="order-id">{order.id}</h3>
                    <p className="customer-name">{order.customer}</p>
                  </div>
                  <div className="card-actions">
                    <span className={`status-badge ${order.status}`}>
                      {getStatusIcon(order.status)} {order.status}
                    </span>
                    <span className={`priority-badge ${order.priority}`}>
                      {getPriorityIcon(order.priority)}
                    </span>
                  </div>
                </div>
                
                <div className="order-details">
                  <div className="detail-row">
                    <span className="detail-label">📅 Order Date:</span>
                    <span className="detail-value">{formatDate(order.date)}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">📦 Items:</span>
                    <span className="detail-value">{order.items} items</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">💳 Payment:</span>
                    <span className={`payment-status ${order.paymentStatus}`}>
                      {order.paymentStatus}
                    </span>
                  </div>
                </div>
                
                <div className="order-value">
                  <div className="value-display">
                    <span className="currency-symbol">$</span>
                    <span className="amount">{order.total.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="card-footer">
                  <button className="action-btn view-btn">
                    👁️ View Details
                  </button>
                  <button className="action-btn edit-btn">
                    ✏️ Edit
                  </button>
                  <button className="action-btn track-btn">
                    📍 Track
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredOrders.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">📭</div>
              <h3>No orders found</h3>
              <p>Try adjusting your search criteria or create a new order</p>
              <button className="create-order-btn">Create First Order</button>
            </div>
          )}

          {/* Quick Stats Bar */}
          <div className="quick-stats">
            <div className="quick-stat">
              <span className="quick-stat-icon">⏳</span>
              <span className="quick-stat-value">{stats.pending}</span>
              <span className="quick-stat-label">Pending</span>
            </div>
            <div className="quick-stat">
              <span className="quick-stat-icon">⚙️</span>
              <span className="quick-stat-value">{stats.processing}</span>
              <span className="quick-stat-label">Processing</span>
            </div>
            <div className="quick-stat">
              <span className="quick-stat-icon">🚚</span>
              <span className="quick-stat-value">{stats.shipped}</span>
              <span className="quick-stat-label">Shipped</span>
            </div>
            <div className="quick-stat">
              <span className="quick-stat-icon">✅</span>
              <span className="quick-stat-value">{stats.delivered}</span>
              <span className="quick-stat-label">Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;