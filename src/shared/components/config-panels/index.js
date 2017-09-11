import { connect } from "react-redux";
import configPanelRoot from "./config-panel-root";
import { setSectionData } from "../../actions/builder";

function mapStateToProps(state) {
  return state.getIn(["builder", "activeSection"]).toJS();
}
export default connect(mapStateToProps, { setSectionData })(configPanelRoot);
export const ConfigPanelsManager = require("./config-panels-manager").default;
