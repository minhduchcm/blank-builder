import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { modalTypes } from "../../../const";
import style from "./style.scss";

export default class TextAlignConfigPanel extends Component {
  constructor(props, context) {
    super(props, context);
  }
  static contextTypes = {
    showModal: PropTypes.func.isRequired
  };
  render() {
    const { img } = this.props;
    return (
      <div className={style["container"]}>
        <button onClick={e => this.context.showModal(modalTypes.CHANGE_IMAGE)}>
          Change Image
        </button>
      </div>
    );
  }
}
