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
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.handleEditorChange(newState);
      return "handled";
    }
    return "not-handled";
  }

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
    let contentState = EditorState.createWithContent(
      convertFromRaw(props.contentState)
    );
    return EditorState.acceptSelection(
      contentState,
      selection || SelectionState.createEmpty()
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      editorState: this.createEditorState(nextProps, this.selection)
    });
  }

  render() {
    return (
      <div
        className={this.props.className}
        style={{
          fontFamily: this.props.fontFamily,
          fontSize: this.props.fontSize,
          textAlign: this.props.alignment
        }}
      >
        <Editor
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          editorState={this.state.editorState}
          onChange={this.handleEditorChange}
          handleKeyCommand={this.handleKeyCommand}
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
