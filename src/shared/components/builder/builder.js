import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./builder.scss";
import Row from "../row";

class Builder extends Component {
  static propTypes = {
    addRow: PropTypes.func.isRequired,
    moveRow: PropTypes.func.isRequired,
    rows: PropTypes.array.isRequired
  };

  render() {
    const rows = this.props.rows.map((row, index) =>
      <Row key={index} index={index} moveRow={this.props.moveRow} {...row} />
    );
    return (
      <div className={style["builder"]}>
        <button onClick={this.props.addRow}>add row</button>
        {rows}
      </div>
    );
  }
}

export default Builder;
