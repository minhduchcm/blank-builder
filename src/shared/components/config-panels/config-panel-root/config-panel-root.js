import React, { Component } from "react";
import PropTypes from "prop-types";

import TabPanels from "../../tab-panel";

import style from "./config-panel-root.scss";

class ConfigPanelRoot extends Component {
  static contextTypes = {
    configPanelsManager: PropTypes.object.isRequired
  };
  static propTypes = {};
  render() {
    const { id, childWidget } = this.props;
    if (!id) return null;
    const { configPanelsManager } = this.context;
    const index = id + (childWidget || "");
    const configs = configPanelsManager.get(index);
    const Header = ({ selectTab, activeTab }) => {
      return (
        <ul className={style["tab-header"]}>
          {configs.map(panel => {
            return (
              <li
                onClick={() => selectTab(panel.index)}
                className={activeTab === panel.index ? style["active"] : null}
                key={panel.index}
              >
                <div className={`icon icon-${panel.icon}`} />
              </li>
            );
          })}
        </ul>
      );
    };

    const Panels = ({ activeTab }) => {
      const activePanel = configs[activeTab];
      const Body = activePanel.panel;
      return (
        <div className={style["tab-body"]}>
          <h2>
            {activePanel.title}
          </h2>
          <hr />
        </div>
      );
    };
    const ConfigTabPanels = TabPanels({ index, Header, Panels });
    return (
      <div className={style["config-panel-root"]}>
        <ConfigTabPanels className={style["tab-panel"]} />
      </div>
    );
  }
}

export default ConfigPanelRoot;
