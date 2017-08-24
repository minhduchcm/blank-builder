import { DragSource, DropTarget } from "react-dnd";
import { DragItemTypes } from "../../const";
import Row from "./row";
import rowSource from "./rowSource";
import rowTarget from "./rowTarget";

export default DropTarget(DragItemTypes.ROW, rowTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(
  DragSource(DragItemTypes.ROW, rowSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))(Row)
);
