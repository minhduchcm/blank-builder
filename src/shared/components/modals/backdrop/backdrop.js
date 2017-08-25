import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./backdrop.scss";

const Backdrop = ({
  hideModal,
  transitionClassName,
  style: inlineStyle,
  children
}) =>
  <div
    style={inlineStyle}
    className={classnames(style["modal-backdrop"], transitionClassName)}
    onClick={hideModal}
  >
    {children}
  </div>;

Backdrop.propTypes = {
  hideModal: PropTypes.func
};

export default Backdrop;
