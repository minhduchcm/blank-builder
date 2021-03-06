import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { DragLayer } from 'react-dnd';

import { viewports } from '../../constant';

import style from './drag-preview-layer.scss';

@connect(state => {
  return { viewport: state.getIn(['viewport', 'value']) };
})
@DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  offset: monitor.getDifferenceFromInitialOffset(),
  isDragging: monitor.isDragging()
}))
class DragPreviewLayer extends Component {
  static propTypes = {
    item: PropTypes.object,
    itemType: PropTypes.string,
    initialOffset: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }),
    offset: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }),
    isDragging: PropTypes.bool.isRequired
  };

  getRowStyles = row => {
    const { initialOffset, offset } = this.props;
    if (!initialOffset || !offset) {
      return {
        display: 'none'
      };
    }
    const transform = `translate(0px, calc(${initialOffset.y -
      40 +
      offset.y}px - 50%))`;
    return {
      transform
    };
  };
  getItemPreviewer(type) {
    return;
  }

  render() {
    const { isDragging, viewport } = this.props;

    if (!isDragging) {
      return null;
    }
    return (
      <div
        className={classnames(style.previewLayer, {
          [style.mobile]: viewport === viewports.MOBILE,
          [style.tablet]: viewport === viewports.TABLET
        })}
      >
        <div className={style.previewer} style={this.getRowStyles()} />
      </div>
    );
  }
}

export { DragPreviewLayer };
