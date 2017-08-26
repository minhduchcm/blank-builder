import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./add-section-modal.scss";
import TabPanel from "../../tab-panel";

const Header = ({ selectTab, activeTab }, { sectionTemplatesManager }) =>
  <ul className={style["tab-header"]}>
    {sectionTemplatesManager.getTemplateGroups().map((group, idx) =>
      <li className={activeTab === idx ? style["active"] : null} key={idx}>
        <a onClick={() => selectTab(idx)}>
          {group}
        </a>
      </li>
    )}
  </ul>;
Header.contextTypes = {
  sectionTemplatesManager: PropTypes.object.isRequired
};

const Panels = (
  { sectionIndex, activeTab },
  { sectionTemplatesManager, hideModal }
) => {
  const group = sectionTemplatesManager.getTemplateGroups()[activeTab];
  return (
    <ul className={style["tab-body"]}>
      {sectionTemplatesManager
        .getTemplatesInGroup(group)
        .map((template, index) =>
          <li key={index}>
            <template.thumb />
            <div className={style["select-button"]}>
              <button
                onClick={() => {
                  //TODO: dispatch add section
                  hideModal();
                }}
              >
                Select
              </button>
            </div>
          </li>
        )}
    </ul>
  );
};
Panels.contextTypes = {
  hideModal: PropTypes.func.isRequired,
  sectionTemplatesManager: PropTypes.object.isRequired
};

const AddSectionModal = TabPanel({ Header, Panels });
export default AddSectionModal;
