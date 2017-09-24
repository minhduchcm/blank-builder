import React, { Component } from "react";
import PropTypes from "prop-types";
import { modalTypes } from "../../const";

import style from "./image-picker.scss";

class ImagePicker extends Component {
  render() {
    const { showModal } = this.context;
    return (
      <div className={style["img-picker"]}>
        <img src={this.props.img} />
        {/* <div className={style["btn-change-backprop"]}>
          <button
            className={style["btn-change"]}
            onClick={() => showModal(modalTypes.SELECT_IMAGE, {})}
          >
            Change Image
          </button>
        </div> */}
      </div>
    );
  }
}

ImagePicker.propTypes = {
  onSelect: PropTypes.func,
  img: PropTypes.string.isRequired
};

ImagePicker.contextTypes = {
  showModal: PropTypes.func.isRequired
};

export default ImagePicker;
