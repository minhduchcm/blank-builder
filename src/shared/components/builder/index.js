import { connect } from "react-redux";
import { DragDropContext, DropTarget } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Builder from "./builder";
import dropTarget from "./drop-target";
import { dragItemTypes } from "../../const";
import values from "lodash/values";
import {
  addSection,
  moveSection,
  setSectionData,
  deleteSection,
  selectSection
} from "../../actions/builder";

function mapStateToProps(state) {
  let sections = values(state.getIn(["builder", "sections"]).toJS()).sort(
    (a, b) => a.index > b.index
  );
  return {
    nbSections: sections.length,
    sections: sections,
    activeSection: state.getIn(["builder", "activeSection"]).toJS()
  };
}

export default connect(mapStateToProps, {
  addSection,
  moveSection,
  setSectionData,
  deleteSection,
  selectSection
})(
  DragDropContext(HTML5Backend)(
    DropTarget(
      dragItemTypes.SECTION,
      dropTarget,
      (connectDragSource, monitor) => ({
        connectDropTarget: connectDragSource.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        item: monitor.getItem()
      })
    )(Builder)
  )
);
