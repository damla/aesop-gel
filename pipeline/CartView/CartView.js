import React from 'react';
import cx from 'classnames';
import { useEscapeKeyListener } from '~/customHooks/useEscapeKeyListener';
import { useOverflowHidden } from '~/customHooks/useOverflowHidden';
import CartCheckoutFixture from './components/CartCheckout/CartCheckout.fixture';
import CartDiscountFixture from './components/CartDiscount/CartDiscount.fixture';
import CartHeaderFixture from './components/CartHeader/CartHeader.fixture';
import CartItemFixture from './components/CartItem/CartItem.fixture';
import CartCheckout from './components/CartCheckout';
import CartDiscount from './components/CartDiscount';
import CartHeader from './components/CartHeader';
import CartInformation from './components/CartInformation';
import CartItem from './components/CartItem';
import Overlay from '~/components/Overlay';
import Transition from '~/components/Transition';
import { useQueryGetCart } from '~/customHooks/api/useQueryGetCart';
import PROP_TYPES from './CartView.prop-types';
import styles from './CartView.module.css';

const CartView = ({ className, copy, handleOnClose, isVisible = false }) => {
  const classSet = cx(styles.base, className);

  useOverflowHidden(isVisible);
  useEscapeKeyListener(handleOnClose);

  const { data, error, loading } = useQueryGetCart();

  if (loading || !data || !data.getCart) {
    return null;
  }

  if (error) {
    console.error('<CartView /> Error:', error);
  }

  return (
    <>
      <Overlay handleClose={handleOnClose} isVisible={isVisible} />
      <Transition
        active={!!isVisible}
        mountOnEnter={true}
        type="slideDown"
        unmountOnExit={true}
      >
        <div className={classSet}>
          <CartHeader
            copy={CartHeaderFixture.copy}
            dataTestRef="CART_HEADING"
            handleOnClose={handleOnClose}
          />
          <ul className={styles.list}>
            {data.getCart.entries.map(entry => (
              <CartItem
                copy={CartItemFixture.copy}
                entryNumber={entry.entryNumber}
                key={entry.product.code}
                maxQuantity={entry.maxQuantity}
                name={entry.product.name}
                price={entry.totalPrice.formattedValue}
                quantity={entry.quantity}
                size={entry.product.size}
                url={entry.product.url}
              />
            ))}
          </ul>
          <CartDiscount
            copy={CartDiscountFixture.copy}
            promotions={data.getCart.appliedProductPromotions}
          />
          <footer className={styles.footer}>
            <CartInformation className={styles.information}>
              {copy.shippingInformation}
            </CartInformation>
            <CartCheckout
              className={styles.checkout}
              copy={CartCheckoutFixture.copy}
              subTotalPrice={data.getCart.subTotal.formattedValue}
            />
            <CartInformation className={styles.payment}>
              {copy.paymentInformation}
            </CartInformation>
          </footer>
        </div>
      </Transition>
    </>
  );
};

CartView.propTypes = PROP_TYPES;

export default CartView;
