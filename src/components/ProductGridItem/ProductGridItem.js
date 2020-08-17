import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { HEADING } from '~/constants';
import { useProductDetailContext, useVariantSelectContext } from '~/contexts';
import { getVariantRadioOptions } from '~/utils/product';

import AddToCartButton from '~/components/AddToCartButton';
import DefinitionList from '~/components/DefinitionList';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import RadioGroup from '~/components/RadioGroup';

import styles from './ProductGridItem.module.css';

const ProductGridItem = ({ className, copy, theme, url }) => {
  const {
    selectedVariant,
    onVariantChange,
    variants,
  } = useVariantSelectContext();

  const { productDetail } = useProductDetailContext();

  if (!productDetail) return null;

  const { definitionList, productName } = productDetail;

  const variantRadioOptions = getVariantRadioOptions(variants);
  const classSet = cx(styles.base, className);

  const RADIO_GROUP_NAME = 'sku';
  const RADIO_GROUP_DATA_TEST_REF = 'PRODUCT_GRID_ITEM_VARIANT_SELECT';
  const ADD_TO_CART_BUTTON_DATA_TEST_REF = 'PRODUCT_GRID_ITEM_ADD_TO_CART_CTA';

  return (
    <div className={classSet}>
      <h3>Product grid item - mobile first</h3>
      <p>Image</p>

      <Heading
        hasMediumWeightFont={true}
        level={HEADING.LEVEL.FIVE}
        size={HEADING.SIZE.X_X_SMALL}
        theme={theme}
      >
        <Hyperlink className={styles.productNameLink} url={url}>
          {productName}
        </Hyperlink>
      </Heading>

      <RadioGroup
        className={styles.variants}
        dataTestRef={RADIO_GROUP_DATA_TEST_REF}
        name={RADIO_GROUP_NAME}
        onChange={e => onVariantChange(e, variants)}
        options={variantRadioOptions}
        theme={theme}
        value={selectedVariant.sku}
      />

      <AddToCartButton
        className={styles.addToCartButton}
        copy={copy.addToCart}
        dataTestRef={ADD_TO_CART_BUTTON_DATA_TEST_REF}
        isFullWidth={true}
        theme={theme}
      />

      <DefinitionList
        className={styles.definitionList}
        hasBottomBorder={true}
        items={definitionList}
        theme={theme}
      />
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
  url: PropTypes.string,
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
  url: undefined,
};

export default ProductGridItem;
