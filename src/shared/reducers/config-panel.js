import { CHANGE_CONFIG_PANEL_DOCK } from "../const";

export default (state = "left", action) => {
  switch (action.type) {
    case CHANGE_CONFIG_PANEL_DOCK:
      if (state == "left") return "right";
      return "left";
    default:
      return state;
  }
};
