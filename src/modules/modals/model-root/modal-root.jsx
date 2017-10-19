import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';

import { hideModal } from '../../../redux/modules/modals';
import { AnimatedBackdrop } from './backdrop';
import { AnimatedBox } from './box';

function mapStateToProps(state) {
  return {
    modals: state.get('modals').toJS()
  };
}

@connect(mapStateToProps, { hideModal })
class ModalRoot extends Component {
  static propTypes = {
    modals: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        visible: PropTypes.bool.isRequired,
        props: PropTypes.object.isRequired
      })
    ).isRequired,
    hideModal: PropTypes.func.isRequired
  };

  render() {
    const { modals, hideModal } = this.props;
    let components = [];
    const length = modals.length;

    if (length > 1 || (length === 1 && modals[0].visible)) {
      components.push(
        <AnimatedBackdrop key="backdrop" timeout={300} hideModal={hideModal} />
      );
    }
    components.push(
      modals.map((data, index) => (
        <AnimatedBox
          key={index}
          timeout={300}
          stack={(index + 1) / modals.length}
          {...data}
        />
      ))
    );
    return <TransitionGroup>{components}</TransitionGroup>;
  }
}

export { ModalRoot };
