import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './nav-button.scss';

const NavButton = ({ icon, active, ...rest }) => {
  return (
    <button
      className={classnames(style.navButton, { [style.active]: active })}
      {...rest}
    >
      <div className={classnames(style.navIcon, 'icon', `icon-${icon}`)} />
    </button>
  );
};

NavButton.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

export default NavButton;
