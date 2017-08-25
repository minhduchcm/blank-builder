import { connect } from "react-redux";
import TopNav from "./top-nav";
import { toogle, changeViewport } from "../../actions/top-nav";

function mapStateToProps(state) {
  return { ...state.get("topNav").toJS(), ...state.get("viewport").toJS() };
}
export default connect(mapStateToProps, { toogle, changeViewport })(TopNav);
