import { connect } from "react-redux";
import AddSectionModal from "./add-section-modal";
import { addSection } from "../../../actions/builder";

function mapStateToProps(state) {
  return {};
}
export default {
  type: require("../../../const").modalTypes.ADD_SECTION_MODAL,
  title: "ADD CONTENT",
  description: "Choose a content type to add to your page.",
  component: connect(mapStateToProps, { addSection })(AddSectionModal)
};
