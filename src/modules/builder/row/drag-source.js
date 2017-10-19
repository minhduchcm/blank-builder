export default {
  beginDrag(row, monitor, component) {
    return row;
  },
  endDrag(row, monitor) {
    if (monitor.didDrop()) {
      row.moveRow();
    }
    row.setPreview(-1);
  }
};
