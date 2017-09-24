import { connect } from "react-redux";
import { setSectionData } from "../../../actions/builder";
import AnimationConfigPanel from "./animation-config-panel";

export default (id, name) => {
  function mapStateToProps(state) {
    return {
      id,
      name,
      ...state.getIn(["builder", "sections", id, "data", name]).toJS()
    };
  }
  return connect(mapStateToProps, { setSectionData })(AnimationConfigPanel);
};
