import { fromJS } from "immutable";
import { TOOGLE_TOP_NAV } from "../const";

export default (state = fromJS({ isExpaned: true }), action) => {
  switch (action.type) {
    case TOOGLE_TOP_NAV:
      return state.set("isExpaned", !state.get("isExpaned"));
    default:
      return state;
  }
};
