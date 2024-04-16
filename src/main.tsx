import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import your global CSS file (optional)
import App from './App'; // Assuming your main app component is App.tsx

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
