import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import style from './builder.scss';

import { moveRow } from '../../redux/modules/builder';
import { AddWidgetButton } from './add-widget-button';
import { AddWidgetLine } from './add-widget-line';

import { Row } from './row';
import { DragPreviewLayer } from './drag-preview-layer';
import { DragRowPreview } from './drag-row-preview';

@connect(
  state => {
    return { rows: state.get('builder').toJS() };
  },
  { moveRow }
)
@DragDropContext(HTML5Backend)
export class Builder extends Component {
  static propTypes = {
    rows: PropTypes.array.isRequired,
    setConfigPanel: PropTypes.func.isRequired
  };
  state = {
    preview: -1
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
  setPreview = index => {
    this.setState({ preview: index });
  };
  renderRows() {
    const { rows } = this.props;
    if (rows.length === 0) return this.renderWelcomeSection();
    return (
      <div>
        {rows.map((row, index) => [
          index === 0 ? (
            <AddWidgetLine key={`pre-${row.id}`} index={index} />
          ) : null,
          index === this.state.preview ? (
            <DragRowPreview
              key="row-drag-preview"
              setPreview={this.setPreview}
            />
          ) : null,
          <Row
            key={row.id}
            id={row.id}
            index={index}
            setConfigPanel={this.props.setConfigPanel}
            setPreview={this.setPreview}
            moveRow={() => {
              if (this.state.preview === -1) return;
              let newIndex = this.state.preview;
              if (index <= this.state.preview) newIndex -= 1;
              console.log('move');
              this.props.moveRow(index, newIndex);
              setTimeout(() => {
                const element = document.getElementById(row.id);
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 10);
            }}
          />,
          <AddWidgetLine key={`post-${row.id}`} index={index + 1} />
        ])}
        {this.state.preview === rows.length && (
          <DragRowPreview key="row-drag-preview" setPreview={this.setPreview} />
        )}
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
