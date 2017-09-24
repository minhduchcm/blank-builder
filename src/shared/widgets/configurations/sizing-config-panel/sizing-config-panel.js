import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "./sizing-config-panel.scss";

export default class SizingConfigPanel extends Component {
  static propTypes = {
    setSectionData: PropTypes.func.isRequired
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
    const { sizing } = this.props;
    return (
      <div className={style["container"]}>
        <ul className={style["type-select"]}>
          <li
            onMouseDown={e => this.setType(e, "4-3")}
            className={classnames({ [style["active"]]: sizing === "4-3" })}
          >
            <a>4:3</a>
          </li>
          <li
            onMouseDown={e => this.setType(e, "3-4")}
            className={classnames({ [style["active"]]: sizing === "3-4" })}
          >
            <a>3:4</a>
          </li>
          <li
            onMouseDown={e => this.setType(e, "1-1")}
            className={classnames({ [style["active"]]: sizing === "1-1" })}
          >
            <a>1:1</a>
          </li>
          <li
            onMouseDown={e => this.setType(e, "16-9")}
            className={classnames({ [style["active"]]: sizing === "16-9" })}
          >
            <a>16:9</a>
          </li>
          <li
            onMouseDown={e => this.setType(e, "original")}
            className={classnames({ [style["active"]]: sizing === "original" })}
          >
            <a>Original</a>
          </li>
        </ul>
      </div>
    );
  }
}
