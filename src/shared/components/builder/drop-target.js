import { findDOMNode } from "react-dom";
import { BUILDER_PADDING_TOP } from "../../const";

function getPlaceholderIndex(section, yPos, builder) {
  let placeholderIndex = -1;
  let deltaY = yPos - BUILDER_PADDING_TOP - section.height / 2;
  const numOfSection = builder.sectionNodes.length;
  for (var i = 0; i < numOfSection; i++) {
    if (i !== section.index && deltaY >= builder.sectionNodes[i].height) {
      deltaY -= builder.sectionNodes[i].height;
      placeholderIndex += 1;
    }
  }
  return placeholderIndex;
}

export default {
  drop(props, monitor, component) {
    const section = monitor.getItem();
  },
  hover(props, monitor, component) {
    const section = monitor.getItem();
    const placeholderIndex = getPlaceholderIndex(
      section,
      monitor.getClientOffset().y,
      component
    );
    if (component.state.placeholderIndex != placeholderIndex) {
      console.log(placeholderIndex);
      component.setState({
        placeholderIndex,
        placeholderHeight: section.height + 2
      });
    }
    document.getElementById(section.id).style.opacity = 0;
    document.getElementById(section.id).style.height = 0;
  }
};
