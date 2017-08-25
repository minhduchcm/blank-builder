import { fromJS } from "immutable";
import { SHOW_MODAL, HIDE_MODAL, ModalTypes } from "../const";

export default (state = fromJS({}), action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      return fromJS({ type: action.modalType, props: action.modalProps });
    }
    case HIDE_MODAL: {
      return fromJS({});
    }
    default:
      return state;
  }
};
