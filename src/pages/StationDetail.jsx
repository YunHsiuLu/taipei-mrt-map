// src/pages/StationDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { stationsData } from '../data';

// 輔助函式：根據 ID 開頭決定顏色
const getLineColor = (id) => {
  if (id.startsWith('R')) return '#e3002c'; // 紅線
  if (id.startsWith('BL')) return '#0070bd'; // 藍線
  if (id.startsWith('G')) return '#008659';  // 綠線
  if (id.startsWith('O')) return '#f8b61c';  // 橘線
  if (id.startsWith('BR')) return '#c48c31'; // 棕線
  if (id.startsWith('Y')) return '#FFD306';  // 環狀線 (字體可能要深色，這裡先統一白字)
  return '#999';
};

const StationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 1. 找到主要車站資料
  const currentStation = stationsData.find((s) => s.id === id);

  if (!currentStation) {
    return <div className="detail-container">找不到該車站資料</div>;
  }

  // 2. 尋找是否有轉乘站 (Partner Station)
  // 如果有 transferId，就去資料庫把那一站也抓出來
  const transferStation = currentStation.transferId 
    ? stationsData.find(s => s.id === currentStation.transferId) 
    : null;

  // 3. 建立一個包含所有相關站點的陣列 (用來顯示徽章)
  // 為了讓顯示順序固定 (例如永遠先紅再藍)，這裡可以做一點排序，或者直接放進去
  let allBadges = [currentStation];
  if (transferStation) {
    allBadges.push(transferStation);
  }
  
  // (選用) 簡單排序：讓 ID 按照字母順序排列，這樣 R10 和 BL12 進來看到的順序都會一樣
  // 例如：BL12 會排在 R10 前面 (B < R)，如果你希望特定順序可自行調整
  allBadges.sort((a, b) => a.id.localeCompare(b.id));

  return (
    <div className="detail-container">
      {/* 返回鍵：回到地圖首頁 */}
      <button onClick={() => navigate('/')} className="back-btn">
        ← 回地圖
      </button>

      {/* 頁面標題區：顯示圓圈徽章 + 站名 */}
      <div className="station-header">
        
        <div className="badge-container">
          {allBadges.map((st) => (
            <div 
              key={st.id} 
              className="station-badge"
              style={{ backgroundColor: getLineColor(st.id) }}
              // 如果是環狀線(黃色)，文字改黑色比較清楚，其他維持白色
              title={st.name}
            >
              {/* 如果是黃線，文字改黑色 */}
              <span style={{ color: st.id.startsWith('Y') ? '#333' : 'white' }}>
                {st.id}
              </span>
            </div>
          ))}
        </div>

        <h1>{currentStation.name}</h1>
      </div>

      {/* 敘述文字 */}
      <p className="station-desc">{currentStation.description}</p>
      
      {/* 
         因為我們使用了 commonFeatures (共用變數)，
         所以 currentStation.features 和 transferStation.features 內容應該是一樣的。
         直接顯示 currentStation 的即可。
      */}
      <div className="features-grid">
        {currentStation.features.map((item, index) => (
          <div key={index} className="feature-card">
            <div className="feature-type">
              {item.type === 'food' ? '🍔 美食' : '🏔️ 景點'}
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationDetail;
