import { Map } from 'immutable';
import { CHANGE_VIEWPORT, viewports } from './../../constant';

export default (state = new Map({ value: viewports.TABLET }), action) => {
  switch (action.type) {
    case CHANGE_VIEWPORT:
      return state.set('value', action.viewport);
    default:
      return state;
  }
};
