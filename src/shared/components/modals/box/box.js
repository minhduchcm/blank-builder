import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./box.scss";

const Box = ({ modalType, modalProps, state }, { modalsManager }) => {
  if (modalType) {
    let modalData = modalsManager.getModal(modalType);
    return (
      <div
        className={classnames(style["modal"], style[state])}
        onClick={e => e.stopPropagation()}
      >
        <div className={style["modal-body"]}>
          <h1>
            {modalData.title}
          </h1>
          <p className={style["sub-title"]}>
            {modalData.subTitle}
          </p>
          <modalData.component {...modalProps} />
        </div>
      </div>
    );
  }
  return null;
};

Box.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
  state: PropTypes.string
};

Box.contextTypes = {
  modalsManager: PropTypes.object.isRequired
};

export default Box;
