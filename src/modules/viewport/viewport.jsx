import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './viewport.scss';
import { viewports } from '../../constant';
import { deselect } from '../../redux/modules/config-panel';

function mapStateToProps(state) {
  return { viewport: state.getIn(['viewport', 'value']) };
}

@connect(mapStateToProps, { deselect })
class Viewport extends Component {
  static propTypes = {
    viewport: PropTypes.string.isRequired
  };
  setViewport = viewport => {
    var size = 'device-width';
    switch (viewport) {
      case viewports.TABLET:
        size = 992;
        break;
      case viewports.MOBILE:
        size = 414;
        break;
      default:
        break;
    }
    const viewportMeta = document.getElementById('viewport');
    viewportMeta.setAttribute(
      'content',
      `width=${size}, initial-scale=1, shrink-to-fit=no`
    );
  };
  componentWillMount = () => {
    this.setViewport(this.props.viewport);
  };

  componentWillReceiveProps = nextProps => {
    this.setViewport(nextProps.viewport);
  };

  render() {
    const { viewport, children } = this.props;
    return (
      <div onClick={this.props.deselect} className={style.viewport}>
        <div
          className={classnames(style.wrapper, {
            [style.mobile]: viewport === viewports.MOBILE,
            [style.tablet]: viewport === viewports.TABLET
          })}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Viewport;
