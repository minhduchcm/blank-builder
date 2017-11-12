import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { modalTypes } from '../../../../';
import style from './style.scss';

export default class TextAlignConfigPanel extends Component {
  static contextTypes = {
    showModal: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className={style['container']}>
        <button onClick={e => this.context.showModal(modalTypes.CHANGE_IMAGE)}>
          Change Image
        </button>
      </div>
    );
  }
}
