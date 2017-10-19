export default {
  beginDrag(row, monitor, component) {
    return row;
  },
  endDrag(row, monitor) {
    console.log(monitor.didDrop());
    if (monitor.didDrop()) {
      row.moveRow();
    }
    row.setPreview(-1);
  }
};
