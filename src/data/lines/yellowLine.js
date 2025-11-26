// src/data/lines/yellowLine.js
import { 
  dapinglinFeatures,
  jinganFeatures,
  banqiaoFeatures,
  touqianzhuangFeatures,
  newTaipeiIndFeatures
} from '../commonFeatures';

export const yellowLine = [
  {
    id: "Y07",
    name: "大坪林",
    line: "black",
    x: 54.3, y: 86.6,
    transferId: "G04",
    description: "環狀線轉乘點。",
    features: dapinglinFeatures
  },
  {
    id: "Y08",
    name: "十四張",
    line: "yellow",
    x: 49.2, y: 86.6,
    description: "十四張重劃區。",
    features: []
  },
  {
    id: "Y09",
    name: "秀朗橋",
    line: "yellow",
    x: 45.2, y: 86.2,
    description: "鄰近河濱公園。",
    features: []
  },
  {
    id: "Y10",
    name: "景平",
    line: "yellow",
    x: 42.5, y: 84.3,
    description: "大賣場聚集。",
    features: []
  },
  {
    id: "Y11",
    name: "景安",
    line: "black",
    x: 37.8, y: 83.5,
    transferId: "O02",
    description: "雙線轉乘。",
    features: jinganFeatures
  },
  {
    id: "Y12",
    name: "中和",
    line: "yellow",
    x: 32.6, y: 83.5,
    description: "南山威力廣場。",
    features: []
  },
  {
    id: "Y13",
    name: "橋和",
    line: "yellow",
    x: 28.6, y: 83.1,
    description: "工業區。",
    features: []
  },
  {
    id: "Y14",
    name: "中原",
    line: "yellow",
    x: 25.7, y: 81.0,
    description: "住宅區。",
    features: []
  },
  {
    id: "Y15",
    name: "板新",
    line: "yellow",
    x: 22.8, y: 79.0,
    description: "鄰近板橋車站。",
    features: []
  },
  {
    id: "Y16",
    name: "板橋",
    line: "yellow",
    x: 19.5, y: 76.4,
    description: "環狀線板橋站。",
    features: banqiaoFeatures
  },
  {
    id: "Y17",
    name: "新埔民生",
    line: "yellow",
    x: 17.1, y: 72.6,
    description: "近藍線新埔站(站外轉乘)。",
    features: []
  },
  {
    id: "Y18",
    name: "頭前庄",
    line: "black",
    x: 17.1, y: 63.8,
    transferId: "O17",
    description: "IKEA新莊店。",
    features: touqianzhuangFeatures
  },
  {
    id: "Y19",
    name: "幸福",
    line: "yellow",
    x: 17.1, y: 60.4,
    description: "幸福路商圈。",
    features: []
  },
  {
    id: "Y20",
    name: "新北產業園區",
    line: "yellow",
    x: 17.1, y: 57.5,
    description: "轉乘機場捷運。",
    features: newTaipeiIndFeatures
  }
];
