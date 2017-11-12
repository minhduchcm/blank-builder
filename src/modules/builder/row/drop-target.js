import { findDOMNode } from 'react-dom';
var lastHoverIndex = null;
var lastPreviewIndex = -1;

var hoverRowClientRect = null;
var hoverRowClientRectMiddle = 0;
export default {
  drop(hoverRow, monitor, target) {
    hoverRowClientRect = null;
  },
  hover(hoverRow, monitor, target) {
    const dragingRow = monitor.getItem();
    if (hoverRow.index !== dragingRow.index) {
      if (hoverRow.index !== lastHoverIndex || hoverRowClientRect === null) {
        lastHoverIndex = hoverRow.index;
        hoverRowClientRect = findDOMNode(target).getClientRects()[0];
        if (hoverRowClientRect.y < 0) hoverRowClientRect.y = 0;
        hoverRowClientRectMiddle =
          hoverRowClientRect.y + hoverRowClientRect.height / 2;
      }
      const initialOffset = monitor.getInitialSourceClientOffset();
      const offset = monitor.getDifferenceFromInitialOffset();
      const Y = initialOffset.y + offset.y;
      var newPreviewIndex = hoverRow.index;
      if (Y > hoverRowClientRectMiddle) newPreviewIndex = hoverRow.index + 1;

      if (newPreviewIndex !== lastPreviewIndex) {
        if (
          newPreviewIndex !== dragingRow.index &&
          newPreviewIndex !== dragingRow.index + 1
        ) {
          hoverRow.setPreview(newPreviewIndex);
        } else {
          hoverRow.setPreview(-1);
        }
        lastPreviewIndex = newPreviewIndex;
      }
    } else {
      if (lastPreviewIndex !== dragingRow.index) {
        hoverRow.setPreview(-1);
        lastPreviewIndex = dragingRow.index;
      }
    }
  }
};
