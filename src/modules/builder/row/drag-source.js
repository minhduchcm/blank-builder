export default {
  beginDrag(row, monitor, component) {
    if (component.props.onBeginDrag) component.props.onBeginDrag();
    return row;
  },
  endDrag(rowProps, monitor) {
    if (rowProps.onEndDrag) rowProps.onEndDrag(monitor.didDrop());
    rowProps.setPreview(-1);
  }
};
