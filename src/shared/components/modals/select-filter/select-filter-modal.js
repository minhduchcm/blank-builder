import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./select-filter-modal.scss";

class SelectImageModal extends Component {
  static contextTypes = {
    hideModal: PropTypes.func.isRequired
  };
  constructor(props, context) {
    super(props, context);
    this.handleAddFilter = this.handleAddFilter.bind(this);
  }
  handleAddFilter(name) {
    this.context.hideModal();
  }
  render() {
    return (
      <ul className={style["container"]}>
        <li onClick={this.handleAddFilter}>
          <span>Filter 1</span>
        </li>
        <li onClick={this.handleAddFilter}>
          <span>Filter 2</span>
        </li>
        <li onClick={this.handleAddFilter}>
          <span>Filter 3</span>
        </li>
        <li onClick={this.handleAddFilter}>
          <span>Filter 4</span>
        </li>
        <li onClick={this.handleAddFilter}>
          <span>Filter 5</span>
        </li>
        <li onClick={this.handleAddFilter}>
          <span>Filter 6</span>
        </li>
        <li onClick={this.handleAddFilter}>
          <span>Filter 7</span>
        </li>
        <li onClick={this.handleAddFilter}>
          <span>Filter 8</span>
        </li>
      </ul>
    );
  }
}

export default SelectImageModal;
