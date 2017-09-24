import { connect } from "react-redux";
import { setSectionData } from "../../../actions/builder";
import SizingConfigPanel from "./sizing-config-panel";

export default (id, name) => {
  function mapStateToProps(state) {
    return {
      id,
      name,
      ...state.getIn(["builder", "sections", id, "data", name]).toJS()
    };
  }
  return connect(mapStateToProps, { setSectionData })(SizingConfigPanel);
};
