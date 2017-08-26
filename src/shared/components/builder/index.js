import { connect } from "react-redux";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Builder from "./builder";
import { addSection, moveSection } from "../../actions/builder";

function mapStateToProps(state) {
  return { sections: state.getIn(["builder", "sections"]).toJS() };
}

export default connect(mapStateToProps, { addSection, moveSection })(
  DragDropContext(HTML5Backend)(Builder)
);
