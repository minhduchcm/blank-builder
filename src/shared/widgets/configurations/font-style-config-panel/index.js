import { connect } from "react-redux";
import { setSectionData } from "../../../actions/builder";
import FontStyleConfigPanel from "./font-style-config-panel";

export default (id, name, ref) => {
  function mapStateToProps(state) {
    return {
      id,
      name,
      editorRef: ref,
      ...state.getIn(["builder", "sections", id, "data", name]).toJS()
    };
  }
  return connect(mapStateToProps, { setSectionData })(FontStyleConfigPanel);
};
