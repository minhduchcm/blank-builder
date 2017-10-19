import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd';
import PropTypes from 'prop-types';
import { getEmptyImage } from 'react-dnd-html5-backend';

import dropTarget from './drop-target';
import style from './row.scss';

import { deleteRow } from '../../../redux/modules/builder';
import { deleteRowData } from '../../../redux/modules/rows';
import { deleteWidgets } from '../../../redux/modules/widgets';
import { WidgetContainer } from '../widget';
import { Splitter } from './splitter';

import { dragItemTypes } from '../../../constant';
import dragSource from './drag-source';

@connect(
  (state, props) => {
    return state.getIn(['rows', props.id]).toJS();
  },
  { deleteRow, deleteRowData, deleteWidgets }
)
@DropTarget(dragItemTypes.ROW, dropTarget, (connectDragSource, monitor) => ({
  connectDropTarget: connectDragSource.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
  item: monitor.getItem()
}))
@DragSource(dragItemTypes.ROW, dragSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))
class Row extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    widgets: PropTypes.array.isRequired,
    deleteRow: PropTypes.func.isRequired,
    deleteRowData: PropTypes.func.isRequired,
    setConfigPanel: PropTypes.func.isRequired
  };
  deleteSection = e => {
    const {
      deleteRow,
      deleteRowData,
      deleteWidgets,
      index,
      id,
      widgets
    } = this.props;
    deleteRow(index);
    deleteRowData(id);
    widgets.map(id => deleteWidgets(id));
    e.stopPropagation();
  };
  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }
  onSplitterMouseDown = e => {
    document.addEventListener('mousemove', this.onSplitterMouseMove);
    document.addEventListener('mouseup', this.onSplitterMouseUp);
  };
  onSplitterMouseMove = e => {};
  onSplitterMouseUp = e => {
    document.removeEventListener('mousemove', this.onSplitterMouseMove);
    document.removeEventListener('mouseup', this.onSplitterMouseUp);
  };

  render() {
    const { connectDragSource, isDragging, data } = this.props;
    const totalWidth = data.width.reduce((s, i) => s + i, 0);
    return this.props.connectDropTarget(
      <div
        className={style.container}
        style={{ opacity: isDragging ? 0.2 : 1 }}
      >
        <div className="row">
          {connectDragSource(
            <button
              className={style.handle}
              style={{ opacity: isDragging ? 0 : 1 }}
            >
              <div className={'icon icon-move'} />
            </button>
          )}
          {this.props.widgets.map((id, index) => [
            index > 0 ? (
              <Splitter
                key={`split-${id}`}
                onMouseDown={this.onSplitterMouseDown}
              />
            ) : null,
            <div
              key={id}
              className="col"
              style={{
                width: `${data.width[index] / totalWidth * 100}%`
              }}
            >
              <WidgetContainer
                key={id}
                id={id}
                setConfigPanel={this.props.setConfigPanel}
              />
            </div>
          ])}
          <button
            className={`${style.handle} ${style.right}`}
            onClick={this.deleteSection}
            style={{ opacity: isDragging ? 0 : 1 }}
          >
            <div className={'icon icon-delete'} />
          </button>
        </div>
      </div>
    );
  }
}

export { Row };
