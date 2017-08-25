import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Backdrop from "./backdrop";

const ModalRoot = ({ type, props, hideModal }) =>
  <Backdrop isVisable={type !== undefined} hideModal={hideModal} />;

ModalRoot.propTypes = {
  type: PropTypes.string,
  modalProps: PropTypes.object,
  hideModal: PropTypes.func.isRequired
};

export default ModalRoot;
