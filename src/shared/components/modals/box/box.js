import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./box.scss";

const Box = (
  { transitionClass, style: inlineStyle, modalType, modalProps },
  { modalsManager }
) => {
  const { title, subTitle, component: Body } = modalsManager.get(modalType);
  return (
    <div
      className={classnames(style["modal"], style[transitionClass])}
      onClick={e => e.stopPropagation()}
    >
      <div className={style["modal-body"]}>
        <h1>
          {title}
        </h1>
        <p className={style["sub-title"]}>
          {subTitle}
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
