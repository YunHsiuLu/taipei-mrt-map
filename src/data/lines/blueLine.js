// src/data/lines/blueLine.js
import { 
  taipeiMainFeatures, 
  ximenFeatures, 
  zhongxiaoXinshengFeatures,
  zhongxiaoFuxingFeatures,
  nangangExpoFeatures,
  banqiaoFeatures
} from '../commonFeatures';

export const blueLine = [
  // --- 板南線 (Bannan Line) ---
  {
    id: "BL01",
    name: "頂埔",
    line: "blue",
    x: 12.7, y: 96.0,
    description: "土城科技園區。",
    features: []
  },
  {
    id: "BL02",
    name: "永寧",
    line: "blue",
    x: 15.6, y: 93.8,
    description: "承天禪寺賞桐花。",
    features: []
  },
  {
    id: "BL03",
    name: "土城",
    line: "blue",
    x: 18., y: 90.9,
    description: "土城行政中心。",
    features: []
  },
  {
    id: "BL04",
    name: "海山",
    line: "blue",
    x: 18., y: 87.7,
    description: "熱鬧住宅區。",
    features: []
  },
  {
    id: "BL05",
    name: "亞東醫院",
    line: "blue",
    x: 18., y: 84.4,
    description: "新北市立圖書館總館。",
    features: []
  },
  {
    id: "BL06",
    name: "府中",
    line: "blue",
    x: 18., y: 81.1,
    description: "板橋舊商圈，林家花園。",
    features: []
  },
  {
    id: "BL07",
    name: "板橋",
    line: "blue", // 轉乘環狀線/高鐵
    x: 18., y: 77.7,
    description: "三鐵共構，新北耶誕城。",
    features: banqiaoFeatures
  },
  {
    id: "BL08",
    name: "新埔",
    line: "blue",
    x: 18.6, y: 74.,
    description: "板橋重要轉運點。",
    features: [{ type: "food", title: "早午餐街", text: "特色早午餐聚集。" }]
  },
  {
    id: "BL09",
    name: "江子翠",
    line: "blue",
    x: 22, y: 71.5,
    description: "通往台北市門戶。",
    features: []
  },
  {
    id: "BL10",
    name: "龍山寺",
    line: "blue",
    x: 30.3, y: 68.9,
    description: "艋舺信仰中心。",
    features: [{ type: "food", title: "華西街夜市", text: "蛇肉與傳統小吃。" }]
  },
  {
    id: "BL11",
    name: "西門",
    line: "black", // 轉乘綠線
    x: 35.0, y: 66.2,
    description: "流行文化與觀光聖地。",
    features: ximenFeatures // 引用共用資料
  },
  {
    id: "BL12", // 藍線 ID
    name: "台北車站",
    line: "black",
    x: 40.9, y: 63.8,
    transferId: "R10",
    description: "板南線月台層，人潮眾多。",
    features: taipeiMainFeatures // 引用共用資料
  },
  {
    id: "BL13",
    name: "善導寺",
    line: "blue",
    x: 44.9, y: 63.8, // 稍微往右移避開BL12
    description: "華山市場。",
    features: [{ type: "food", title: "阜杭豆漿", text: "必比登推薦早餐。" }]
  },
  {
    id: "BL14",
    name: "忠孝新生",
    line: "black", // 轉乘橘線
    x: 49., y: 63.8,
    description: "光華商場與華山園區。",
    features: zhongxiaoXinshengFeatures
  },
  {
    id: "BL15",
    name: "忠孝復興",
    line: "black", // 轉乘棕線
    x: 56.2, y: 63.8,
    description: "東區商圈核心。",
    features: zhongxiaoFuxingFeatures // 引用共用資料
  },
  {
    id: "BL16",
    name: "忠孝敦化",
    line: "blue",
    x: 61.5, y: 63.8,
    description: "時尚潮牌聚集。",
    features: []
  },
  {
    id: "BL17",
    name: "國父紀念館",
    line: "blue",
    x: 65.5, y: 63.8,
    description: "松菸文創園區。",
    features: []
  },
  {
    id: "BL18",
    name: "市政府",
    line: "blue",
    x: 69.8, y: 63.8,
    description: "信義計畫區百貨群。",
    features: []
  },
  {
    id: "BL19",
    name: "永春",
    line: "blue",
    x: 74., y: 63.8,
    description: "傳統市場美食。",
    features: []
  },
  {
    id: "BL20",
    name: "後山埤",
    line: "blue",
    x: 77.8, y: 62.3,
    description: "五分埔商圈。",
    features: []
  },
  {
    id: "BL21",
    name: "昆陽",
    line: "blue",
    x: 80.7, y: 60.2,
    description: "北部流行音樂中心附近。",
    features: []
  },
  {
    id: "BL22",
    name: "南港",
    line: "black", // 轉乘高鐵
    x: 85.3, y: 59.8,
    description: "南港車站CityLink。",
    features: []
  },
  {
    id: "BL23",
    name: "南港展覽館",
    line: "black", // 轉乘棕線
    x: 90.5, y: 59.8,
    description: "大型展覽與演唱會。",
    features: nangangExpoFeatures
  }
];
