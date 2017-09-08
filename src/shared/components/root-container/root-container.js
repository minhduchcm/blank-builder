import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

import theme from "../../theme/default-theme/default.scss";
import style from "./root-container.scss";

import { ModalsManager } from "../modals";
import { SectionTemplatesManager } from "../section";
import { ConfigPanelsManager } from "../config-panels";

import sectionTemplates from "../../section-templates";
import TopNav from "../top-nav";
import Builder from "../builder";
import Modals from "../modals";
import ConfigPanelRoot from "../config-panels";

class RootContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.configPanelsManager = new ConfigPanelsManager();
    this.modalsManager = new ModalsManager();
    this.sectionTemplatesManager = new SectionTemplatesManager({
      modalsManager: this.modalsManager
    });
    this.sectionTemplatesManager.register([...sectionTemplates]);
  }
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  };
  static childContextTypes = {
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    modalsManager: PropTypes.object.isRequired,
    configPanelsManager: PropTypes.object.isRequired,
    sectionTemplatesManager: PropTypes.object.isRequired
  };
  getChildContext() {
    return {
      showModal: this.props.showModal,
      hideModal: this.props.hideModal,
      modalsManager: this.modalsManager,
      sectionTemplatesManager: this.sectionTemplatesManager,
      configPanelsManager: this.configPanelsManager
    };
  }
  render() {
    return (
      <div className={style["container"]}>
        <TopNav />
        <Builder />
        <Modals />
        <ConfigPanelRoot />
        <ReactTooltip effect="solid" />
      </div>
    );
  }
}

export default RootContainer;
