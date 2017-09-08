import React from "react";

export default function createConfigPanels(data, ref) {
  return [
    {
      index: 0,
      icon: "type",
      title: "FONT TYPE",
      panel: props =>
        <ul>
          <li onClick={() => props.demo(ref.state)}>BIG HEADING</li>
          <li>HEADING</li>
          <li>Text</li>
          <li>Quote</li>
        </ul>
    },
    {
      index: 1,
      title: "FONT STYLE",
      icon: "stype",
      panel: props =>
        <ul>
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
      panel: props =>
        <ul>
          <li>
            <div className={"icon icon-align-left"} />
          </li>
          <li>
            <div className={"icon icon-align-center"} />
          </li>
          <li>
            <div className={"icon icon-align-right"} />
          </li>
          <li>
            <div className={"icon icon-justify-left"} />
          </li>
          <li>
            <div className={"icon icon-justify-center"} />
          </li>
          <li>
            <div className={"icon icon-justify-right"} />
          </li>
        </ul>
    }
  ];
}
