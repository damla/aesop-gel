import React from 'react';
import cx from 'classnames';
import Button from '~/components/elements/Button';
import Props from './CartCheckout.types';
import styles from './CartCheckout.module.css';

const CartCheckout: React.FunctionComponent<Props> = ({
  copy,
  className,
  subTotalPrice,
}) => {
  const classSet: string = cx(styles.base, className);

  return (
    <div className={classSet}>
      <div className={styles.subTotalContainer}>
        <div className={styles.subTotalLabel}>{copy.subTotal}</div>
        <div className={styles.subTotalPrice}>{subTotalPrice}</div>
      </div>
      <Button
        className={styles.checkoutButton}
        title={copy.checkoutButtonTitle}
        to="/checkout/"
      >
        {copy.checkoutButton}
      </Button>
    </div>
  );
};

export default CartCheckout;
