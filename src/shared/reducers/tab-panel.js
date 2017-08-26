import { fromJS } from "immutable";

import { SELECT_TAB } from "../const";

export default function tabPanel(state = fromJS({}), action) {
  switch (action.type) {
    case SELECT_TAB:
      return state.set(action.index, action.tabIndex);
    default:
      return state;
  }
}
