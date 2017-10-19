import { Map } from 'immutable';
import { v4 as uuid } from 'uuid';

import { ADD_ROW_DATA, DELETE_ROW_DATA } from './../../constant';

export const addRowData = (data, widgets) => dispach => {
  return new Promise(resolve => {
    const id = uuid();
    dispach({
      type: ADD_ROW_DATA,
      id,
      data,
      widgets
    });
    resolve(id);
  });
};

export const deleteRowData = id => dispach => {
  return new Promise(resolve => {
    dispach({
      type: DELETE_ROW_DATA,
      id
    });
    resolve();
  });
};

export default (state = new Map(), action) => {
  switch (action.type) {
    case ADD_ROW_DATA:
      const row = new Map({
        id: action.id,
        data: action.data,
        widgets: action.widgets
      });
      return state.set(action.id, row);
    case DELETE_ROW_DATA:
      return state.delete(action.id);
    default:
      return state;
  }
};
