import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import createConfigPanels from "./config-panels";
import ImagePicker from "../../../widgets/image-picker/editor";

class ComponentEditor extends Component {
  static propTypes = {};
  static contextTypes = {
    configPanelsManager: PropTypes.object.isRequired,
    activeSection: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.context.configPanelsManager.register(
      this.props.id + "main",
      createConfigPanels(this.props.id, { name: "main" })
    );
  }

  render() {
    return (
      <div
        className={classnames("section image-block", {
          ["sizing-" + this.props.main.sizing]:
            this.props.main.sizing !== "original"
        })}
        onClick={e => {
          e.stopPropagation();
          this.props.selectSection(this.props.id, "main");
        }}
      >
        <ImagePicker img={this.props.main.img} />
      </div>
    );
  }
}

export default ComponentEditor;
