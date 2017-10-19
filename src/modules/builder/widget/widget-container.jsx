import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteWidgets, updateWidgets } from '../../../redux/modules/widgets';
import style from './widget.scss';

@connect(
  (state, props) => {
    return state.getIn(['widgets', props.id]).toJS();
  },
  { deleteWidgets, updateWidgets }
)
class WidgetContainer extends Component {
  static propTypes = {
    setConfigPanel: PropTypes.func.isRequired
  };
  static contextTypes = {
    DynamicComponentMananger: PropTypes.object.isRequired
  };
  constructor(props, context) {
    super(props, context);
    this.getEditor(props.type);
  }
  getEditor = type => {
    this.Widget = this.context.DynamicComponentMananger.getComponent(
      type
    ).Editor;
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.type !== this.props.type) {
      this.getEditor(nextProps.type);
    }
  };

  render() {
    return (
      <div
        className={style.container}
        onClick={e => {
          if (this.refs.widget && this.refs.widget.widgetFocus)
            this.refs.widget.widgetFocus();
          e.stopPropagation();
        }}
      >
        <this.Widget
          ref="widget"
          setConfigPanel={this.props.setConfigPanel}
          {...this.props.data}
          updateWidgets={patch =>
            this.props.updateWidgets(this.props.id, patch)}
        />
      </div>
    );
  }
}

export { WidgetContainer };
