import { findDOMNode } from "react-dom";
export default {
  beginDrag({ id, type, index }, monitor, component) {
    const boundRect = findDOMNode(component).getBoundingClientRect();

    return {
      id,
      type,
      index,
      top: boundRect.top,
      width: boundRect.width,
      height: boundRect.height
    };
  },
  endDrag({ id, type, index }, monitor) {
    document.getElementById(id).style.opacity = 1;
    document.getElementById(id).style.height = "";
  }
};
