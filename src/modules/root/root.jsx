import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DynamicComponentMananger from '../dynamic-component-manager';
import TemplateMananger from '../template-manager';

import { hideModal, showModal } from '../../redux/modules/modals';

import style from './root.scss';
import TopNav from '../top-nav';
import Viewport from '../viewport';
import { Builder } from '../builder';
import { Modals, ModalRoot } from '../modals';
import { Widgets } from '../widgets';
import { Templates } from '../templates';
import { ConfigPanelRoot, setConfigPanel } from '../config-panel';

@connect(() => ({}), { showModal, hideModal })
class Root extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  };
  static childContextTypes = {
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    DynamicComponentMananger: PropTypes.object.isRequired,
    TemplateMananger: PropTypes.object.isRequired
  };
  constructor(props, context) {
    super(props, context);
    this.DynamicComponentMananger = new DynamicComponentMananger();

    Modals.map(m =>
      this.DynamicComponentMananger.registerComponent(m.type, m.modal)
    );

    Widgets.map(w =>
      this.DynamicComponentMananger.registerComponent(w.type, w.component)
    );

    this.TemplateMananger = new TemplateMananger();
    Templates.map(t => this.TemplateMananger.registerTemplate(t));

    this.ConfigPanelRoot = <ConfigPanelRoot />;
  }
  getChildContext() {
    return {
      showModal: this.props.showModal,
      hideModal: this.props.hideModal,
      DynamicComponentMananger: this.DynamicComponentMananger,
      TemplateMananger: this.TemplateMananger
    };
  }
  render() {
    return (
      <div className={style.rootContainer}>
        <TopNav />
        <Viewport>
          <Builder setConfigPanel={setConfigPanel} />
        </Viewport>
        {this.ConfigPanelRoot}
        <ModalRoot />
      </div>
    );
  }
}
export default Root;
