import React from 'react';
import { Link } from 'react-router-dom';
// 這裡會自動引入 src/data/index.js，取得合併後的紅線、藍線資料
import { stationsData } from '../data'; 

const MapPage = () => {
  return (
    // 外層容器：負責 Flexbox 置中 (對應 CSS .map-container)
    <div className="map-container">
      
      {/* 標題區 */}
      <div style={{ textAlign: 'center', marginBottom: '20px', zIndex: 20 }}>
        <h1 style={{ margin: '0 0 10px 0', color: '#333' }}>台北捷運美食景點地圖</h1>
        <p style={{ margin: 0, color: '#666' }}>
          👇 點擊地圖上的站點圈圈，查看周邊特色
        </p>
      </div>
      
      {/* 地圖包裹層：負責圖片顯示與按鈕定位 (對應 CSS .map-wrapper) */}
      <div className="map-wrapper">
        
        {/* 捷運地圖圖片 */}
        {/* 請確保 map-image.jpg 已經放在 public 資料夾內 */}
        <img 
          src="/map-image.jpg" 
          alt="Taipei MRT Map" 
          className="mrt-map-img" 
        />

        {/* 遍歷資料生成互動按鈕 (Pins) */}
        {stationsData.map((station) => (
          <Link
            key={station.id}
            to={`/station/${station.id}`}
            className={`station-pin line-${station.line}`} // 動態加入 line-red, line-blue 等類別
            style={{
              left: `${station.x}%`, // X 座標百分比
              top: `${station.y}%`,  // Y 座標百分比
              // 讓黑色轉乘站 (black) 的層級比一般站點高，避免被蓋住
              zIndex: station.line === 'black' ? 10 : 5 
            }}
            // 滑鼠懸停時顯示站名
            title={`${station.name} (${station.id})`}
          >
            {/* 你可以在這裡放入文字，但通常地圖按鈕太小不適合放文字 */}
          </Link>
        ))}
        
      </div>

      {/* 頁腳或是額外說明 (選用) */}
      <footer style={{ marginTop: '20px', fontSize: '0.8rem', color: '#999' }}>
        Designed with React & Vite
      </footer>

    </div>
  );
};

export default MapPage;
