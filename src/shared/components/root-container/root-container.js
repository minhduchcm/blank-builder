import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

import style from "./root-container.scss";

import TopNav from "../top-nav";
import Builder from "../builder";
import Modals from "../modals";

class RootContainer extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  };
  static childContextTypes = {
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  };
  getChildContext() {
    return {
      showModal: this.props.showModal,
      hideModal: this.props.hideModal
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
