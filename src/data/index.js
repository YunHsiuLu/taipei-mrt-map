// src/data/index.js
import { redLine } from './lines/redLine';
import { blueLine } from './lines/blueLine';
import { greenLine } from './lines/greenLine';
import { orangeLine } from './lines/orangeLine';
import { yellowLine } from './lines/yellowLine';
import { brownLine } from './lines/brownLine';

// 合併所有路線
export const stationsData = [
  ...redLine,
  ...blueLine,
  ...greenLine,
  ...orangeLine,
  ...yellowLine,
  ...brownLine
];
