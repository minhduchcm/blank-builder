import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import style from "./config-panel.scss";

import FontTypeConfigPanel from "../../../widgets/configurations/font-type-config-panel";
import FontStyleConfigPanel from "../../../widgets/configurations/font-style-config-panel";
import TextAlignConfigPanel from "../../../widgets/configurations/text-align-config-panel";

export default function createConfigPanels(id, options) {
  function mapStateToProps(state) {
    return state
      .getIn(["builder", "sections", id, "data", options.name])
      .toJS();
  }

  return [
    {
      index: 0,
      icon: "type",
      title: "FONT TYPE",
      panel: FontTypeConfigPanel(id, options.name)
    },
    {
      index: 1,
      title: "FONT STYLE",
      icon: "stype",
      panel: FontStyleConfigPanel(id, options.name, options.ref)
    },
    {
      index: 2,
      title: "FONT ALIGN",
      icon: "align-left",
      panel: TextAlignConfigPanel(id, options.name)
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
