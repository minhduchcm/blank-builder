import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './config-panel.scss';
import { v4 } from 'uuid';
import { createTabPanel } from '../tab-panel';

var instant = null;

@connect(state => {
  return state.get('config').toJS();
})
class ConfigPanel extends Component {
  static propTypes = {};
  static instant = null;
  constructor(props, context) {
    super(props, context);
    this.state = { panels: [] };
    instant = this;
  }

  buildConfigTabpanel(header, bodys) {}

  setConfigPanel = panels => {
    this.setState({ panels });
  };

  render() {
    if (this.props.id !== '' && this.state.panels.length > 0) {
      const { panels } = this.state;
      const { active, selectTab } = this.props;
      const ActivePanel = panels[active] && panels[active].configPanel;
      const panelName = panels[active] && panels[active].name;
      return (
        <div className={style.container}>
          <ul className={style.tabHeader}>
            {panels.map((panel, index) => (
              <li
                className={active === index ? style.active : null}
                key={`${tabId}-header-${index}`}
              >
                <a
                  onClick={() =>
                    active === index ? selectTab(-1) : selectTab(index)}
                >
                  <div className={`icon icon-${panel.icon}`} />
                </a>
              </li>
            ))}
          </ul>
          {ActivePanel && (
            <div className={style.tabBody}>
              <h3>{panelName}</h3>
              <ActivePanel />
            </div>
          )}
        </div>
      );
    }
    return null;
  }
}

const setConfigPanel = panel => {
  instant.setConfigPanel(panel);
};

const tabId = v4();
const ConfigPanelRoot = createTabPanel(tabId, ConfigPanel);
export { setConfigPanel, ConfigPanelRoot };
