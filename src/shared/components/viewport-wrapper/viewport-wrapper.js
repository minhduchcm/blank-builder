import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./viewport.scss";

import { viewports } from "../../const";

const ViewportWrapper = ({ viewport, onClick, children }) => {
  return (
    <div onClick={onClick} className={style["viewport"]}>
      <div
        className={classnames(style["wrapper"], {
          [style["mobile"]]: viewport === viewports.MOBILE,
          [style["tablet"]]: viewport === viewports.TABLET
        })}
      >
        {children}
      </div>
    </div>
  );
};

ViewportWrapper.propTypes = {
  viewport: PropTypes.string.isRequired
};

export default ViewportWrapper;
