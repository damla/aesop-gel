import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import { useVariantSelectContext } from '~/contexts/VariantSelect.context';
import Image from '~/components/Image';
import RadioGroup from '~/components/RadioGroup';
import Transition from '~/components/Transition';
import styles from './ProductDetailImage.module.css';

const ProductDetailImage = ({ className, id, theme, variantOptions }) => {
  const {
    onVariantChange,
    selectedVariant,
    setSelectedVariant,
  } = useVariantSelectContext();

  useEffect(() => {
    setSelectedVariant(variantOptions[0]);
  }, [variantOptions, setSelectedVariant]);

  if (!selectedVariant || !selectedVariant.image) {
    return null;
  }

  const classSet = cx(styles.base, styles[theme], className);

  const variantRadioOptions = variantOptions.map(option => ({
    label: option.size || '',
    value: option.sku,
  }));

  const { altText, sizes } = selectedVariant.image;

  return (
    <Transition isActiveOnMount={true} type="shiftInLeft">
      <div className={classSet} id={`product-${id}`}>
        <Image
          altText={altText}
          className={styles.image}
          large={get(sizes, 'large', '')}
          medium={get(sizes, 'medium', '')}
          small={get(sizes, 'small', '')}
        />
        <RadioGroup
          className={styles.variants}
          name="sku"
          onChange={e => onVariantChange(e, variantOptions)}
          options={variantRadioOptions}
          testReference="selectedVariant"
          value={selectedVariant.sku || variantRadioOptions[0].value}
        />
      </div>
    </Transition>
  );
};

ProductDetailImage.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  variantOptions: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        altText: PropTypes.string.isRequired,
        sizes: PropTypes.shape({
          large: PropTypes.string,
          medium: PropTypes.string,
          small: PropTypes.string,
        }).isRequired,
      }),
      sku: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      price: PropTypes.string,
    }),
  ),
};

ProductDetailImage.defaultProps = {
  className: undefined,
  id: undefined,
  theme: 'dark',
  variantOptions: [
    {
      size: '50 mL',
      sku: 'ARD33',
      price: '$56',
      image: {
        altText: 'here is a descriptive alt tag',
        sizes: {
          large: '/assets/images/Product/variant-one-large.png',
          medium: '/assets/images/Product/variant-one-medium.png',
          small: '/assets/images/Product/variant-one-small.png',
        },
      },
    },
    {
      size: '100 mL',
      sku: 'ARD32',
      price: '$86',
      image: {
        altText: 'here is a descriptive alt tag',
        sizes: {
          large: '/assets/images/Product/variant-two-large.png',
          medium: '/assets/images/Product/variant-two-medium.png',
          small: '/assets/images/Product/variant-two-small.png',
        },
      },
    },
  ],
};

export default ProductDetailImage;
