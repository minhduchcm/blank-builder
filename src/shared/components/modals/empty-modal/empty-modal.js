import React, { Component } from "react";
import PropTypes from "prop-types";
import { ModalTypes } from "../../../const";

class EmptyModal extends Component {
  static contextTypes = { showModal: PropTypes.func.isRequired };
  render() {
    return (
      <div>
        <button onClick={() => this.context.showModal(ModalTypes.EMPTY_MODAL)}>
          show modal
        </button>
      </div>
    );
  }
}

export default EmptyModal;
