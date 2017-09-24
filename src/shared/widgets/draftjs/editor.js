import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Editor,
  EditorState,
  SelectionState,
  convertFromRaw,
  convertToRaw,
  RichUtils
} from "draft-js";

import Viewer from "./viewer";

class DraftJsEditor extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editorState: this.createEditorState(props)
    };

    this.handleEditorChange = this.handleEditorChange.bind(this);
    // this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
  handleDrop(...props) {
    return "handled";
  }
  handleKeyCommand = command => {
    var selectionState = this.state.editorState.getSelection();
    var start = selectionState.getStartOffset();
    var end = selectionState.getEndOffset();
    var { editorState } = this.state;
    if (start === end) {
      return "handled";
    }
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.handleEditorChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  handleEditorChange(editorState) {
    const currentContent = this.state.editorState.getCurrentContent();
    const newContent = editorState.getCurrentContent();
    this.selection = editorState.getSelection();
    if (currentContent !== newContent) {
      this.props.onEditorChange(convertToRaw(editorState.getCurrentContent()));
    }
    if (!this.selection.getHasFocus()) {
      this.selection = SelectionState.createEmpty();
      editorState = EditorState.acceptSelection(editorState, this.selection);
    }
    this.setState({ editorState });
  }

  createEditorState(props, selection) {
    let editorState = EditorState.createWithContent(
      convertFromRaw(props.contentState)
    );
    return EditorState.acceptSelection(
      editorState,
      selection || SelectionState.createEmpty()
    );
  }

  componentWillReceiveProps(nextProps) {
    let contentState = convertFromRaw(nextProps.contentState);
    this.setState({
      editorState: EditorState.acceptSelection(
        EditorState.push(this.state.editorState, contentState),
        this.selection || SelectionState.createEmpty()
      )
    });
  }

  render() {
    var animation = "";
    var inlineStyle = {};
    if (this.props.animation.event !== "none") {
      const { event, type, duration, delay } = this.props.animation;
      animation = ` ${event}-${type}`;
      inlineStyle.transitionDuration = duration + "ms";
      inlineStyle.transitionDelay = delay + "ms";
    }
    return (
      <div
        className={this.props.className || "" + animation}
        style={inlineStyle}
      >
        <Editor
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          editorState={this.state.editorState}
          onChange={this.handleEditorChange}
          handleKeyCommand={this.handleKeyCommand}
          handleDrop={this.handleDrop}
        />
      </div>
    );
  }
}

DraftJsEditor.propTypes = {
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onEditorChange: PropTypes.func,
  contentState: PropTypes.object.isRequired
};

export default DraftJsEditor;
