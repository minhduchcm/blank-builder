import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./builder.scss";

import ViewportWrapper from "../viewport-wrapper";
import AddWidgetButton from "../add-widget-button";
import Section from "../section";
import { modalTypes } from "../../const";

class Builder extends Component {
  static propTypes = {
    addSection: PropTypes.func.isRequired,
    moveSection: PropTypes.func.isRequired,
    sections: PropTypes.array.isRequired
  };
  static contextTypes = {
    showModal: PropTypes.func.isRequired
  };
  renderWelcomeSection() {
    return (
      <div>
        <h1>Create your first story</h1>
        <p>It's time to build demo! To start, we need to create widgets.</p>
        <p>
          Click <AddWidgetButton /> to start your first widget......
        </p>
      </div>
    );
  }
  render() {
    const sections =
      this.props.sections.lenght > 0
        ? this.props.sections.map((section, index) =>
            <Section
              key={index}
              index={index}
              moveSection={this.props.moveSection}
              {...section}
            />
          )
        : this.renderWelcomeSection();
    return (
      <ViewportWrapper>
        <div className={style["builder"]}>
          {sections}
        </div>
      </ViewportWrapper>
    );
  }
}

export default Builder;
