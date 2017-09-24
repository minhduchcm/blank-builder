import React, { Component } from "react";
import PropTypes from "prop-types";
import { modalTypes } from "../../../const";

class ChangeImageModal extends Component {
  static contextTypes = { hideModal: PropTypes.func.isRequired };
  render() {
    return <div />;
  }
}

export default ChangeImageModal;
