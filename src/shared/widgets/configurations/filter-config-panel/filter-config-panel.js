import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { modalTypes } from "../../../const";
import style from "./filter-config-panel.scss";

export default class SizingConfigPanel extends Component {
  static propTypes = {
    setSectionData: PropTypes.func.isRequired
  };
  static contextTypes = {
    showModal: PropTypes.func.isRequired
  };
  constructor(props, context) {
    super(props, context);
    this.setType = this.setType.bind(this);
  }
  setType(e, type) {
    e.stopPropagation();
    e.preventDefault();
    this.props.setSectionData(this.props.id, [this.props.name, "sizing"], type);
  }
  render() {
    const { filter } = this.props;
    if (filter.name === "")
      return (
        <div className={style["container"]}>
          <div
            className={style["add-filter-button"]}
            onClick={() =>
              this.context.showModal(modalTypes.SELECT_FILTER_MODAL, {
                updatePath: [this.props.name, "filter"]
              })}
          >
            <div className={style["button"]}>
              <div className="icon icon-add">+</div>
            </div>
          </div>
          <h2>Pick a color filter</h2>
        </div>
      );
    return (
      <div className={style["container"]}>
        <div className="add-filter-button">
          <div className="button">
            <div className="icon icon-add">+</div>
          </div>
          <h2>Pick a color filter</h2>
        </div>
      </div>
    );
  }
}
