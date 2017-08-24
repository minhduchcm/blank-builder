import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./row.scss";

class Row extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };
  render() {
    const {
      text,
      isDragging,
      connectDragSource,
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
