import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import get from 'lodash/get';
import Image from '~/components/Image';
// import RadioGroup from '~/components/RadioGroup';
import Transition from '~/components/Transition';
import styles from './ProductDetailImage.module.css';

// <RadioGroup
//   className={styles.variants}
//   name="sku"
//   onChange={e => onVariantChange(e)}
//   options={variantRadioOptions}
//   testReference="selectedVariant"
//   value={selectedOption}
// />

const ProductDetailImage = ({
  className,
  id,
  image,
  onVariantChange,
  selectedOption,
  theme,
  variantOptions,
}) => {
  if (!image) {
    return null;
  }

  const classSet = cx(styles.base, styles[theme], className);
  const { altText, sizes } = image;

  const variantRadioOptions = variantOptions.map(option => ({
    label: option.size || '',
    value: option.sku,
  }));

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
        {variantOptions.length === 1 ? (
          <div className={styles.singleVariantLabel}>
            <span>{variantOptions[0].size}</span>
          </div>
        ) : (
          <div />
        )}
      </div>
    </Transition>
  );
};

ProductDetailImage.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.shape({
    altText: PropTypes.string.isRequired,
    sizes: PropTypes.shape({
      large: PropTypes.string,
      medium: PropTypes.string,
      small: PropTypes.string,
    }).isRequired,
  }),
  onVariantChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
  variantOptions: PropTypes.arrayOf(
    PropTypes.shape({
      sku: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
    }),
  ),
};

ProductDetailImage.defaultProps = {
  className: undefined,
  id: undefined,
  image: {},
  onVariantChange: undefined,
  selectedOption: undefined,
  theme: 'dark',
  variantOptions: [{ size: '50 mL', sku: 'ARD33' }],
};

export default ProductDetailImage;
