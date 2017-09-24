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
  updateSectionData(e, alignment) {
    e.stopPropagation();
    e.preventDefault();
    const { id, name } = this.props;
    this.props.setSectionData(id, [name, "alignment"], alignment);
  }
  render() {
    const { alignment } = this.props;
    return (
      <ul className={style["container"]}>
        <li
          onMouseDown={e => this.updateSectionData(e, "left")}
          className={classnames({ [style["active"]]: alignment === "left" })}
        >
          <div className={"icon icon-align-left"} />
        </li>
        <li
          onMouseDown={e => this.updateSectionData(e, "center")}
          className={classnames({
            [style["active"]]: alignment === "center"
          })}
        >
          <div className={"icon icon-align-center"} />
        </li>
        <li
          onMouseDown={e => this.updateSectionData(e, "right")}
          className={classnames({ [style["active"]]: alignment === "right" })}
        >
          <div className={"icon icon-align-right"} />
        </li>
        <li
          onMouseDown={e => this.updateSectionData(e, "justify-l")}
          className={classnames({
            [style["active"]]: alignment === "justify-l"
          })}
        >
          <div className={"icon icon-justify-left"} />
        </li>
        <li
          onMouseDown={e => this.updateSectionData(e, "justify-c")}
          className={classnames({
            [style["active"]]: alignment === "justify-c"
          })}
        >
          <div className={"icon icon-justify-center"} />
        </li>
        <li
          onMouseDown={e => this.updateSectionData(e, "justify-r")}
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
