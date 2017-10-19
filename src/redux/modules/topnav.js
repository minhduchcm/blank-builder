import { Map } from 'immutable';
import { TOOGLE_TOP_NAV } from './../../constant';

export default (state = new Map({ value: true }), action) => {
  switch (action.type) {
    case TOOGLE_TOP_NAV:
      return state.set('value', !state.get('value'));
    default:
      return state;
  }
};
