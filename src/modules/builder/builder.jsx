import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import style from './builder.scss';

import { AddWidgetButton } from './add-widget-button';
import { AddWidgetLine } from './add-widget-line';

import { Row } from './row';
import { DragPreviewLayer } from './drag-preview-layer';

function mapStateToProps(state) {
  return { rows: state.get('builder').toJS() };
}

@connect(mapStateToProps)
@DragDropContext(HTML5Backend)
export class Builder extends Component {
  static propTypes = {
    rows: PropTypes.array.isRequired,
    setConfigPanel: PropTypes.func.isRequired
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

  renderRows() {
    const { rows } = this.props;
    if (rows.length === 0) return this.renderWelcomeSection();
    return (
      <div>
        {rows.map((row, index) => [
          index === 0 ? (
            <AddWidgetLine key={`pre-${row.id}`} index={index} />
          ) : null,
          <Row
            key={row.id}
            id={row.id}
            index={index}
            setConfigPanel={this.props.setConfigPanel}
          />,
          <AddWidgetLine key={`post-${row.id}`} index={index + 1} />
        ])}
      </div>
    );
  }

  render() {
    return (
      <div className={style.builder}>
        {this.renderRows()}
        <DragPreviewLayer />
      </div>
    );
  }
}
