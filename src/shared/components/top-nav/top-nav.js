import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./top-nav.scss";

import Toogler from "./toogler";

const TopNav = ({ isExpaned, toogle }) => {
  return (
    <div
      className={classnames(style["top-nav"], {
        [style["is-expanded"]]: isExpaned
      })}
    >
      <Toogler toogle={toogle} />
    </div>
  );
};
TopNav.protoTypes = {
  toogle: PropTypes.func.isRequired
};
export default TopNav;
