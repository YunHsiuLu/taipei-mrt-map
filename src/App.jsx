// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapPage from './pages/MapPage';
import StationDetail from './pages/StationDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* 首頁顯示地圖 */}
          <Route path="/" element={<MapPage />} />
          {/* 內頁顯示車站詳情，:id 是動態參數 */}
          <Route path="/station/:id" element={<StationDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
