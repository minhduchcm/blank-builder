import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "./style.scss";

export default class TextAlignConfigPanel extends Component {
  static propTypes = {
    setSectionData: PropTypes.func.isRequired
  };
  constructor(props, context) {
    super(props, context);
  }
  updateSectionData(alignment) {
    const { id, name } = this.props;
    this.props.setSectionData(id, [name, "alignment"], alignment);
  }
  render() {
    const { alignment } = this.props;
    return (
      <ul className={style["container"]}>
        <li
          onClick={() => this.updateSectionData("left")}
          className={classnames({ [style["active"]]: alignment === "left" })}
        >
          <div className={"icon icon-align-left"} />
        </li>
        <li
          onClick={() => this.updateSectionData("center")}
          className={classnames({
            [style["active"]]: alignment === "center"
          })}
        >
          <div className={"icon icon-align-center"} />
        </li>
        <li
          onClick={() => this.updateSectionData("right")}
          className={classnames({ [style["active"]]: alignment === "right" })}
        >
          <div className={"icon icon-align-right"} />
        </li>
        <li
          onClick={() => this.updateSectionData("justify-l")}
          className={classnames({
            [style["active"]]: alignment === "justify-l"
          })}
        >
          <div className={"icon icon-justify-left"} />
        </li>
        <li
          onClick={() => this.updateSectionData("justify-c")}
          className={classnames({
            [style["active"]]: alignment === "justify-c"
          })}
        >
          <div className={"icon icon-justify-center"} />
        </li>
        <li
          onClick={() => this.updateSectionData("justify-r")}
          className={classnames({
            [style["active"]]: alignment === "justify-r"
          })}
        >
          <div className={"icon icon-justify-right"} />
        </li>
      </ul>
    );
  }
}
