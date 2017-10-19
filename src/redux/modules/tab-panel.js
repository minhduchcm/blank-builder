import { Map } from 'immutable';

import { SELECT_TAB } from '../../constant';

export const selectTab = (index, tab) => ({ type: SELECT_TAB, index, tab });

export default (state = new Map(), action) => {
  switch (action.type) {
    case SELECT_TAB:
      return state.set(action.index, action.tab);
    default:
      return state;
  }
};
