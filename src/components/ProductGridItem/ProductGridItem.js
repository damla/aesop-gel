import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// import { useVariantSelectContext } from '~/contexts';
import AddToCartButton from '~/components/AddToCartButton';

import styles from './ProductGridItem.module.css';

const ProductGridItem = ({ className, copy, theme }) => {
  // const {
  //   selectedVariant,
  //   onVariantChange,
  //   variants,
  // } = useVariantSelectContext();

  const classSet = cx(styles.base, className);

  const ADD_TO_CART_BUTTON_DATA_TEST_REF = 'PRODUCT_GRID_ITEM_ADD_TO_CART_CTA';

  return (
    <div className={classSet}>
      <p>Product grid item - mobile first</p>
      <p>Image</p>
      <p>Product title</p>
      <p>radio buttons</p>

      <p>Button add to cart</p>
      <AddToCartButton
        className={styles.addToCartButton}
        copy={copy.addToCart}
        dataTestRef={ADD_TO_CART_BUTTON_DATA_TEST_REF}
        isFullWidth={false}
        theme={theme}
      />

      <p>list items</p>
    </div>
  );
};

ProductGridItem.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    addToCart: PropTypes.shape({
      cartAction: PropTypes.string,
      updateNotification: PropTypes.string,
      outOfStock: PropTypes.shape({
        label: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
  theme: PropTypes.oneOf(['dark', 'light']),
};

ProductGridItem.defaultProps = {
  className: undefined,
  copy: {
    addToCart: {
      cartAction: undefined,
      updateNotification: undefined,
      outOfStock: {
        label: undefined,
        title: undefined,
      },
    },
  },
  theme: 'dark',
};

export default ProductGridItem;
