import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./config-panel-root.scss";

class ConfigPanelRoot extends Component {
  static propTypes = {};
  render() {
    return (
      <div className={style["config-panel-root"]}>
        {JSON.stringify(this.props)}
      </div>
    );
  }
}

export default ConfigPanelRoot;
