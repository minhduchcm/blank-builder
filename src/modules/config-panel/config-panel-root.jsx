import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './config-panel.scss';
var instant = null;

@connect(state => {
  return state.get('config').toJS();
})
class ConfigPanelRoot extends Component {
  static propTypes = {};
  static instant = null;
  constructor(props, context) {
    super(props, context);
    this.state = {};
    instant = this;
  }

  setConfigPanel = panel => {
    console.log(panel);
    this.setState({ panel });
  };

  render() {
    if (this.props.id !== '')
      return <div className={style.container}>{this.props.id}</div>;
    return null;
  }
}

const setConfigPanel = panel => {
  instant.setConfigPanel(panel);
};

export { setConfigPanel, ConfigPanelRoot };
