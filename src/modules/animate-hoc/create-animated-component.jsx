import React from 'react';
import { Transition } from 'react-transition-group';

export function createAnimatedComponent(WrapedComponent) {
  const AnimatedComponent = ({ timeout, onExited, ...props }) => {
    return (
      <Transition in={props.in} timeout={timeout} onExited={onExited}>
        {s => <WrapedComponent transition={s} {...props} />}
      </Transition>
    );
  };
  return AnimatedComponent;
}
