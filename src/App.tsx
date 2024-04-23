import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login';
import Dash from './components/Dashboard/dash';
import Inventory from './components/Inventory/inventory';
import Orders from './components/Orders/orders';
function App() {

  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path='Dashboard' element={<Dash/>} />
            <Route path='inventory' element={<Inventory/>}/>
            <Route path='orders' element={<Orders/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App