import React, { Component } from "react";
import PropTypes from "prop-types";
import Viewer from "./component";
import DraftJs from "../../../widgets/draftjs/editor";

import style from "./editor.scss";

class ComponentEditor extends Component {
  constructor(props, context) {
    super(props, context);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }
  onTitleChange(data) {
    this.props.setWidgetAttribute({
      title: { contentState: data }
    });
  }
  onContentChange(data) {
    this.props.setWidgetAttribute({ content: { contentState: data } });
  }
  render() {
    const { title, content } = this.props;
    const { globalStyle } = this.context;

    return (
      <div className={globalStyle(["single-text-block"])}>
        <h1>
          <DraftJs
            className={style["editor"]}
            onEditorChange={this.onTitleChange}
            {...title}
          />
        </h1>
        <DraftJs
          className={style["editor"]}
          onEditorChange={this.onContentChange}
          {...content}
        />
      </div>
    );
  }
}

ComponentEditor.propTypes = {
  setWidgetAttribute: PropTypes.func.isRequired
};
ComponentEditor.contextTypes = {
  globalStyle: PropTypes.func.isRequired
};

export default ComponentEditor;
