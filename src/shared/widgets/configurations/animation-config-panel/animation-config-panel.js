import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import style from "./animation-config-panel.scss";

export default class AnimationConfigPanel extends Component {
  static propTypes = {
    setSectionData: PropTypes.func.isRequired
  };
  constructor(props, context) {
    super(props, context);
    this.setEvent = this.setEvent.bind(this);
    this.setType = this.setType.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.setDelay = this.setDelay.bind(this);
  }
  setEvent(e) {
    this.props.setSectionData(
      this.props.id,
      [this.props.name, "animation", "event"],
      e.target.value
    );
  }
  setType(e, type) {
    e.stopPropagation();
    e.preventDefault();
    this.props.setSectionData(
      this.props.id,
      [this.props.name, "animation", "type"],
      type
    );
  }
  setDuration(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.setSectionData(
      this.props.id,
      [this.props.name, "animation", "duration"],
      e.target.value
    );
  }
  setDelay(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.setSectionData(
      this.props.id,
      [this.props.name, "animation", "delay"],
      e.target.value
    );
  }
  render() {
    const { event, type, duration, delay } = this.props.animation;
    return (
      <div className={style["container"]}>
        <select
          className={style["event-select"]}
          value={event}
          onChange={this.setEvent}
        >
          <option value="none">None</option>
          <option value="enter-viewport">On enter viewport</option>
          <option value="hover">On mouse hover</option>
          <option value="click">On mouse click</option>
        </select>
        <h2>Animation Type</h2>
        <ul className={style["type-select"]}>
          <li
            onMouseDown={e => this.setType(e, "fade")}
            className={classnames({ [style["active"]]: type === "fade" })}
          >
            <a>Fade</a>
          </li>
          <li
            onMouseDown={e => this.setType(e, "slide")}
            className={classnames({ [style["active"]]: type === "slide" })}
          >
            <a>Slide</a>
          </li>
          <li
            onMouseDown={e => this.setType(e, "swipe")}
            className={classnames({ [style["active"]]: type === "swipe" })}
          >
            <a>Swipe</a>
          </li>
        </ul>
        <div className={style["option"]}>
          <div className={style["panel"]}>
            <h2>Duration(ms)</h2>
            <input
              type="number"
              step={1}
              value={duration}
              onChange={this.setDuration}
            />
          </div>
          <div className={style["panel"]}>
            <h2>Delay(ms)</h2>
            <input
              type="number"
              step={1}
              value={delay}
              onChange={this.setDelay}
            />
          </div>
        </div>
      </div>
    );
  }
}
