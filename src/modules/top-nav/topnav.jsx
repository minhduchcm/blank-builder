import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ReactTip from 'react-tooltip';

import { viewports } from '../../constant';
import { toogle } from '../../redux/modules/topnav';
import { changeViewport } from '../../redux/modules/viewport';
import style from './topnav.scss';
import NavButton from './nav-button';
import Toogler from './toogler';

function mapStateToProps(state) {
  return {
    isExpand: state.getIn(['topnav', 'value']),
    viewport: state.getIn(['viewport', 'value'])
  };
}

@connect(mapStateToProps, { toogle, changeViewport })
class TopNav extends Component {
  static propTypes = {
    isExpand: PropTypes.bool.isRequired,
    viewport: PropTypes.string.isRequired,
    toogle: PropTypes.func.isRequired,
    changeViewport: PropTypes.func.isRequired
  };

  render() {
    const { isExpand, viewport, toogle, changeViewport } = this.props;
    return (
      <div
        className={classnames(style.topNav, {
          [style.isExpand]: isExpand
        })}
      >
        <div className={style.navCenter}>
          <NavButton
            data-tip="Desktop"
            icon="desktop"
            active={viewport === viewports.DESKTOP}
            onClick={() => changeViewport(viewports.DESKTOP)}
          />
          <NavButton
            data-tip="Tablet"
            icon="tablet"
            active={viewport === viewports.TABLET}
            onClick={() => changeViewport(viewports.TABLET)}
          />
          <NavButton
            data-tip="Mobile"
            icon="mobile"
            active={viewport === viewports.MOBILE}
            onClick={() => changeViewport(viewports.MOBILE)}
          />
        </div>
        <div className={style.navRight}>
          <NavButton icon="preview" data-tip="Preview" />
          <NavButton icon="save" data-tip="Save" />
        </div>
        <Toogler toogle={toogle} />
        <ReactTip place="bottom" effect="solid" delayShow={50} />
      </div>
    );
  }
}

export default TopNav;
