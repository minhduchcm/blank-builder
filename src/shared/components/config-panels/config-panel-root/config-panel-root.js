import React, { Component } from "react";
import PropTypes from "prop-types";

import TabPanels from "../../tab-panel";

import style from "./config-panel-root.scss";

class ConfigPanelRoot extends Component {
  static contextTypes = {
    configPanelsManager: PropTypes.object.isRequired
  };
  static propTypes = {
    setSectionData: PropTypes.func.isRequired
  };
  render() {
    const { id, childWidget } = this.props;
    if (!id) return <div key="config-panel-root" />;
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
          <Body setSectionData={this.props.setSectionData} />
        </div>
      );
    };
    const ConfigTabPanels = TabPanels({ id: index, Header, Panels });
    return (
      <div key="config-panel-root" className={style["config-panel-root"]}>
        <ConfigTabPanels key={index} className={style["tab-panel"]} />
      </div>
    );
  }
}

export default ConfigPanelRoot;
