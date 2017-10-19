import React from 'react';
import PropTypes from 'prop-types';

import { modalTypes } from '../../../constant';
import style from './add-widget-button.scss';

const AddWidgetButton = ({ index }, { showModal }) => {
  return (
    <button
      onClick={() =>
        showModal(
          modalTypes.INSERT_ROW_MODAL,
          'ADD CONTENT',
          'Choose a content type to add to your page.',
          {
            rowIndex: index
          }
        )}
      className={style.addWidgetButton}
    >
      <div className={'icon icon-section'} />ADD CONTENT
    </button>
  );
};
AddWidgetButton.propTypes = {
  index: PropTypes.number
};

AddWidgetButton.defaultProps = {
  index: 0
};

AddWidgetButton.contextTypes = {
  showModal: PropTypes.func.isRequired
};
export { AddWidgetButton };
