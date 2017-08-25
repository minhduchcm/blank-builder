import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

import style from "./animation.scss";

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

export default ({ timeout = 500, animation = "fade" }) => {
  return WrapedComponent => {
    const AnimatedContainer = ({ isVisable, ...props }) => {
      return (
        <Transition
          in={isVisable}
          timeout={timeout}
          appear
          mountOnEnter
          unmountOnExit
        >
          {state =>
            <WrapedComponent
              transitionClassName={style[`${animation}-${state}`]}
              style={{ animationDuration: `${timeout + 50}ms` }}
              {...props}
            />}
        </Transition>
      );
    };
    return AnimatedContainer;
  };
};
