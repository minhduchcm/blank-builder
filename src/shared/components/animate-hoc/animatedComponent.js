import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

function createAnimatedComponent(WrapedComponent) {
  const AnimatedComponent = props => {
    return (
      <Transition
        in={props.in}
        timeout={props.timeout}
        onExited={props.onExited}
      >
        {state => <WrapedComponent transitionClass={state} {...props} />}
      </Transition>
    );
  };
  return AnimatedComponent;
}
export default createAnimatedComponent;
