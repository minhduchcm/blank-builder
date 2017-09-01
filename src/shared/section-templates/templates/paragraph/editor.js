import React, { Component } from "react";
import PropTypes from "prop-types";
import Viewer from "./component";
import DraftJs from "../../../widgets/draftjs/editor";

import style from "./editor.scss";

class ComponentEditor extends Component {
  static propTypes = {
    setSectionData: PropTypes.func.isRequired
  };
  static contextTypes = {};
  constructor(props, context) {
    super(props, context);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }
  onTitleChange(data) {
    this.props.setSectionData({ title: { contentState: data } });
  }
  onContentChange(data) {
    this.props.setSectionData({ content: { contentState: data } });
  }
  getDraftJsStyle(props) {
    return {
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      textAlign: props.alignment
    };
  }
  render() {
    const { title, content } = this.props;

    return (
      <div className={"section paragraph"}>
        <h1 style={this.getDraftJsStyle(title)} className={style["editor"]}>
          <DraftJs onEditorChange={this.onTitleChange} {...title} />
        </h1>

        <div style={this.getDraftJsStyle(content)} className={style["editor"]}>
          <DraftJs onEditorChange={this.onContentChange} {...content} />
        </div>
      </div>
    );
  }
}

export default ComponentEditor;
