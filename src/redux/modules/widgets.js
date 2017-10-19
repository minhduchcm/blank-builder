import { Map, fromJS } from 'immutable';
import { v4 as uuid } from 'uuid';

import { ADD_WIDGET, UPDATE_WIDGET, DELETE_WIDGET } from './../../constant';

export const addWidgets = widget => {
  return {
    type: ADD_WIDGET,
    id: uuid(),
    widgetType: widget.type,
    data: widget.data
  };
};

export const deleteWidgets = id => ({
  type: DELETE_WIDGET,
  id
});

export const updateWidgets = (id, patch) => {
  return {
    type: UPDATE_WIDGET,
    id,
    patch
  };
};

export default (state = new Map(), action) => {
  switch (action.type) {
    case ADD_WIDGET: {
      const widget = new Map({
        id: action.id,
        type: action.widgetType,
        data: fromJS(action.data)
      });
      return state.set(action.id, widget);
    }
    case UPDATE_WIDGET: {
      return state.setIn(
        [action.id, 'data', ...action.patch.dataPath],
        fromJS(action.patch.value)
      );
    }
    case DELETE_WIDGET: {
      return state.delete(action.id);
    }
    default:
      return state;
  }
};
