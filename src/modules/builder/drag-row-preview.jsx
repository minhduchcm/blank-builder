import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

import { dragItemTypes } from '../../constant';
import dropTarget from './drag-row-preview-target';

import style from './builder.scss';

@DropTarget(dragItemTypes.ROW, dropTarget, (connectDragSource, monitor) => ({
  connectDropTarget: connectDragSource.dropTarget()
}))
class DragRowPreview extends Component {
  static propTypes = {};

  render() {
    return this.props.connectDropTarget(
      <div className={style.rowDragPreview} />
    );
  }
}

export { DragRowPreview };
