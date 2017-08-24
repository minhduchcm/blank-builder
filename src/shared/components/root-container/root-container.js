import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./root-container.scss";
import ReactTooltip from "react-tooltip";

const RootContainer = props => {
  return (
    <div>
      <ReactTooltip effect="solid" />
    </div>
  );
};

RootContainer.propTypes = {};

export default RootContainer;
