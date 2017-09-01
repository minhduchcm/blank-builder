export default {
  drop(props, monitor) {
    props.moveSection(props.index, monitor.getItem().index);
  }
};
