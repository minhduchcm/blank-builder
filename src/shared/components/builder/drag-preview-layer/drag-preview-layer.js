import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragLayer } from "react-dnd";
import { dragItemTypes, BUILDER_OFFSET_HEIGHT } from "../../../const";

import style from "./drag-preview-layer.scss";

const layerStyles = {
  position: "absolute",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%"
};
const defaultItemStyle = {
  margin: "0px 20px",
  padding: 0,
  backgroundColor: "#fafafa",
  border: "1px solid #dddddd"
};

@DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging()
}))
export default class DragPreviewLayer extends Component {
  static propTypes = {
    item: PropTypes.object,
    itemType: PropTypes.string,
    initialOffset: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }),
    currentOffset: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }),
    isDragging: PropTypes.bool.isRequired
  };
  static contextTypes = {
    sectionTemplatesManager: PropTypes.object.isRequired
  };
  getItemStyles(props) {
    const { initialOffset, currentOffset } = props;
    if (!initialOffset || !currentOffset) {
      return {
        display: "none"
      };
    }
    let { x, y } = currentOffset;

    //TODO: implement snap function
    if (props.snapToGrid) {
      x -= initialOffset.x;
      y -= initialOffset.y;
      [x, y] = snapToGrid(x, y);
      x += initialOffset.x;
      y += initialOffset.y;
    }

    const transform = `translate(0px, ${y + 11 - props.item.height / 2}px)`;
    return {
      width: props.item.width,
      height: props.item.height,
      transform,
      WebkitTransform: transform
    };
  }

  getItemPreviewer(type) {
    return this.context.sectionTemplatesManager.get(type).component;
  }
  PrevComponent = null;
  componentWillReceiveProps(nextProps) {
    switch (nextProps.itemType) {
      case dragItemTypes.SECTION: {
        if (nextProps.item.index !== (this.props.item || {}).index) {
          console.log(nextProps);
          let PrevComponent = this.getItemPreviewer(nextProps.item.type);
          if (PrevComponent !== null) {
            this.PrevComponent = <PrevComponent index={nextProps.item.index} />;
          }
        }
        break;
      }
      default:
        this.PrevComponent = null;
    }
  }
  render() {
    const { item, itemType, isDragging } = this.props;

    if (!isDragging) {
      return null;
    }
    return (
      <div className={style["preview-layer"]}>
        <div
          className={style["preview-item"]}
          style={this.getItemStyles(this.props)}
        >
          {this.PrevComponent}
        </div>
      </div>
    );
  }
}
