import React, { Component } from "react";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";
import style from "./builder.scss";

import ViewportWrapper from "../viewport-wrapper";
import AddWidgetButton from "../add-widget-button";
import AddWidgetLine from "../add-widget-line";
import Section from "../section";

import DragPreviewLayer from "./drag-preview-layer";

import { modalTypes } from "../../const";

class Builder extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    addSection: PropTypes.func.isRequired,
    moveSection: PropTypes.func.isRequired,
    deleteSection: PropTypes.func.isRequired,
    selectSection: PropTypes.func.isRequired,
    setSectionData: PropTypes.func.isRequired,
    nbSections: PropTypes.number.isRequired,
    sections: PropTypes.array.isRequired
  };
  static contextTypes = {
    showModal: PropTypes.func.isRequired
  };
  static childContextTypes = {
    activeSection: PropTypes.object.isRequired
  };
  state = {
    placeholderIndex: undefined,
    placeholderHeight: 0,
    isScrolling: false
  };
  getChildContext() {
    return {
      activeSection: this.props.activeSection
    };
  }
  sectionNodes = [];
  sectionRefs = [];
  componentDidUpdate() {
    this.sectionRefs.length = this.props.nbSections;
    this.sectionNodes = this.sectionRefs.map(ref => {
      const boundingClientRect = findDOMNode(ref).getBoundingClientRect();
      return boundingClientRect;
    });
  }

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
  renderPlaceHolder() {
    return (
      <div
        className="row"
        key="placeholder"
        style={{
          backgroundColor: "#ddd",
          height: this.state.placeholderHeight
        }}
      />
    );
  }
  render() {
    const {
      nbSections,
      sections,
      moveSection,
      deleteSection,
      selectSection,
      setSectionData,
      connectDropTarget,
      isOver,
      canDrop
    } = this.props;
    const { placeholderIndex, draggingIndex } = this.state;

    let cardList = [];
    let builderItems = [];
    sections.forEach((section, index) => {
      builderItems.push(
        <div key={index} className={"row"}>
          {index === 0 ? <AddWidgetLine index={index} /> : null}
          <Section
            ref={ref => {
              if (ref) {
                this.sectionRefs[index] = ref;
              }
            }}
            index={index}
            moveSection={moveSection}
            selectSection={selectSection}
            deleteSection={() => deleteSection(index)}
            setSectionData={data => setSectionData(index, data)}
            {...section}
          />
          <AddWidgetLine index={index + 1} />
        </div>
      );
    });
    if (isOver && canDrop) {
      builderItems.splice(
        placeholderIndex > draggingIndex
          ? placeholderIndex + 1
          : placeholderIndex,
        0,
        this.renderPlaceHolder()
      );
    }
    return (
      <ViewportWrapper>
        {connectDropTarget(
          <div className={style["builder"]} onClick={() => selectSection()}>
            {nbSections > 0 ? builderItems : this.renderWelcomeSection()}
            <div style={{ height: "150px" }} /> {/*bottom padding section*/}
          </div>
        )}
        <DragPreviewLayer />
      </ViewportWrapper>
    );
  }
}

export default Builder;
