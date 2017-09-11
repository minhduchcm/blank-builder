import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import style from "./config-panel.scss";

export default function createConfigPanels(index, childWidget, data, ref) {
  function mapStateToProps(state) {
    return state
      .getIn(["builder", "sections", index, "data", childWidget])
      .toJS();
  }
  return [
    {
      index: 0,
      icon: "type",
      title: "FONT TYPE",
      panel: connect(mapStateToProps)(props =>
        <ul className={style["font-type-panel"]}>
          <li onClick={() => props.demo(ref.state)}>BIG HEADING</li>
          <li>HEADING</li>
          <li>Text</li>
          <li>Quote</li>
        </ul>
      )
    },
    {
      index: 1,
      title: "FONT STYLE",
      icon: "stype",
      panel: props =>
        <ul className={style["font-style-panel"]}>
          <li>
            <div className={"icon icon-bold"} />
          </li>
          <li>
            <div className={"icon icon-italic"} />
          </li>
          <li>
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
    },
    {
      index: 2,
      title: "FONT ALIGN",
      icon: "align-left",
      panel: connect(mapStateToProps)(({ alignment, setSectionData }) => {
        return (
          <ul className={style["font-align-panel"]}>
            <li
              onClick={() =>
                setSectionData(index, {
                  [childWidget]: {
                    alignment: "left"
                  }
                })}
              className={classnames({
                [style["active"]]: alignment === "left"
              })}
            >
              <div className={"icon icon-align-left"} />
            </li>
            <li
              onClick={() =>
                setSectionData(index, {
                  [childWidget]: {
                    alignment: "center"
                  }
                })}
              className={classnames({
                [style["active"]]: alignment === "center"
              })}
            >
              <div className={"icon icon-align-center"} />
            </li>
            <li
              className={classnames({
                [style["active"]]: alignment === "right"
              })}
            >
              <div className={"icon icon-align-right"} />
            </li>
            <li
              className={classnames({
                [style["active"]]: alignment === "justify"
              })}
            >
              <div className={"icon icon-justify-left"} />
            </li>
            <li
              className={classnames({
                [style["active"]]: alignment === "justify-center"
              })}
            >
              <div className={"icon icon-justify-center"} />
            </li>
            <li
              className={classnames({
                [style["active"]]: alignment === "justify-right"
              })}
            >
              <div className={"icon icon-justify-right"} />
            </li>
          </ul>
        );
      })
    },
    {
      index: 3,
      title: "ANIMATION",
      icon: "animation",
      panel: props => <div className={style["animation-panel"]} />
    },
    {
      index: 4,
      title: "LINK TO",
      icon: "link-to",
      panel: props => <div className={style["link-to-panel"]} />
    }
  ];
}
