import { DragSource, DropTarget } from "react-dnd";
import { dragItemTypes } from "../../const";
import Row from "./row";
import rowSource from "./rowSource";
import rowTarget from "./rowTarget";

export default DropTarget(dragItemTypes.ROW, rowTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(
  DragSource(dragItemTypes.ROW, rowSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }))(Row)
);

export const SectionTemplatesManager = require("./section-templates-manager")
  .default;
