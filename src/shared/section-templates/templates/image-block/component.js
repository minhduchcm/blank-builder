import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ImageBlock extends Component {
  static propTypes = {};
  render() {
    return (
      <div className={"section image-block"}>
        <img src={this.props.data.img} />
      </div>
    );
  }
}

function mapStateToProps(state, ownerProps) {
  return {
    ...state.getIn(["builder", "sections", ownerProps.index]).toJS()
  };
}
export default connect(mapStateToProps)(ImageBlock);
