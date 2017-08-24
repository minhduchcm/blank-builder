import { connect } from "react-redux";
import TopNav from "./top-nav";
import { toogle } from "../../actions/top-nav";

function mapStateToProps(state) {
  return state.get("topNav").toJS();
}
export default connect(mapStateToProps, { toogle })(TopNav);
