import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./backdrop.scss";

import postcss from "postcss";
import autoprefixer from "autoprefixer";
let yeah = postcss([autoprefixer]);

const Backdrop = ({ hideModal, transitionClass, style: inlineStyle }) => {
  return (
    <div
      style={inlineStyle}
      className={classnames(style["modal-backdrop"], style[transitionClass])}
      onClick={hideModal}
    />
  );
};

Backdrop.propTypes = {
  hideModal: PropTypes.func,
  transitionClass: PropTypes.string,
  style: PropTypes.object
};

export default Backdrop;
