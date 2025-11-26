// src/data/lines/brownLine.js
import { 
  nangangExpoFeatures,
  nanjingFuxingFeatures,
  zhongxiaoFuxingFeatures,
  daanFeatures
} from '../commonFeatures';

export const brownLine = [
  {
    id: "BR24",
    name: "南港展覽館",
    line: "black",
    x: 90.5, y: 59.8,
    transferId: "BL23",
    description: "文湖線與板南線交會。",
    features: nangangExpoFeatures
  },
  {
    id: "BR23",
    name: "南港軟體園區",
    line: "brown",
    x: 90.5, y: 56.0,
    description: "科技產業聚落。",
    features: []
  },
  {
    id: "BR22",
    name: "東湖",
    line: "brown",
    x: 90.5, y: 52.2,
    description: "內湖哈拉影城。",
    features: []
  },
  {
    id: "BR21",
    name: "葫洲",
    line: "brown",
    x: 88.6, y: 48.8,
    description: "寧靜住宅區。",
    features: []
  },
  {
    id: "BR20",
    name: "大湖公園",
    line: "brown",
    x: 85, y: 46.3,
    description: "絕美錦帶橋。",
    features: [{ type: "spot", title: "大湖公園", text: "野餐與落羽松勝地。" }]
  },
  {
    id: "BR19",
    name: "內湖",
    line: "brown",
    x: 81, y: 44.4,
    description: "內湖行政中心。",
    features: []
  },
  {
    id: "BR18",
    name: "文德",
    line: "brown",
    x: 76, y: 44.4,
    description: "碧湖公園。",
    features: []
  },
  {
    id: "BR17",
    name: "港墘",
    line: "brown",
    x: 71, y: 44.4,
    description: "內湖科學園區核心。",
    features: [{ type: "food", title: "737巷美食街", text: "內湖著名小吃集散地。" }]
  },
  {
    id: "BR16",
    name: "西湖",
    line: "brown",
    x: 66, y: 44.4,
    description: "西湖市場美食。",
    features: []
  },
  {
    id: "BR15",
    name: "劍南路",
    line: "brown",
    x: 61, y: 44.4,
    description: "美麗華商圈。",
    features: []
  },
  {
    id: "BR14",
    name: "大直",
    line: "brown",
    x: 56.2, y: 46.3,
    description: "實踐大學。",
    features: []
  },
  {
    id: "BR13",
    name: "松山機場",
    line: "brown",
    x: 56.2, y: 50.6,
    description: "台北的空中門戶。",
    features: [{ type: "spot", title: "觀景台", text: "近距離看飛機起降。" }]
  },
  {
    id: "BR12",
    name: "中山國中",
    line: "brown",
    x: 56.2, y: 54.4,
    description: "民生重劃區。",
    features: []
  },
  {
    id: "BR11",
    name: "南京復興",
    line: "black",
    x: 56.2, y: 58.8,
    transferId: "G16", // 連接綠線 (G16是 53.0)
    description: "兄弟飯店與金融區。",
    features: nanjingFuxingFeatures
  },
  {
    id: "BR10",
    name: "忠孝復興",
    line: "black",
    x: 56.2, y: 63.8,
    transferId: "BL15", // 連接藍線 (BL15是 63.7)
    description: "東區購物核心。",
    features: zhongxiaoFuxingFeatures
  },
  {
    id: "BR09",
    name: "大安",
    line: "black",
    x: 56.2, y: 69.2,
    transferId: "R05", // 連接紅線 (R05是 71.5)
    description: "雙捷運交會。",
    features: daanFeatures
  },
  {
    id: "BR08",
    name: "科技大樓",
    line: "brown",
    x: 56.2, y: 72.5,
    description: "國北教大。",
    features: []
  },
  {
    id: "BR07",
    name: "六張犁",
    line: "brown",
    x: 61.0, y: 73.8,
    description: "遠企商圈。",
    features: []
  },
  {
    id: "BR06",
    name: "麟光",
    line: "brown",
    x: 65.2, y: 74.4,
    description: "富陽自然生態公園。",
    features: []
  },
  {
    id: "BR05",
    name: "辛亥",
    line: "brown",
    x: 65.6, y: 77.3,
    description: "辛亥隧道旁。",
    features: []
  },
  {
    id: "BR04",
    name: "萬芳醫院",
    line: "brown",
    x: 66., y: 80.2,
    description: "文山區醫療中心。",
    features: []
  },
  {
    id: "BR03",
    name: "萬芳社區",
    line: "brown",
    x: 70.5, y: 81,
    description: "山坡住宅區。",
    features: []
  },
  {
    id: "BR02",
    name: "木柵",
    line: "brown",
    x: 75.3, y: 81.0,
    description: "文山行政中心。",
    features: []
  },
  {
    id: "BR01",
    name: "動物園",
    line: "brown",
    x: 80.3, y: 81,
    description: "文湖線終點，可搭貓纜。",
    features: []
  }
];
