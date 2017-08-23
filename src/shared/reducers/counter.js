import { fromJS } from "immutable";
import { INC } from "../const";

export default (state = fromJS({ value: 0 }), action) => {
  switch (action.type) {
    case INC:
      return state.set("value", state.get("value") + 1);
    default:
      return state;
  }
};
