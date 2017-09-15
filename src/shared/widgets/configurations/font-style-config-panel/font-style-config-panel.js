import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "./style.scss";

export default class FontStyleConfigPanel extends Component {
  static propTypes = {
    editorRef: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  };
  toogleInlineStyle(e, command) {
    e.stopPropagation();
    e.preventDefault();
    try {
      this.props.editorRef.handleKeyCommand(command);
    } catch (e) {}
  }
  render() {
    return (
      <ul className={style["container"]}>
        <li
          className={style["active"]}
          onMouseDown={e => {
            this.toogleInlineStyle(e, "bold");
          }}
        >
          <div className={"icon icon-bold"} />
        </li>
        <li
          className={style["active"]}
          onMouseDown={e => {
            this.toogleInlineStyle(e, "italic");
          }}
        >
          <div className={"icon icon-italic"} />
        </li>
        <li
          className={style["active"]}
          onMouseDown={e => {
            this.toogleInlineStyle(e, "underline");
          }}
        >
          <div className={"icon icon-underline"} />
        </li>
        <li>
          <div className={"icon icon-uppercase"} />
        </li>
        <li>
          <div className={"icon icon-titlecase"} />
        </li>
        <li>
          <div className={"icon icon-lowercase"} />
        </li>
      </ul>
    );
  }
}
