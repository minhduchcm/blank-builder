import { SELECT_TAB } from "../../const";

export function selectTab(index, tabIndex) {
  return { type: SELECT_TAB, index, tabIndex };
}
