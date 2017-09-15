import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./style.scss";

export default class FontTypeConfigPanel extends Component {
  static propTypes = {};
  setFontType = (e, fontType) => {
    e.stopPropagation();
    e.preventDefault();
    this.props.setSectionData(this.props.id, {
      [this.props.name]: { fontType: fontType }
    });
  };
  render() {
    return (
      <ul className={style["container"]}>
        <li
          onMouseDown={e => this.setFontType(e, "big-heading")}
          className={classnames({
            [style["active"]]: this.props.fontType === "big-heading"
          })}
        >
          BIG HEADING
        </li>
        <li
          onMouseDown={e => this.setFontType(e, "heading")}
          className={classnames({
            [style["active"]]: this.props.fontType === "heading"
          })}
        >
          HEADING
        </li>
        <li
          onMouseDown={e => this.setFontType(e, "text")}
          className={classnames({
            [style["active"]]: this.props.fontType === "text"
          })}
        >
          Text
        </li>
        <li
          onMouseDown={e => this.setFontType(e, "quote")}
          className={classnames({
            [style["active"]]: this.props.fontType === "quote"
          })}
        >
          Quote
        </li>
      </ul>
    );
  }
}
