import React from 'react';
import PropTypes from 'prop-types';

import style from './toogler.scss';

const Toogler = ({ toogle }) => {
  return (
    <div className={style.toogler} onClick={toogle}>
      <div />
    </div>
  );
};

Toogler.propTypes = {
  toogle: PropTypes.func.isRequired
};

export default Toogler;
