import { findDOMNode } from "react-dom";

export default {
  drop(props, monitor) {
    props.moveRow(props.index, monitor.getItem().index);
  }
};
