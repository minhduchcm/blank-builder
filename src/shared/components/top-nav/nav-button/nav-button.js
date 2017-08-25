import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./nav-button.scss";

const NavButton = ({ icon, active, onClick }) => {
  return (
    <button
      className={classnames(style["nav-button"], { [style["active"]]: active })}
      onClick={onClick}
    >
      <div className={classnames(style["nav-icon"], "icon", `icon-${icon}`)} />
    </button>
  );
};

NavButton.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default NavButton;
