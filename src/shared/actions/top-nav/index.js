import { TOOGLE_TOP_NAV, CHANGE_VIEWPORT } from "../../const";

export function changeViewport(viewport) {
  return { type: CHANGE_VIEWPORT, viewport };
}

export function toogle() {
  return {
    type: TOOGLE_TOP_NAV
  };
}
