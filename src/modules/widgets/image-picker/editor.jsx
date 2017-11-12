import React, { Component } from 'react';
import style from './image-picker.scss';

class Editor extends Component {
  static propTypes = {};
  widgetFocus = () => {
    this.props.setConfigPanel([{}]);
  };
  render() {
    return (
      <div className={style.container}>
        <img src={this.props.src} alt="demo" />
      </div>
    );
  }
}
export { Editor };
