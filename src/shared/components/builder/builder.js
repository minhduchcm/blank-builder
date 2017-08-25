import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./builder.scss";

import ViewportWrapper from "../viewport-wrapper";
import Row from "../row";
import { modalTypes } from "../../const";

class Builder extends Component {
  static propTypes = {
    addRow: PropTypes.func.isRequired,
    moveRow: PropTypes.func.isRequired,
    rows: PropTypes.array.isRequired
  };
  static contextTypes = {
    showModal: PropTypes.func.isRequired
  };
  render() {
    const rows = this.props.rows.map((row, index) =>
      <Row key={index} index={index} moveRow={this.props.moveRow} {...row} />
    );
    return (
      <ViewportWrapper>
        <div className={style["builder"]}>
          <p>
            <button onClick={this.props.addRow}>add row</button>
          </p>
          <p>
            <button
              onClick={() => this.context.showModal(modalTypes.EMPTY_MODAL)}
            >
              show modal
            </button>
          </p>
          {rows}
        </div>
      </ViewportWrapper>
    );
  }
}

export default Builder;
