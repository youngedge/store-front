import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login';
import Dash from './components/Dashboard/dash';
import Inventory from './components/Inventory/inventory';
import Orders from './components/Orders/orders';
import Supply from './components/Supply/supply';
import Reports from './components/Reports/reports';
import ManageStore from './components/ManageStore/management';
import Settings from './components/Settings/settings';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='Dashboard' element={<Dash />} />
        <Route path='inventory' element={<Inventory />} />
        <Route path='orders' element={<Orders />} />
        <Route path='supply' element={<Supply />} />
        <Route path='reports' element={<Reports />} />
        <Route path='management' element={<ManageStore />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
