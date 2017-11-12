import { Map } from 'immutable';
import { DESELECT_OBJECT, SET_ACTIVE_WIDGET } from './../../constant';

export const deselect = () => ({
  type: DESELECT_OBJECT
});

export const setActiveWidget = id => ({
  type: SET_ACTIVE_WIDGET,
  id
});

export default (state = new Map({ id: '' }), action) => {
  switch (action.type) {
    case DESELECT_OBJECT: {
      return new Map({ id: '' });
    }
    case SET_ACTIVE_WIDGET: {
      return state.set('id', action.id);
    }
    default:
      return state;
  }
};
