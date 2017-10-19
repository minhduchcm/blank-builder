import React, { Component } from 'react';

var instant = null;

class ConfigPanelRoot extends Component {
  static propTypes = {};
  constructor(props, context) {
    super(props, context);
    if (instant === null) {
      this.state = {};
      instant = this;
    }
    return instant;
  }

  setConfigPanel = panel => {
    this.setState({ panel });
  };

  render() {
    return <div>{this.state.panel}</div>;
  }
}
const setConfigPanel = panel => {
  instant.setConfigPanel(panel);
};
export { setConfigPanel, ConfigPanelRoot };
