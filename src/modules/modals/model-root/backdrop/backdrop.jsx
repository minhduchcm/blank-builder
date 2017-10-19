import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './backdrop.scss';
import { createAnimatedComponent } from '../../../animate-hoc';

const Backdrop = ({ hideModal, transition }) => {
  return (
    <div
      className={cn(style.modalBackdrop, style[transition])}
      onClick={hideModal}
    />
  );
};

Backdrop.propTypes = {
  hideModal: PropTypes.func,
  transitionClass: PropTypes.string,
  style: PropTypes.object
};

export const AnimatedBackdrop = createAnimatedComponent(Backdrop);
