import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./image-picker.scss";

class ImagePicker extends Component {
  render() {
    const { modalsManager } = this.context;
    return (
      <div className={style["img-picker"]}>
        <img src={this.props.img} />
        <div className={style["btn-change-backprop"]}>
          <button
            className={style["btn-change"]}
            onClick={() => modalsManager.showModal("@MODAL/UPLOAD_IMAGE", {})}
          >
            Change Image
          </button>
        </div>
      </div>
    );
  }
}

ImagePicker.propTypes = {
  onSelect: PropTypes.func,
  img: PropTypes.string.isRequired
};

ImagePicker.contextTypes = {
  modalsManager: PropTypes.object.isRequired
};

export default ImagePicker;
