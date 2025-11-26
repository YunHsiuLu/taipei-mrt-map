// src/data/lines/greenLine.js
import { 
  nanjingFuxingFeatures,
  songjiangNanjingFeatures,
  zhongshanFeatures,
  ximenFeatures,
  cksFeatures,
  gutingFeatures,
  dapinglinFeatures
} from '../commonFeatures';


export const greenLine = [
  {
    id: "G19",
    name: "松山",
    line: "green",
    x: 74.7, y: 58.8,
    description: "饒河街夜市入口。",
    features: [{ type: "food", title: "饒河夜市", text: "必比登推薦胡椒餅。" }]
  },
  {
    id: "G18",
    name: "南京三民",
    line: "green",
    x: 67.7, y: 58.8,
    description: "京華城舊址周邊。",
    features: []
  },
  {
    id: "G17",
    name: "台北小巨蛋",
    line: "green",
    x: 61.2, y: 58.8,
    description: "大型演唱會場地。",
    features: [{ type: "spot", title: "台北小巨蛋", text: "溜冰與看演唱會。" }]
  },
  {
    id: "G16",
    name: "南京復興",
    line: "black",
    x: 56.2, y: 58.8,
    description: "轉乘文湖線。",
    features: nanjingFuxingFeatures
  },
  {
    id: "G15",
    name: "松江南京",
    line: "black",
    x: 49., y: 58.8,
    transferId: "O08", // 連接橘線
    description: "金融辦公商圈。",
    features: songjiangNanjingFeatures
  },
  {
    id: "G14",
    name: "中山",
    line: "black",
    x: 40.9, y: 58.8, 
    transferId: "R11",
    description: "南西商圈。",
    features: zhongshanFeatures
  },
  {
    id: "G13",
    name: "北門",
    line: "green",
    x: 35.0, y: 62.,
    description: "古蹟與機捷連通道。", features: [{ type: "spot", title: "承恩門", text: "清代台北城門。" }]
  },
  {
    id: "G12",
    name: "西門",
    line: "black",
    x: 35.0, y: 66.2, 
    transferId: "BL11",
    description: "潮流文化中心。",
    features: ximenFeatures
  },
  {
    id: "G11",
    name: "小南門",
    line: "green",
    x: 36.1, y: 69.2,
    description: "鄰近植物園。",
    features: [{ type: "spot", title: "台北植物園", text: "荷花池與歷史博物館。" }]
  },
  {
    id: "G10",
    name: "中正紀念堂",
    line: "black",
    x: 40.9, y: 69.2, 
    transferId: "R08",
    description: "國家兩廳院。",
    features: cksFeatures
  },
  {
    id: "G09",
    name: "古亭",
    line: "black",
    x: 44.3, y: 71.7, 
    transferId: "O05",
    description: "雙線交會轉乘大站。",
    features: gutingFeatures
  },
  {
    id: "G08",
    name: "台電大樓",
    line: "green",
    x: 48., y: 74.4,
    description: "師大商圈南側。",
    features: []
  },
  {
    id: "G07",
    name: "公館",
    line: "green",
    x: 51.2, y: 76.9,
    description: "台灣大學所在地。",
    features: [{ type: "food", title: "公館商圈", text: "藍家割包與青蛙撞奶。" }]
  },
  {
    id: "G06",
    name: "萬隆",
    line: "green",
    x: 54.3, y: 79.7,
    description: "安靜住宅區。",
    features: []
  },
  {
    id: "G05",
    name: "景美",
    line: "green",
    x: 54.3, y: 83,
    description: "景美夜市。",
    features: [{ type: "food", title: "景美夜市", text: "在地傳統夜市。" }]
  },
  {
    id: "G04",
    name: "大坪林",
    line: "black",
    x: 54.3, y: 86.6,
    transferId: "Y07",
    description: "轉乘環狀線。",
    features: dapinglinFeatures
  },
  {
    id: "G03",
    name: "七張",
    line: "green",
    x: 54.3, y: 90.,
    description: "新店熱鬧商圈。",
    features: []
  },
  {
    id: "G02",
    name: "新店區公所",
    line: "green",
    x: 54.3, y: 92.9,
    description: "楓香大道。",
    features: []
  },
  {
    id: "G01",
    name: "新店",
    line: "green",
    x: 54.3, y: 95.6,
    description: "碧潭風景區。",
    features: [{ type: "spot", title: "碧潭吊橋", text: "踩天鵝船的好去處。" }]
  }
];
