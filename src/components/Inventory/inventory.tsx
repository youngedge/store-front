import "./inventory.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

interface InventoryEntry {
    name: string;
    price: number;
    quantity: number;
    expiry: number;
    available: boolean;
}

const inventory = () => {
  const [entries, setEntries] = useState<InventoryEntry[]>([]);
  const AddProduct = () => {
    const product: InventoryEntry = {
      name: prompt("name: ") || "",
      price: Number(prompt("price: ")),
      quantity: Number(prompt("quantity: ")),
      expiry: Date.parse(("expiry: ")),
      available: true,
    }
    setEntries([...entries, product]);
  }
  return (
    <div className="Container">
      <Sidebar />
      <Navbar />

      <div className="inventory-widget1">
        <h2 className="text-wrapper1">OverAll Inventory</h2>
        <div className="inventory-widget2">
          <h2 className="text-wrapper2">
            <span>Products</span>
            <button onClick={AddProduct}>Add Product</button>
          </h2>
          <table>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
                <th>Column 5</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((row) => (
                <tr>
                  <td>{row.name}</td>
                  <td>{row.price}</td>
                  <td>{row.quantity}</td>
                  <td>{row.expiry}</td>
                  <td>{row.available ? "In stock" : "Out of stock"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default inventory;
