import { findDOMNode } from "react-dom";
import { BUILDER_PADDING_TOP } from "../../const";

function getPlaceholderIndex(section, yPos, builder) {
  const nSections = builder.sectionNodes.length;
  let placeholderIndex = 0;
  let deltaY = yPos - 80 - section.height / 2;

  builder.sectionNodes.forEach((element, index) => {
    if (index != section.index && deltaY > element.height / 2) {
      deltaY -= element.height;
      placeholderIndex += 1;
    }
  });
  return placeholderIndex;
}

export default {
  drop(props, monitor, component) {
    const { placeholderIndex } = component.state;
    const { index } = monitor.getItem();
    if (index != placeholderIndex) {
      props.moveSection(index, placeholderIndex);
    }
  },
  hover(props, monitor, component) {
    const section = monitor.getItem();
    let placeholderIndex = getPlaceholderIndex(
      section,
      monitor.getClientOffset().y,
      component
    );
    if (component.state.placeholderIndex != placeholderIndex) {
      component.setState({
        placeholderIndex,
        draggingIndex: section.index,
        placeholderHeight: section.height + 2
      });
    }
    document.getElementById(section.id).style.opacity = 0;
    document.getElementById(section.id).style.height = 0;
  }
};
