import React, { Component } from "react";
import PropTypes from "prop-types";
import ImagePicker from "../../../widgets/image-picker/editor";

class Editor extends Component {
  render() {
    const { globalStyle } = this.context;
    return (
      <div className={globalStyle(["fullwidth-image"])}>
        <ImagePicker img={this.props.img} />
      </div>
    );
  }
}

Editor.propTypes = {
  img: PropTypes.string.isRequired
};
Editor.contextTypes = {
  globalStyle: PropTypes.func.isRequired
};

export default Editor;
