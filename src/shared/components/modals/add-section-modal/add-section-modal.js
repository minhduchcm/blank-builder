import React, { Component } from "react";
import PropTypes from "prop-types";
import { modalTypes } from "../../../const";

class EmptyModal extends Component {
  static contextTypes = { showModal: PropTypes.func.isRequired };
  render() {
    return (
      <div style={{ height: "1000px" }}>
        <button onClick={() => this.context.showModal(modalTypes.EMPTY_MODAL)}>
          show modal
        </button>
      </div>
    );
  }
}

export default EmptyModal;
