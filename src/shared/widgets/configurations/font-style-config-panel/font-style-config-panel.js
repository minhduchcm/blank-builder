import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "./font-style-config-panel.scss";

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
    e.stopPropagation();
    e.preventDefault();
    this.props.setSectionData(
      this.props.id,
      [this.props.name, "fontStyle"],
      this.props.fontStyle === style ? "none" : style
    );
  };
  render() {
    let isBold = false;
    let isItalic = false;
    let isUnderline = false;
    try {
      var inlineStyles = this.props.editorRef.state.editorState
        .getCurrentInlineStyle()
        .toJS();
      isBold = inlineStyles.indexOf("BOLD") > -1;
      isItalic = inlineStyles.indexOf("ITALIC") > -1;
      isUnderline = inlineStyles.indexOf("UNDERLINE") > -1;
    } catch (error) {}
    return (
      <ul className={style["container"]}>
        <li
          onMouseDown={e => {
            this.toogleInlineStyle(e, "bold");
          }}
          className={classnames({
            [style["active"]]: isBold
          })}
        >
          <div className={"icon icon-bold"} />
        </li>
        <li
          onMouseDown={e => {
            this.toogleInlineStyle(e, "italic");
          }}
          className={classnames({
            [style["active"]]: isItalic
          })}
        >
          <div className={"icon icon-italic"} />
        </li>
        <li
          onMouseDown={e => {
            this.toogleInlineStyle(e, "underline");
          }}
          className={classnames({
            [style["active"]]: isUnderline
          })}
        >
          <div className={"icon icon-underline"} />
        </li>
        <li
          onMouseDown={e => this.setFontStyle(e, "uppercase")}
          className={classnames({
            [style["active"]]: this.props.fontStyle === "uppercase"
          })}
        >
          <div className={"icon icon-uppercase"} />
        </li>
        <li
          onMouseDown={e => this.setFontStyle(e, "titlecase")}
          className={classnames({
            [style["active"]]: this.props.fontStyle === "titlecase"
          })}
        >
          <div className={"icon icon-titlecase"} />
        </li>
        <li
          onMouseDown={e => this.setFontStyle(e, "lowercase")}
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
