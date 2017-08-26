import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./box.scss";

const Box = (
  { transitionClass, style: inlineStyle, modalType, modalProps, stack },
  { modalsManager }
) => {
  const { title, description, component: Body } = modalsManager.get(modalType);
  const transform = `translateX(-50%) translateY(${100 *
    (1 - stack)}px) scale(${stack / 4 + 0.75})`;
  const opacity = stack / 2 + 0.5;
  const pointerEvents = stack === 1 ? "all" : "none";
  return (
    <div
      style={{ transform, opacity, pointerEvents }}
      className={classnames(style["modal"], style[transitionClass])}
      onClick={e => e.stopPropagation()}
    >
      <div className={style["modal-body"]}>
        <h1>
          {title}
        </h1>
        <p className={style["description"]}>
          {description}
        </p>
        <Body {...modalProps} />
      </div>
    </div>
  );
};

Box.propTypes = {
  transitionClassName: PropTypes.string,
  style: PropTypes.object,
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
  state: PropTypes.string
};

Box.contextTypes = {
  modalsManager: PropTypes.object.isRequired
};

export default Box;
