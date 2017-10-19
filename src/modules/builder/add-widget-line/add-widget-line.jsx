import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AddWidgetButton } from '../add-widget-button';
import style from './add-widget-line.scss';

class AddWidgetLine extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { hover: false };
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  onMouseMove() {
    this.setState({ hover: true });
  }
  onMouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    return (
      <div
        className={style.container}
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
      >
        <div className={style.addWidgetLine}>
          {this.state.hover && <AddWidgetButton index={this.props.index} />}
        </div>
      </div>
    );
  }
}

AddWidgetLine.propTypes = {
  index: PropTypes.number.isRequired
};

export { AddWidgetLine };
