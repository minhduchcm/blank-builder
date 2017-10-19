import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';

import { selectTab } from '../../redux/modules/tab-panel';

export const createTabPanel = (id = uuid(), Tabs) => {
  function mapStateToProps(state) {
    return {
      active: state.getIn(['tab', id]) || 0
    };
  }

  @connect(mapStateToProps, { selectTab })
  class TabPanel extends Component {
    static propTypes = {
      active: PropTypes.number.isRequired,
      selectTab: PropTypes.func.isRequired
    };

    render() {
      const { className, selectTab, active, ...props } = this.props;
      return (
        <Tabs
          key={id}
          selectTab={index => selectTab(id, index)}
          active={active}
          {...props}
        />
      );
    }
  }

  return TabPanel;
};
