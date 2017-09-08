import { connect } from "react-redux";
import configPanelRoot from "./config-panel-root";

function mapStateToProps(state) {
  return state.getIn(["builder", "activeSection"]).toJS();
}
export default connect(mapStateToProps)(configPanelRoot);
export const ConfigPanelsManager = require("./config-panels-manager").default;
