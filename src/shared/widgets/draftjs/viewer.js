import React, { Component } from "react";
import PropTypes from "prop-types";
import { convertFromRaw } from "draft-js";
import { Parser } from "html-to-react";

class DraftJS extends Component {
  render() {
    const { contentState } = this.props;
    return stateToHTML(convertFromRaw(contentState));
  }
}

DraftJS.propTypes = {
  contentState: PropTypes.object.isRequired
};
export default DraftJS;
