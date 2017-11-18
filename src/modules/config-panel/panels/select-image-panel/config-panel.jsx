import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { modalTypes } from '../../../../constant';
import style from './style.scss';

export default class ConfigPanel extends Component {
  static contextTypes = {
    showModal: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className={style['container']}>
        <button
          onClick={e =>
            this.context.showModal(
              modalTypes.SELECT_IMAGE,
              'SELECT IMAGE',
              'Select image from gellery or your computer',
              {},
              'small'
            )}
        >
          Change Image
        </button>
      </div>
    );
  }
}
