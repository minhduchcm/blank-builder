import React, { Component } from "react";
import PropTypes from "prop-types";
import { convertFromRaw } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { connect } from "react-redux";

class Paragraph extends Component {
  static propTypes = {};
  getDraftJsStyle(props) {
    return {
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      textAlign: props.alignment
    };
  }
  render() {
    const titleString = stateToHTML(
      convertFromRaw(this.props.data.title.contentState)
    );
    const contentString = stateToHTML(
      convertFromRaw(this.props.data.content.contentState)
    );
    return (
      <div className={"section paragraph"}>
        <h1
          dangerouslySetInnerHTML={{ __html: titleString }}
          style={this.getDraftJsStyle(this.props.data.title)}
        />
        <div
          dangerouslySetInnerHTML={{ __html: contentString }}
          style={this.getDraftJsStyle(this.props.data.content)}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownerProps) {
  return {
    ...state.getIn(["builder", "sections", ownerProps.index]).toJS()
  };
}
export default connect(mapStateToProps)(Paragraph);
