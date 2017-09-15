import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { getEmptyImage } from "react-dnd-html5-backend";
import ReactToolTip from "react-tooltip";
import style from "./row.scss";

class Row extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    moveSection: PropTypes.func.isRequired,
    deleteSection: PropTypes.func.isRequired,
    selectSection: PropTypes.func.isRequired,
    setSectionData: PropTypes.func.isRequired,
    connectDragSource: PropTypes.func.isRequired
  };
  static contextTypes = {
    sectionTemplatesManager: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  renderMoveHandler() {
    return (
      <div className={style["handle"]}>
        <div className={"icon icon-move"} />
      </div>
    );
  }
  renderDeleteHandle() {
    return (
      <div
        className={`${style["handle"]} ${style["right"]}`}
        onClick={this.props.deleteSection}
      >
        <div className={"icon icon-delete"} data-tip="Delete" />
      </div>
    );
  }

  render() {
    const { sectionTemplatesManager } = this.context;
    const { type, connectDragSource, isDragging } = this.props;
    let template = sectionTemplatesManager.get(type);
    return (
      <div
        id={this.props.id}
        className={classnames(style["row"], {
          [style["is-dragging"]]: isDragging
        })}
      >
        {connectDragSource(this.renderMoveHandler())}
        <template.editor
          id={this.props.id}
          index={this.props.index}
          {...this.props.data}
          selectSection={this.props.selectSection}
          setSectionData={this.props.setSectionData}
        />
        {this.renderDeleteHandle()}
      </div>
    );
  }
  componentDidUpdate = (prevProps, prevState) => {
    ReactToolTip.rebuild();
  };
}

export default Row;
