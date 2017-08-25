import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./top-nav.scss";

import { viewports } from "../../const";

import NavButton from "./nav-button";
import Toogler from "./toogler";

const TopNav = ({ isExpaned, viewport, toogle, changeViewport }) => {
  return (
    <div
      className={classnames(style["top-nav"], {
        [style["is-expanded"]]: isExpaned
      })}
    >
      <div className={style["nav-center"]}>
        <NavButton
          icon="desktop"
          active={viewport === viewports.DESKTOP}
          onClick={() => changeViewport(viewports.DESKTOP)}
        />
        <NavButton
          icon="tablet"
          active={viewport === viewports.TABLET}
          onClick={() => changeViewport(viewports.TABLET)}
        />
        <NavButton
          icon="mobile"
          active={viewport === viewports.MOBILE}
          onClick={() => changeViewport(viewports.MOBILE)}
        />
      </div>
      <div className={style["nav-right"]}>
        <NavButton icon="preview" />
        <NavButton icon="save" />
      </div>
      <Toogler toogle={toogle} />
    </div>
  );
};
TopNav.protoTypes = {
  toogle: PropTypes.func.isRequired
};
export default TopNav;
