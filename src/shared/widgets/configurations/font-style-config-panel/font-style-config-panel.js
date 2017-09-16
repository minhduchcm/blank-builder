import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "./style.scss";

export default class FontStyleConfigPanel extends Component {
  static propTypes = {
    editorRef: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired
  };
  toogleInlineStyle = (e, command) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      this.props.editorRef.handleKeyCommand(command);
    } catch (e) {}
  };
  setFontStyle = (e, style) => {
    this.props.setSectionData(
      this.props.id,
      [this.props.name, "fontStyle"],
      this.props.fontStyle === style ? "none" : style
    );
  };
  render() {
    return (
      <ul className={style["container"]}>
        <li
          onMouseDown={e => {
            this.toogleInlineStyle(e, "bold");
          }}
        >
          <div className={"icon icon-bold"} />
        </li>
        <li
          onMouseDown={e => {
            this.toogleInlineStyle(e, "italic");
          }}
        >
          <div className={"icon icon-italic"} />
        </li>
        <li
          onMouseDown={e => {
            this.toogleInlineStyle(e, "underline");
          }}
        >
          <div className={"icon icon-underline"} />
        </li>
        <li
          onClick={e => this.setFontStyle(e, "uppercase")}
          className={classnames({
            [style["active"]]: this.props.fontStyle === "uppercase"
          })}
        >
          <div className={"icon icon-uppercase"} />
        </li>
        <li
          onClick={e => this.setFontStyle(e, "titlecase")}
          className={classnames({
            [style["active"]]: this.props.fontStyle === "titlecase"
          })}
        >
          <div className={"icon icon-titlecase"} />
        </li>
        <li
          onClick={e => this.setFontStyle(e, "lowercase")}
          className={classnames({
            [style["active"]]: this.props.fontStyle === "lowercase"
          })}
        >
          <div className={"icon icon-lowercase"} />
        </li>
      </ul>
    );
  }
}
