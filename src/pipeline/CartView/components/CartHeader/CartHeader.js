import React from 'react';
import cx from 'classnames';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
// import Props from './CartHeader.types';
import styles from './CartHeader.module.css';

const CartHeader = ({ className, copy, dataTestRef, handleOnClose }) => {
  const classSet = cx(styles.base, className);

  return (
    <header className={classSet} data-test-ref={dataTestRef}>
      <div className={cx(styles.label, styles.name)}>Cart</div>
      <div className={cx(styles.label, styles.size)}>Size</div>
      <div className={cx(styles.label, styles.quantity)}>Quantity</div>
      <div className={cx(styles.label, styles.remove)} />
      <div className={cx(styles.label, styles.price)}>
        <Button
          className={styles.closeButton}
          inline={true}
          onClick={handleOnClose}
          title={copy.closeCart}
        >
          <Icon
            className={styles.closeIcon}
            height={13}
            name="close"
            width={13}
          />
        </Button>
      </div>
    </header>
  );
};

CartHeader.defaultProps = {};

export default CartHeader;
