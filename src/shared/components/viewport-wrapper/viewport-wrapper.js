import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./viewport.scss";

import { viewports } from "../../const";

const ViewportWrapper = ({ viewport, children }) => {
  return (
    <div
      className={classnames(style["viewport"], {
        [style["mobile"]]: viewport === viewports.MOBILE,
        [style["tablet"]]: viewport === viewports.TABLET
      })}
    >
      {children}
    </div>
  );
};

ViewportWrapper.propTypes = {
  viewport: PropTypes.string.isRequired
};

export default ViewportWrapper;
