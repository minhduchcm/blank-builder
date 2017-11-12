import React, { Component } from 'react';
import {
  Editor as DraftJSEditor,
  EditorState,
  SelectionState,
  convertFromRaw,
  convertToRaw,
  RichUtils
} from 'draft-js';

import './draftjs.scss';

class Editor extends Component {
  static propTypes = {};
  constructor(props, context) {
    super(props, context);
    this.state = {
      editorState: this.createEditorState(props)
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleDrop = () => {
    return 'handled';
  };

  handleKeyCommand = command => {
    var { editorState } = this.state;

    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.handleContentChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  handleContentChange = editorState => {
    const currentContent = this.state.editorState.getCurrentContent();
    const newContent = editorState.getCurrentContent();
    this.selection = editorState.getSelection();
    if (currentContent !== newContent) {
      this.props.updateWidgets({
        dataPath: ['content'],
        value: convertToRaw(editorState.getCurrentContent())
      });
    }
    if (!this.selection.getHasFocus()) {
      this.selection = SelectionState.createEmpty();
      editorState = EditorState.acceptSelection(editorState, this.selection);
    }
    this.setState({ editorState });
  };

  createEditorState = (props, selection) => {
    let editorState = EditorState.createWithContent(
      convertFromRaw(props.content)
    );
    return EditorState.acceptSelection(
      editorState,
      selection || SelectionState.createEmpty()
    );
  };

  componentWillReceiveProps = nextProps => {
    let content = convertFromRaw(nextProps.content);
    this.setState({
      editorState: EditorState.acceptSelection(
        EditorState.push(this.state.editorState, content),
        this.selection || SelectionState.createEmpty()
      )
    });
  };

  widgetFocus = () => {
    const content = this.state.editorState.getCurrentContent();
    const block = content.getLastBlock();
    const key = block.getKey();
    const len = block.getCharacterList().size;
    let selection = this.state.editorState.getSelection();
    selection = selection.withMutations(s => {
      s.set('anchorKey', key);
      s.set('anchorOffset', len);
      s.set('focusKey', key);
      s.set('focusOffset', len);
      s.set('hasFocus', true);
      return s;
    });
    const editorState = EditorState.forceSelection(
      this.state.editorState,
      selection
    );
    this.setState({ editorState });
    this.registerConfigPanel();
  };

  registerConfigPanel = () => {
    this.props.setConfigPanel([]);
  };
  render() {
    return (
      <div
        onClick={e => {
          this.registerConfigPanel();
          e.stopPropagation();
        }}
      >
        <DraftJSEditor
          ref="editor"
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          editorState={this.state.editorState}
          onChange={this.handleContentChange}
          handleKeyCommand={this.handleKeyCommand}
          handleDrop={this.handleDrop}
        />
      </div>
    );
  }
}
export { Editor };
