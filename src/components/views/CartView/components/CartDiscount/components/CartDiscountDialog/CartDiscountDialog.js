import React from 'react';
import Heading from '~/components/elements/Heading';
import Modal from '~/components/elements/Modal';
import CartDiscountForm from './components/CartDiscountForm';
import CartDiscountFormFixture from './components/CartDiscountForm/CartDiscountForm.fixture';
// import Props from './CartDiscountDialog.types';
import styles from './CartDiscountDialog.module.css';

const CartDiscountDialog = ({
  copy,
  handleClose,
  isVisible,
}) => {
  return (
    <Modal handleClose={handleClose} isVisible={isVisible}>
      <div className={styles.heading}>
        <Heading level="2" size="xLarge">
          {copy.heading}
        </Heading>
      </div>
      {
        // <CartDiscountForm
        //   copy={CartDiscountFormFixture.copy}
        //   onCompleted={handleClose}
        // />
      }
    </Modal>
  );
};

export default CartDiscountDialog;
