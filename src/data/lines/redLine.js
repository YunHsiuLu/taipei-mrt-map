// src/data/lines/redLine.js
import { 
  taipeiMainFeatures, 
  zhongshanFeatures, 
  minquanWFeatures,
  cksFeatures,
  dongmenFeatures,
  daanFeatures,
  beitouFeatures
} from '../commonFeatures';

export const redLine = [
  // --- 淡水信義線 (Tamsui-Xinyi Line) ---
  {
    id: "R28",
    name: "淡水",
    line: "red",
    x: 13.4, y: 15.5,
    description: "捷運紅線起點，擁有美麗河岸風光。",
    features: [{ type: "food", title: "阿給", text: "淡水經典小吃。" }]
  },
  {
    id: "R27",
    name: "紅樹林",
    line: "black", // 轉乘淡海輕軌
    x: 16.2, y: 18.45,
    description: "可轉乘淡海輕軌，紅樹林生態保護區。",
    features: [{ type: "", title: "淡海輕軌轉運站", text: "可以連接到濱海公路、海大等等北海岸的景點。" }]
  },
  {
    id: "R26",
    name: "竹圍",
    line: "red",
    x: 16.2, y: 21.7,
    description: "淡水河畔住宅區。",
    features: []
  },
  {
    id: "R25",
    name: "關渡",
    line: "red",
    x: 16.2, y: 24.9,
    description: "關渡宮與自然公園。",
    features: []
  },
  {
    id: "R24",
    name: "忠義",
    line: "red",
    x: 20, y: 26.85,
    description: "行天宮北投分宮。",
    features: []
  },
  {
    id: "R23",
    name: "復興崗",
    line: "red",
    x: 24.8, y: 26.85,
    description: "北投機廠所在地。",
    features: []
  },
  {
    id: "R22",
    name: "北投",
    line: "black", // 轉乘新北投
    x: 29.8, y: 26.85,
    description: "溫泉列車轉乘站。",
    features: beitouFeatures
  },
  {
    id: "R21",
    name: "奇岩",
    line: "red",
    x: 32.6, y: 28.8,
    description: "生態社區。",
    features: []
  },
  {
    id: "R20",
    name: "唭哩岸",
    line: "red",
    x: 35.4, y: 30.8,
    description: "鄰近軍艦岩。",
    features: []
  },
  {
    id: "R19",
    name: "石牌",
    line: "red",
    x: 38.3, y: 33.,
    description: "榮總與振興醫院。",
    features: [{ type: "food", title: "石牌夜市", text: "在地美食。" }]
  },
  {
    id: "R18",
    name: "明德",
    line: "red",
    x: 40.9, y: 35.45,
    description: "寧靜住宅區。",
    features: []
  },
  {
    id: "R17",
    name: "芝山",
    line: "red",
    x: 40.9, y: 38.75,
    description: "天母商圈入口。",
    features: []
  },
  {
    id: "R16",
    name: "士林",
    line: "red",
    x: 40.9, y: 41.9,
    description: "士林官邸。",
    features: [{ type: "food", title: "士林夜市", text: "國際觀光夜市。" }]
  },
  {
    id: "R15",
    name: "劍潭",
    line: "red",
    x: 40.9, y: 44.9,
    description: "北藝中心球劇場。",
    features: []
  },
  {
    id: "R14",
    name: "圓山",
    line: "red",
    x: 40.9, y: 48.7,
    description: "花博公園。",
    features: []
  },
  {
    id: "R13",
    name: "民權西路",
    line: "black", // 轉乘橘線
    x: 40.9, y: 52.6,
    transferId: "O11",
    description: "紅線與橘線交會。",
    features: minquanWFeatures
  },
  {
    id: "R12",
    name: "雙連",
    line: "red",
    x: 40.9, y: 55.8,
    description: "馬偕醫院商圈。",
    features: [{ type: "food", title: "寧夏夜市", text: "步行可達。" }]
  },
  {
    id: "R11",
    name: "中山",
    line: "black", // 轉乘綠線
    x: 40.9, y: 58.8,
    description: "南西商圈與線形公園。",
    features: zhongshanFeatures // 引用共用資料
  },
  {
    id: "R10", // 紅線 ID
    name: "台北車站",
    line: "black",
    x: 40.9, y: 63.8, 
    transferId: "BL12",
    description: "紅線月台層，轉乘高鐵。",
    features: taipeiMainFeatures // 引用共用資料
  },
  {
    id: "R09",
    name: "台大醫院",
    line: "red",
    x: 40.9, y: 66.5,
    description: "二二八公園。",
    features: []
  },
  {
    id: "R08",
    name: "中正紀念堂",
    line: "black", // 轉乘綠線
    x: 40.9, y: 69.2,
    description: "國家級藝文中心。",
    features: cksFeatures // 引用共用資料
  },
  {
    id: "R07",
    name: "東門",
    line: "black", // 轉乘橘線
    x: 47.7, y: 69.2,
    description: "永康街商圈。",
    features: dongmenFeatures
  },
  {
    id: "R06",
    name: "大安森林公園",
    line: "red",
    x: 51.9, y: 69.2,
    description: "台北市之肺。",
    features: []
  },
  {
    id: "R05",
    name: "大安",
    line: "black", // 轉乘棕線
    x: 56.2, y: 69.2,
    description: "信維市場。",
    features: daanFeatures
  },
  {
    id: "R04",
    name: "信義安和",
    line: "red",
    x: 62.1, y: 69.2,
    description: "通化夜市入口。",
    features: []
  },
  {
    id: "R03",
    name: "台北101/世貿",
    line: "red",
    x: 67.2, y: 69.2,
    description: "台灣最高地標。",
    features: [{ type: "food", title: "鼎泰豐", text: "101店。" }]
  },
  {
    id: "R02",
    name: "象山",
    line: "red",
    x: 71.5, y: 69.2,
    description: "欣賞台北夜景。",
    features: []
  }
];
