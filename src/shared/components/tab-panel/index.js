import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";

import { selectTab } from "../../actions/tab-panel";

export default function TabPanel({ id = uuid(), Header, Panels }) {
  class TabPanel extends Component {
    render() {
      const { className, selectTab, activeTab, ...bodyProps } = this.props;
      return (
        <div className={className} key={id}>
          <Header
            key={id + "-header"}
            selectTab={tabIndex => selectTab(id, tabIndex)}
            activeTab={activeTab}
          />

          <Panels key={id + "-panel"} activeTab={activeTab} {...bodyProps} />
        </div>
      );
    }
  }

  TabPanel.propTypes = {
    activeTab: PropTypes.number.isRequired,
    selectTab: PropTypes.func.isRequired
  };

  function mapStateToProps(state) {
    return {
      activeTab: state.getIn(["tabPanel", id]) || 0
    };
  }

  return connect(mapStateToProps, {
    selectTab
  })(TabPanel);
}
