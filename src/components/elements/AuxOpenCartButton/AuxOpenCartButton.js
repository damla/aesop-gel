import React, { FunctionComponent } from 'react';
import cx from 'classnames';
import Transition from '~/components/elements/Transition';
import Props from './AuxOpenCartButton.types';
import styles from './AuxOpenCartButton.module.css';

const AuxOpenCartButton: FunctionComponent<Props> = ({
  className,
  handleShow,
}) => {
  const classSet: string = cx(styles.base, className);

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

AuxOpenCartButton.defaultProps = {};

export default AuxOpenCartButton;
