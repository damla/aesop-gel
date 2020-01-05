import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Transition from '~/components/elements/Transition';
import styles from './AuxOpenCartButton.module.css';

const propTypes = {
  classSet: PropTypes.string,
  handleShow: PropTypes.func,
};

const AuxOpenCartButton = ({ classSet, handleShow }) => {
  const className = cx(styles.base, classSet);

  return (
    <Transition activeOnMount={true} type="fade">
      <aside
        className={cx(styles.base, className)}
        onClick={handleShow}
        onKeyPress={handleShow}
        role="button"
        tabIndex={0}
      />
    </Transition>
  );
};

AuxOpenCartButton.propTypes = propTypes;

export default AuxOpenCartButton;
