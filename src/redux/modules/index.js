import { combineReducers } from 'redux-immutable';
import topnav from './topnav';
import viewport from './viewport';
import builder from './builder';
import rows from './rows';
import widgets from './widgets';
import modals from './modals';
import tab from './tab-panel';
import config from './config-panel';

export default combineReducers({
  topnav,
  viewport,
  builder,
  rows,
  widgets,
  modals,
  tab,
  config
});
