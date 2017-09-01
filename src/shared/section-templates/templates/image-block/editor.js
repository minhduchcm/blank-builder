import React, { Component } from "react";
import PropTypes from "prop-types";
import ImagePicker from "../../../widgets/image-picker/editor";

class ComponentEditor extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired
  };
  static contextTypes = {};
  render() {
    return (
      <div className={"section image-block"}>
        <ImagePicker img={this.props.img} />
      </div>
    );
  }
}

export default ComponentEditor;
