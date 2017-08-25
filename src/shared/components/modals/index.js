import { connect } from "react-redux";
import ModalRoot from "./modal-root";
import { hideModal, closeModal } from "../../actions/modals";

function mapStateToProps(state) {
  return {
    modals: state.get("modals").toJS()
  };
}

export default connect(mapStateToProps, { hideModal, closeModal })(ModalRoot);
export const ModalsManager = require("./modals-manager").default;
