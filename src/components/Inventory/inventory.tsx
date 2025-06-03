import React, { useState } from "react";
import "./inventory.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { 
  Package, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal
} from "lucide-react";

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  // Sample inventory data
  const inventoryStats = [
    {
      title: "Total Products",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Package,
      color: "blue"
    },
    {
      title: "Low Stock Items",
      value: "23",
      change: "-8.2%",
      trend: "down",
      icon: AlertTriangle,
      color: "orange"
    },
    {
      title: "Out of Stock",
      value: "8",
      change: "+2.1%",
      trend: "up",
      icon: TrendingDown,
      color: "red"
    },
    {
      title: "Total Categories",
      value: "156",
      change: "+5.3%",
      trend: "up",
      icon: TrendingUp,
      color: "green"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      sku: "WH-2024-001",
      category: "Electronics",
      price: 299.99,
      stock: 45,
      minStock: 10,
      status: "in-stock",
      supplier: "TechCorp",
      lastUpdated: "2025-06-01"
    },
    {
      id: 2,
      name: "Gaming Mechanical Keyboard",
      sku: "KB-2024-002",
      category: "Electronics",
      price: 159.99,
      stock: 8,
      minStock: 15,
      status: "low-stock",
      supplier: "GameTech",
      lastUpdated: "2025-06-02"
    },
    {
      id: 3,
      name: "Ergonomic Office Chair",
      sku: "CH-2024-003",
      category: "Furniture",
      price: 449.99,
      stock: 0,
      minStock: 5,
      status: "out-of-stock",
      supplier: "OfficePlus",
      lastUpdated: "2025-05-30"
    },
    {
      id: 4,
      name: "Smart Water Bottle",
      sku: "WB-2024-004",
      category: "Lifestyle",
      price: 79.99,
      stock: 67,
      minStock: 20,
      status: "in-stock",
      supplier: "SmartLife",
      lastUpdated: "2025-06-01"
    },
    {
      id: 5,
      name: "Bluetooth Speaker Pro",
      sku: "SP-2024-005",
      category: "Electronics",
      price: 199.99,
      stock: 12,
      minStock: 15,
      status: "low-stock",
      supplier: "AudioMax",
      lastUpdated: "2025-06-02"
    }
  ];

  const categories = ["all", "Electronics", "Furniture", "Lifestyle", "Sports", "Books"];

  const handleSelectProduct = (productId: number) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map(p => p.id));
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-stock": return "success";
      case "low-stock": return "warning";
      case "out-of-stock": return "danger";
      default: return "neutral";
    }
  };

  return (
    <div className="Container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        
        {/* Header Section */}
        <div className="inventory-header">
          <div className="header-content">
            <h1 className="page-title">Inventory Management</h1>
            <p className="page-subtitle">Track and manage your product inventory</p>
          </div>
          <div className="header-actions">
            <button className="btn btn-secondary">
              <Download size={16} />
              Export
            </button>
            <button className="btn btn-primary">
              <Plus size={16} />
              Add Product
            </button>
          </div>
        </div>

        {/* Overall Inventory Stats */}
        <div className="inventory-widget1">
          <h2 className="text-wrapper1">Overall Inventory</h2>
          <div className="stats-grid">
            {inventoryStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className={`stat-card ${stat.color}`}>
                  <div className="stat-icon">
                    {/* Render the correct icon component with size prop */}
                    <IconComponent size={24} />
                  </div>
                  <div className="stat-content">
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-title">{stat.title}</p>
                    <div className={`stat-change ${stat.trend}`}>
                      {stat.trend === "up" ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      <span>{stat.change}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Products Section */}
        <div className="inventory-widget2">
          <div className="products-header">
            <h2 className="text-wrapper2">Products</h2>
            <div className="products-controls">
              <div className="search-box">
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className="filter-dropdown">
                <Filter size={16} className="filter-icon" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="filter-select"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="products-table-container">
            <table className="products-table">
              <thead>
                <tr>
                  <th className="checkbox-column">
                    <input
                      type="checkbox"
                      checked={selectedProducts.length === products.length}
                      onChange={handleSelectAll}
                      className="checkbox"
                    />
                  </th>
                  <th>Product</th>
                  <th>SKU</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Supplier</th>
                  <th>Last Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="product-row">
                    <td className="checkbox-column">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => handleSelectProduct(product.id)}
                        className="checkbox"
                      />
                    </td>
                    <td className="product-info">
                      <div className="product-details">
                        <div className="product-avatar">
                          {/* Render the Package icon component with size prop */}
                          <Package size={20} />
                        </div>
                        <div>
                          <div className="product-name">{product.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="product-sku">{product.sku}</td>
                    <td className="product-category">
                      <span className="category-badge">{product.category}</span>
                    </td>
                    <td className="product-price">${product.price}</td>
                    <td className="product-stock">
                      <div className="stock-info">
                        <span className="stock-quantity">{product.stock}</span>
                        {product.stock <= product.minStock && product.stock > 0 && (
                          <AlertTriangle size={14} className="stock-warning" />
                        )}
                      </div>
                    </td>
                    <td className="product-status">
                      <span className={`status-badge ${getStatusColor(product.status)}`}>
                        {product.status.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </td>
                    <td className="product-supplier">{product.supplier}</td>
                    <td className="product-updated">{product.lastUpdated}</td>
                    <td className="product-actions">
                      <div className="action-buttons">
                        <button className="action-btn view" title="View">
                          <Eye size={14} />
                        </button>
                        <button className="action-btn edit" title="Edit">
                          <Edit size={14} />
                        </button>
                        <button className="action-btn delete" title="Delete">
                          <Trash2 size={14} />
                        </button>
                        <button className="action-btn more" title="More">
                          <MoreHorizontal size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="table-footer">
            <div className="selected-info">
              {selectedProducts.length > 0 && (
                <span>{selectedProducts.length} item(s) selected</span>
              )}
            </div>
            <div className="pagination">
              <span className="page-info">Showing {filteredProducts.length} of {products.length} products</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;