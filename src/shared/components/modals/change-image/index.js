import ChangeImageModal from "./change-image";

export default {
  type: require("../../../const").modalTypes.CHANGE_IMAGE,
  title: "Change Image",
  size: "small",
  description: "Choose image from your computer or from gallery",
  component: ChangeImageModal
};
