import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { deleteWidgets, updateWidgets } from '../../../redux/modules/widgets';
import style from './widget.scss';

@connect(
  (state, props) => {
    return {
      widget: state.getIn(['widgets', props.id]).toJS(),
      active: state.getIn(['config', 'id'])
    };
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
    this.getEditor(props.widget.type);
  }
  getEditor = type => {
    this.Widget = this.context.DynamicComponentMananger.getComponent(
      type
    ).Editor;
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.widget.type !== this.props.widget.type) {
      this.getEditor(nextProps.widget.type);
    }
  };

  render() {
    return (
      <div
        className={classnames(style.container, {
          [style.active]: this.props.active === this.props.widget.id
        })}
        onClick={e => {
          if (this.refs.widget && this.refs.widget.widgetFocus)
            this.refs.widget.widgetFocus();
          e.stopPropagation();
        }}
      >
        <this.Widget
          ref="widget"
          setConfigPanel={this.props.setConfigPanel}
          {...this.props.widget.data}
          updateWidgets={patch =>
            this.props.updateWidgets(this.props.widget.id, patch)}
        />
      </div>
    );
  }
}

export { WidgetContainer };
