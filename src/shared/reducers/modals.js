import { fromJS } from "immutable";
import { v4 } from "uuid";
import { SHOW_MODAL, HIDE_MODAL, CLOSE_MODAL, ModalTypes } from "../const";

export default (state = fromJS([]), action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      return (state.count() > 0
        ? state.update(state.count() - 1, modal =>
            modal.set("isVisible", false)
          )
        : state).push(
        fromJS({
          id: v4(),
          type: action.modalType,
          props: action.modalProps,
          isVisible: true
        })
      );
    }
    case HIDE_MODAL: {
      let newState = state.pop();
      return newState.count() > 0
        ? newState.update(newState.count() - 1, modal =>
            modal.set("isVisible", true)
          )
        : newState;
    }
    case CLOSE_MODAL: {
      return state.pop();
    }
    default:
      return state;
  }
};
