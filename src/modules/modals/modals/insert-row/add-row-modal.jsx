import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import PropTypes from 'prop-types';
import style from './add-row-modal.scss';

import { addRow } from '../../../../redux/modules/builder';
import { addRowData } from '../../../../redux/modules/rows';
import { addWidgets } from '../../../../redux/modules/widgets';
import { createTabPanel } from '../../../tab-panel';

const tabId = v4();

@connect(null, { addRow, addRowData, addWidgets })
class InsertRow extends Component {
  static propTypes = {
    active: PropTypes.number.isRequired,
    selectTab: PropTypes.func.isRequired,
    addRow: PropTypes.func.isRequired,
    addRowData: PropTypes.func.isRequired,
    addWidgets: PropTypes.func.isRequired
  };

  static contextTypes = {
    TemplateMananger: PropTypes.object.isRequired,
    hideModal: PropTypes.func.isRequired
  };
  onInsertButtonClick = (index, data, widgets) => {
    const { addRow, addRowData, addWidgets } = this.props;
    const { hideModal } = this.context;
    const addWidgetsTask = widgets.map(widget => addWidgets(widget));

    Promise.all(addWidgetsTask)
      .then(widgets => widgets.map(w => w.id))
      .then(widgets => addRowData(data, widgets))
      .then(id => addRow(index, id))
      .then(hideModal)
      .catch(e => {
        console.log(e);
      });
  };
  render() {
    const { active, selectTab, rowIndex } = this.props;
    const { TemplateMananger } = this.context;
    const templates = TemplateMananger.getGroups();
    return (
      <div>
        <ul className={style.tabHeader}>
          {templates.map((group, index) => (
            <li
              className={active === index ? style.active : null}
              key={`${tabId}-header-${index}`}
            >
              <a onClick={() => selectTab(index)}>{group[0]}</a>
            </li>
          ))}
        </ul>
        <ul className={style.tabBody}>
          {templates[active][1].map((template, index) => {
            const Thumb = template[1].thumb;
            return (
              <li key={`${tabId}-item-${index}`}>
                <Thumb />
                <div className={style.selectButton}>
                  <a
                    onClick={() =>
                      this.onInsertButtonClick(
                        rowIndex,
                        template[1].data,
                        template[1].widgets
                      )}
                  >
                    Select
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export const InsertRowModal = createTabPanel(tabId, InsertRow);
