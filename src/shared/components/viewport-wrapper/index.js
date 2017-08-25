import { connect } from "react-redux";
import ViewportWrapper from "./viewport-wrapper";

function mapStateToProps(state) {
  return { ...state.get("viewport").toJS() };
}
export default connect(mapStateToProps)(ViewportWrapper);
