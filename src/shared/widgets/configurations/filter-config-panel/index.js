import { connect } from "react-redux";
import { setSectionData } from "../../../actions/builder";
import FilterConfigPanel from "./filter-config-panel";

export default (id, name) => {
  function mapStateToProps(state) {
    return {
      id,
      name,
      ...state.getIn(["builder", "sections", id, "data", name]).toJS()
    };
  }
  return connect(mapStateToProps, { setSectionData })(FilterConfigPanel);
};
