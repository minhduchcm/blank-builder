import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

import style from "./animation.scss";

export const createAnimatedComponent = require("./animatedComponent").default;

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}
export default ({ timeout = 500, animation = "fade" }) => {
  console.log(animation);
  return WrapedComponent => {
    const AnimatedContainer = ({ isVisible, onExited, ...props }) => {
      return (
        <Transition
          in={isVisible}
          timeout={timeout}
          appear
          mountOnEnter
          unmountOnExit
          onExited={onExited}
        >
          {state =>
            <WrapedComponent
              transitionClassName={state}
              style={{ animationDuration: `${timeout + 50}ms` }}
              {...props}
            />}
        </Transition>
      );
    };
    return AnimatedContainer;
  };
};
