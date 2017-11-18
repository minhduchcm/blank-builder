import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './select-image-modal.scss';

class SelectImageModal extends Component {
  static contextTypes = {
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  };

  render() {
    return <div className={style.container} />;
  }
}

export { SelectImageModal };
