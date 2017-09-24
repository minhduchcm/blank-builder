import { connect } from "react-redux";
import ConfigPanelRoot from "./config-panel-root";
import { setSectionData } from "../../../actions/builder";
import { changeDock } from "../../../actions/config-panel";

function mapStateToProps(state) {
  return {
    ...state.getIn(["builder", "activeSection"]).toJS(),
    dock: state.getIn(["configPanel"])
  };
}
export default connect(mapStateToProps, { setSectionData, changeDock })(
  ConfigPanelRoot
);
