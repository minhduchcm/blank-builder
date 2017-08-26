import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { modalTypes } from "../../const";
import style from "./add-widget-button.scss";

const AddWidgetButton = ({ index }, { showModal }) => {
  return (
    <button
      onClick={() =>
        showModal(modalTypes.ADD_SECTION_MODAL, {
          sectionIndex: index
        })}
      className={style["add-widget-button"]}
    >
      <div className={"icon icon-section"} />ADD CONTENT
    </button>
  );
};
AddWidgetButton.propTypes = {
  index: PropTypes.number
};

AddWidgetButton.defaultProps = {
  index: 0
};

AddWidgetButton.contextTypes = {
  showModal: PropTypes.func.isRequired
};
export default AddWidgetButton;
