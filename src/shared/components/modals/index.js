import { connect } from "react-redux";
import ModalRoot from "./modal-root";
import { hideModal } from "../../actions/modals";

function mapStateToProps(state) {
  return state.get("modals").toJS();
}

export default connect(mapStateToProps, { hideModal })(ModalRoot);
