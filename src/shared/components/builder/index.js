import { connect } from "react-redux";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Builder from "./builder";
import { addRow, moveRow } from "../../actions/builder";

function mapStateToProps(state) {
  return {
    rows: state.getIn(["builder", "rows"]).toJS()
  };
}

export default connect(mapStateToProps, { addRow, moveRow })(
  DragDropContext(HTML5Backend)(Builder)
);
