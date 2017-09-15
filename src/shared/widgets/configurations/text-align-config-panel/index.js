import { connect } from "react-redux";
import { setSectionData } from "../../../actions/builder";
import TextAlignConfigPanel from "./text-align-config-panel";

export default (id, name) => {
  function mapStateToProps(state) {
    return {
      id,
      name,
      ...state.getIn(["builder", "sections", id, "data", name]).toJS()
    };
  }
  return connect(mapStateToProps, { setSectionData })(TextAlignConfigPanel);
};
