import React, { Component } from 'react';

import SelectImagePanel from '../../config-panel/panels/select-image-panel';
import SizingPanel from '../../config-panel/panels/sizing-config-panel';
import FilterPanel from '../../config-panel/panels/filter-config-panel';
import AnimationPanel from '../../config-panel/panels/animation-config-panel';
import LinkToPanel from '../../config-panel/panels/link-config-panel';

import style from './image-picker.scss';

class Editor extends Component {
  static propTypes = {};
  widgetFocus = () => {
    this.props.setConfigPanel([
      SelectImagePanel,
      SizingPanel,
      FilterPanel,
      AnimationPanel,
      LinkToPanel
    ]);
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
