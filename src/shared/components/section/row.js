import React, { Component } from "react";
import PropTypes from "prop-types";
import { getEmptyImage } from "react-dnd-html5-backend";
import style from "./row.scss";

class Row extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };
  componentDidMount() {
    // Use empty image as a drag preview so browsers don't draw it
    // and we can draw whatever we want on the custom drag layer instead.
    this.props.connectDragPreview(getEmptyImage(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true
    });
  }

  render() {
    const {
      text,
      isDragging,
      connectDragSource,
      connectDragPreview,
      connectDropTarget
    } = this.props;

    return connectDropTarget(
      <div className={style["row"]}>
        {connectDragSource(<button>move</button>)}
        {text}
      </div>
    );
  }
}

export default Row;
