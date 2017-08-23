import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { inc } from "../actions/counter";

@connect(
  state => {
    return state.get("counter").toJS();
  },
  { inc }
)
class RootContainer extends Component {
  static propTypes = {};
  componentDidMount() {
    setInterval(this.props.inc, 1000);
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props)}
      </div>
    );
  }
}
export default RootContainer;
