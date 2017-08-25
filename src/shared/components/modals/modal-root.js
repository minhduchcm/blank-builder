import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { TransitionGroup } from "react-transition-group";
import Backdrop from "./backdrop";
import Box from "./box";

class ModalRoot extends Component {
  static propTypes = {
    modals: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        isVisible: PropTypes.bool.isRequired,
        props: PropTypes.object
      })
    ).isRequired,
    hideModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
  };
  onModalHide() {
    this.props.closeModal();
  }
  render() {
    const { modals, hideModal, closeModal } = this.props;
    let items = [];
    if (modals.length > 1 || (modals.length == 1 && modals[0].isVisible)) {
      items.push(
        <Backdrop key="backdrop" timeout={300} hideModal={hideModal} />
      );
    }
    items.push(
      modals
        .filter(modal => modal.isVisible)
        .map(({ id, type, props }, index) =>
          <Box modalType={type} modalProps={props} key={id} timeout={300} />
        )
    );
    return (
      <TransitionGroup>
        {items}
      </TransitionGroup>
    );
  }
}

export default ModalRoot;
