import { ADD_ROW, MOVE_ROW } from "../../const";

export function addRow(index) {
  return { type: ADD_ROW, index };
}

export function moveRow(index, toindex) {
  return { type: MOVE_ROW, index, toindex };
}
