import { List } from 'immutable';

import { ADD_ROW, MOVE_ROW, DELETE_ROW, SET_ROW_DATA } from './../../constant';

export const addRow = (index, id) => ({
  type: ADD_ROW,
  index,
  id
});

export const moveRow = (index, toindex) => ({ type: MOVE_ROW, index, toindex });

export const deleteRow = index => ({ type: DELETE_ROW, index });

export const setRowData = (id, data) => ({ type: SET_ROW_DATA, id, data });

export default (state = new List(), action) => {
  switch (action.type) {
    case ADD_ROW:
      return state.insert(action.index, { id: action.id });
    case MOVE_ROW:
      if (action.toindex < 0) return state;
      var olditem = state.get(action.index);
      var newlist = state.delete(action.index).insert(action.toindex, olditem);
      return newlist;
    case DELETE_ROW:
      return state.delete(action.index);
    case SET_ROW_DATA:
      return state;
    default:
      return state;
  }
};
