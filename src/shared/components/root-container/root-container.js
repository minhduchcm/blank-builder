import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

import style from "./root-container.scss";

import TopNav from "../top-nav";
import Builder from "../builder";

const RootContainer = props => {
  return (
    <div>
      <TopNav />
      <Builder />
      <ReactTooltip effect="solid" />
    </div>
  );
};

RootContainer.propTypes = {};

export default RootContainer;
