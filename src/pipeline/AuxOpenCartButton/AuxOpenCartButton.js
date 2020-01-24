import React from 'react';
import cx from 'classnames';
import Transition from '~/components/Transition';
import PROP_TYPES from './AuxOpenCartButton.prop-types';
import styles from './AuxOpenCartButton.module.css';

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

AuxOpenCartButton.propTypes = PROP_TYPES;

export default AuxOpenCartButton;
