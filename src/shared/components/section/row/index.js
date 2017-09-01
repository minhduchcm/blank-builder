import { DragSource } from "react-dnd";
import { dragItemTypes } from "../../../const";
import Row from "./row";
import dragSource from "./drag-source";

export default DragSource(
  dragItemTypes.SECTION,
  dragSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  })
)(Row);
