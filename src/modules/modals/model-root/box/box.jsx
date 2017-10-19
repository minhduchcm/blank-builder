import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './box.scss';
import { createAnimatedComponent } from '../../../animate-hoc';

function getBoxStyle(size, stack) {
  const transform = `translateX(-50%) translateY(${100 *
    (1 - stack)}px) scale(${stack / 4 + 0.75})`;
  const opacity = stack / 2 + 0.5;
  const pointerEvents = stack === 1 ? 'all' : 'none';
  var maxWidth = 'auto';

  if (size === 'small') {
    maxWidth = '350px';
  }
  return { transform, opacity, maxWidth, pointerEvents };
}

const Box = (props, context) => {
  const {
    transition,
    type,
    title,
    size,
    description,
    props: modalProps,
    stack
  } = props;
  const { DynamicComponentMananger } = context;

  const Modal = DynamicComponentMananger.getComponent(type);

  return (
    <div
      style={getBoxStyle(size, stack)}
      className={cn(style.modal, style[transition])}
      onClick={e => e.stopPropagation()}
    >
      <div className={style.modalBody}>
        <h1>{title}</h1>
        <p className={style.description}>{description}</p>
        <Modal {...modalProps} />
      </div>
    </div>
  );
};

Box.propTypes = {
  transition: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired,
  stack: PropTypes.number.isRequired
};

Box.contextTypes = {
  DynamicComponentMananger: PropTypes.object.isRequired
};

export const AnimatedBox = createAnimatedComponent(Box);
