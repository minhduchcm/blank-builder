import { fromJS } from "immutable";
import { CHANGE_VIEWPORT, viewports } from "../const";

export default (state = fromJS({ viewport: viewports.DESKTOP }), action) => {
  switch (action.type) {
    case CHANGE_VIEWPORT:
      return state.set("viewport", action.viewport);
    default:
      return state;
  }
};
