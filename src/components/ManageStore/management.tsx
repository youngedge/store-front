import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import "./management.css";

// Demo data
const demoProducts = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 99.99, stock: 45, status: "Active" },
  { id: 2, name: "Coffee Mug", category: "Home & Kitchen", price: 15.99, stock: 120, status: "Active" },
  { id: 3, name: "Running Shoes", category: "Sports", price: 129.99, stock: 23, status: "Low Stock" },
  { id: 4, name: "Smartphone Case", category: "Electronics", price: 24.99, stock: 0, status: "Out of Stock" },
  { id: 5, name: "Desk Lamp", category: "Office", price: 45.99, stock: 67, status: "Active" },
];

const demoOrders = [
  { id: "#ORD001", customer: "John Smith", total: 159.98, status: "Completed", date: "2024-06-01" },
  { id: "#ORD002", customer: "Emma Johnson", total: 45.99, status: "Processing", date: "2024-06-02" },
  { id: "#ORD003", customer: "Michael Brown", total: 24.99, status: "Shipped", date: "2024-06-02" },
  { id: "#ORD004", customer: "Sarah Davis", total: 99.99, status: "Pending", date: "2024-06-03" },
];

const demoStats = {
  totalRevenue: 12847.50,
  totalOrders: 156,
  totalProducts: 89,
  totalCustomers: 234,
  monthlyGrowth: 12.5,
  pendingOrders: 8,
};

const Management = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [products, setProducts] = useState(demoProducts);
  const [orders] = useState(demoOrders);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.category && newProduct.price && newProduct.stock) {
      const product = {
        id: products.length + 1,
        name: newProduct.name,
        category: newProduct.category,
        price: parseFloat(newProduct.price),
        stock: parseInt(newProduct.stock),
        status: parseInt(newProduct.stock) > 20 ? "Active" : parseInt(newProduct.stock) > 0 ? "Low Stock" : "Out of Stock"
      };
      setProducts([...products, product]);
      setNewProduct({ name: "", category: "", price: "", stock: "" });
      setShowProductModal(false);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      stock: product.stock.toString(),
    });
    setShowProductModal(true);
  };

  const handleUpdateProduct = () => {
    if (editingProduct) {
      const updatedProducts = products.map(p => 
        p.id === editingProduct.id 
          ? {
              ...p,
              name: newProduct.name,
              category: newProduct.category,
              price: parseFloat(newProduct.price),
              stock: parseInt(newProduct.stock),
              status: parseInt(newProduct.stock) > 20 ? "Active" : parseInt(newProduct.stock) > 0 ? "Low Stock" : "Out of Stock"
            }
          : p
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
      setNewProduct({ name: "", category: "", price: "", stock: "" });
      setShowProductModal(false);
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const renderDashboard = () => (
    <div className="dashboard-content">
      <div className="stats-grid">
        <div className="stat-card revenue">
          <div className="stat-icon">💰</div>
          <div className="stat-info">
            <h3>Total Revenue</h3>
            <p className="stat-value">${demoStats.totalRevenue.toLocaleString()}</p>
            <span className="stat-growth">+{demoStats.monthlyGrowth}% this month</span>
          </div>
        </div>
        <div className="stat-card orders">
          <div className="stat-icon">📦</div>
          <div className="stat-info">
            <h3>Total Orders</h3>
            <p className="stat-value">{demoStats.totalOrders}</p>
            <span className="stat-growth">{demoStats.pendingOrders} pending</span>
          </div>
        </div>
        <div className="stat-card products">
          <div className="stat-icon">🛍️</div>
          <div className="stat-info">
            <h3>Total Products</h3>
            <p className="stat-value">{demoStats.totalProducts}</p>
            <span className="stat-growth">{products.filter(p => p.status === "Active").length} active</span>
          </div>
        </div>
        <div className="stat-card customers">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <h3>Total Customers</h3>
            <p className="stat-value">{demoStats.totalCustomers}</p>
            <span className="stat-growth">+15 new this week</span>
          </div>
        </div>
      </div>

      <div className="recent-activities">
        <div className="activity-section">
          <h3>Recent Orders</h3>
          <div className="activity-list">
            {orders.slice(0, 4).map(order => (
              <div key={order.id} className="activity-item">
                <div className="activity-info">
                  <p className="activity-title">{order.id} - {order.customer}</p>
                  <p className="activity-subtitle">${order.total}</p>
                </div>
                <span className={`status-badge ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="activity-section">
          <h3>Low Stock Alerts</h3>
          <div className="activity-list">
            {products.filter(p => p.stock <= 25).map(product => (
              <div key={product.id} className="activity-item alert">
                <div className="activity-info">
                  <p className="activity-title">{product.name}</p>
                  <p className="activity-subtitle">{product.stock} items left</p>
                </div>
                <span className="alert-icon">⚠️</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="products-content">
      <div className="products-header">
        <h3>Product Management</h3>
        <button 
          className="btn btn-primary"
          onClick={() => {
            setEditingProduct(null);
            setNewProduct({ name: "", category: "", price: "", stock: "" });
            setShowProductModal(true);
          }}
        >
          Add Product
        </button>
      </div>
      
      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td className="product-name">{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <span className={`status-badge ${product.status.toLowerCase().replace(' ', '-')}`}>
                    {product.status}
                  </span>
                </td>
                <td className="actions">
                  <button 
                    className="btn btn-edit"
                    onClick={() => handleEditProduct(product)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn btn-delete"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="orders-content">
      <h3>Order Management</h3>
      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td className="order-id">{order.id}</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.date}</td>
                <td className="actions">
                  <button className="btn btn-view">View</button>
                  <button className="btn btn-edit">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="management-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="management-wrapper">
          <div className="management-header">
            <h1>Store Management</h1>
            <p>Manage your store efficiently with comprehensive tools</p>
          </div>

          <div className="tab-navigation">
            <button 
              className={`tab-btn ${activeTab === "dashboard" ? "active" : ""}`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button 
              className={`tab-btn ${activeTab === "products" ? "active" : ""}`}
              onClick={() => setActiveTab("products")}
            >
              Products
            </button>
            <button 
              className={`tab-btn ${activeTab === "orders" ? "active" : ""}`}
              onClick={() => setActiveTab("orders")}
            >
              Orders
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "dashboard" && renderDashboard()}
            {activeTab === "products" && renderProducts()}
            {activeTab === "orders" && renderOrders()}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {showProductModal && (
        <div className="modal-overlay" onClick={() => setShowProductModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{editingProduct ? "Edit Product" : "Add New Product"}</h3>
              <button 
                className="close-btn"
                onClick={() => setShowProductModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  placeholder="Enter product name"
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                >
                  <option value="">Select category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Home & Kitchen">Home & Kitchen</option>
                  <option value="Sports">Sports</option>
                  <option value="Office">Office</option>
                  <option value="Clothing">Clothing</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    placeholder="0.00"
                  />
                </div>
                <div className="form-group">
                  <label>Stock Quantity</label>
                  <input
                    type="number"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowProductModal(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary"
                onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
              >
                {editingProduct ? "Update Product" : "Add Product"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Management;