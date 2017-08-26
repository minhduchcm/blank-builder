import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

import style from "./root-container.scss";

import { ModalsManager } from "../modals";
import { SectionTemplatesManager } from "../section";
import sectionTemplates from "../../section-templates";

import TopNav from "../top-nav";
import Builder from "../builder";
import Modals from "../modals";

class RootContainer extends Component {
  constructor(props, context) {
    super(props, context);
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
    sectionTemplatesManager: PropTypes.object.isRequired
  };
  getChildContext() {
    return {
      showModal: this.props.showModal,
      hideModal: this.props.hideModal,
      modalsManager: this.modalsManager,
      sectionTemplatesManager: this.sectionTemplatesManager
    };
  }
  render() {
    return (
      <div className={style["container"]}>
        <TopNav />
        <Builder />
        <Modals />
        <ReactTooltip effect="solid" />
      </div>
    );
  }
}

export default RootContainer;
