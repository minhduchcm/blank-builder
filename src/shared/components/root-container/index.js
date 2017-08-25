import { connect } from "react-redux";
import RootContainer from "./root-container";
import { showModal, hideModal } from "../../actions/modals";

export default connect(() => ({}), { showModal, hideModal })(RootContainer);
