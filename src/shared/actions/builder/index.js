import { ADD_SECTION, MOVE_SECTION } from "../../const";

export function addSection(index) {
  return { type: ADD_SECTION, index };
}

export function moveSection(index, toindex) {
  return { type: MOVE_SECTION, index, toindex };
}
