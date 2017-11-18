import { List, fromJS } from 'immutable';
import { SHOW_MODAL, HIDE_MODAL } from '../../constant';

export const showModal = (type, title, description, props, size = '') => ({
  type: SHOW_MODAL,
  data: { type, title, description, size, props, visible: true }
});

export const hideModal = () => ({ type: HIDE_MODAL });

export default (state = new List(), action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      const count = state.count();
      return (count
        ? state.update(count - 1, m => m.set('visible', false))
        : state
      ).push(fromJS(action.data));
    }
    case HIDE_MODAL: {
      let newState = state.pop();
      const count = newState.count();
      return count
        ? newState.update(count - 1, m => m.set('visible', true))
        : newState;
    }
    default:
      return state;
  }
};
