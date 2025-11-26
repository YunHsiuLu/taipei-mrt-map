// src/data/lines/orangeLine.js
import { 
  jinganFeatures,
  gutingFeatures,
  dongmenFeatures,
  zhongxiaoXinshengFeatures,
  songjiangNanjingFeatures,
  minquanWFeatures,
  touqianzhuangFeatures
} from '../commonFeatures';

export const orangeLine = [
  // --- 蘆洲/迴龍方向 ---
  {
    id: "O11",
    name: "民權西路",
    line: "black",
    x: 40.9, y: 52.6,
    transferId: "R13", // 連接紅線
    description: "紅線轉乘點。",
    features: minquanWFeatures
  },
  {
    id: "O10",
    name: "中山國小",
    line: "orange",
    x: 46.1, y: 52.6,
    description: "晴光市場周邊。",
    features: []
  },
  {
    id: "O09",
    name: "行天宮",
    line: "orange",
    x: 49.0, y: 55.0,
    description: "行天宮參拜人潮。",
    features: [{ type: "spot", title: "行天宮", text: "香火鼎盛的關帝廟。" }]
  },
  {
    id: "O08",
    name: "松江南京",
    line: "black",
    x: 49., y: 58.8,
    transferId: "G15",
    description: "金融區轉乘站。",
    features: songjiangNanjingFeatures
  },
  {
    id: "O07",
    name: "忠孝新生",
    line: "black",
    x: 49.0, y: 63.8,
    transferId: "BL14",
    description: "光華商場。",
    features: zhongxiaoXinshengFeatures
  },
  {
    id: "O06",
    name: "東門",
    line: "black",
    x: 47.7, y: 69.2,
    transferId: "R07",
    description: "永康街美食。",
    features: dongmenFeatures
  },
  {
    id: "O05",
    name: "古亭",
    line: "black",
    x: 44.3, y: 71.7,
    transferId: "G09",
    description: "重要轉乘樞紐。",
    features: gutingFeatures
  },
  {
    id: "O04",
    name: "頂溪",
    line: "orange",
    x: 37.8, y: 77.9,
    description: "永和豆漿大王。",
    features: [{ type: "food", title: "樂華夜市", text: "永和在地美食。" }]
  },
  {
    id: "O03",
    name: "永安市場",
    line: "orange",
    x: 37.8, y: 80.6,
    description: "四號公園。",
    features: []
  },
  {
    id: "O02",
    name: "景安",
    line: "black",
    x: 37.8, y: 83.5,
    transferId: "Y11",
    description: "轉乘環狀線。",
    features: jinganFeatures
  },
  {
    id: "O01",
    name: "南勢角",
    line: "orange",
    x: 37.8, y: 86.6,
    description: "烘爐地接駁。",
    features: [{ type: "spot", title: "烘爐地", text: "求財與看夜景。" }]
  },
  // ==========================================
  // 蘆洲支線 (往上方延伸)
  // ==========================================
  {
    id: "O50",
    name: "三重國小",
    line: "orange",
    x: 29.2, y: 50.2,
    description: "鄰近三重交流道。",
    features: []
  },
  {
    id: "O51",
    name: "三和國中",
    line: "orange",
    x: 26.3, y: 48.2,
    description: "三重與蘆洲交界。",
    features: []
  },
  {
    id: "O52",
    name: "徐匯中學",
    line: "orange",
    x: 23.4, y: 46.,
    description: "徐匯廣場購物中心。",
    features: [
      { type: "spot", title: "徐匯廣場", text: "結合飯店與購物的商場。" }
    ]
  },
  {
    id: "O53",
    name: "三民高中",
    line: "orange",
    x: 20.5, y: 44.0,
    description: "蘆洲行政中心，湧蓮寺所在地。",
    features: [
      { type: "spot", title: "湧蓮寺", text: "蘆洲當地信仰中心。" },
      { type: "food", title: "切仔麵", text: "蘆洲是切仔麵的發源地。" }
    ]
  },
  {
    id: "O54",
    name: "蘆洲",
    line: "orange",
    x: 17.6, y: 41.9,
    description: "蘆洲線終點站。",
    features: [
      { type: "spot", title: "李氏古宅", text: "保存良好的傳統三合院。" }
    ]
  },

  // ==========================================
  // 迴龍支線 (往左方延伸)
  // ==========================================
  {
    id: "O12",
    name: "大橋頭",
    line: "orange",
    x: 35.8, y: 52.6,
    description: "延三夜市。",
    features: [{ type: "food", title: "延三夜市", text: "老饕的隱藏名單。" }]
  },
  {
    id: "O13",
    name: "台北橋",
    line: "orange",
    x: 30.2, y: 54.3,
    description: "鄰近三和夜市。",
    features: [
      { type: "food", title: "三和夜市", text: "熱鬧的在地夜市。" }
    ]
  },
  {
    id: "O14",
    name: "菜寮",
    line: "orange",
    x: 27.3, y: 56.2,
    description: "三重行政中心，新北體育場。",
    features: []
  },
  {
    id: "O15",
    name: "三重",
    line: "orange",
    x: 24.4, y: 58.4,
    description: "可轉乘桃園機場捷運。",
    features: [
      { type: "spot", title: "新北大都會公園", text: "超大草皮與溜滑梯。" }
    ]
  },
  {
    id: "O16",
    name: "先嗇宮",
    line: "orange",
    x: 20.4, y: 61.2,
    description: "鄰近湯城園區與IKEA。",
    features: [
      { type: "spot", title: "先嗇宮", text: "歷史悠久的神農大帝廟。" }
    ]
  },
  {
    id: "O17",
    name: "頭前庄",
    line: "black",
    x: 17.1, y: 63.8,
    transferId: "Y18", // 與黃線 Y18 對齊
    description: "轉乘環狀線，通往新莊廟街。",
    features: touqianzhuangFeatures
  },
  {
    id: "O18",
    name: "新莊",
    line: "orange",
    x: 13.5, y: 66.4,
    description: "新莊老街區。",
    features: [
      { type: "spot", title: "新莊體育館", text: "各類運動賽事舉辦地。" }
    ]
  },
  {
    id: "O19",
    name: "輔大",
    line: "orange",
    x: 10.4, y: 68.7,
    description: "輔仁大學校門口。",
    features: [
      { type: "food", title: "輔大霜淇淋", text: "校園必吃名產。" },
      { type: "food", title: "花園夜市", text: "附近的大型流動夜市。" }
    ]
  },
  {
    id: "O20",
    name: "丹鳳",
    line: "orange",
    x: 7.3, y: 70.9,
    description: "下新莊住宅區。",
    features: []
  },
  {
    id: "O21",
    name: "迴龍",
    line: "orange",
    x: 4.1, y: 73.2,
    description: "中和新蘆線終點，鄰近樂生療養院。",
    features: []
  }
];
