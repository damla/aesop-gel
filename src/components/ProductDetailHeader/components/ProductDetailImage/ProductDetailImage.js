import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useVariantSelectContext } from '~/contexts/VariantSelect.context';
import Image from '~/components/Image';
import RadioGroup from '~/components/RadioGroup';
import Transition from '~/components/Transition';
import styles from './ProductDetailImage.module.css';

const ProductDetailImage = ({ className, id, theme }) => {
  const {
    onVariantChange,
    selectedVariant,
    setSelectedVariant,
    variantOptions,
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
          large={sizes?.large}
          medium={sizes?.medium}
          small={sizes?.small}
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
};

ProductDetailImage.defaultProps = {
  className: undefined,
  id: undefined,
  theme: 'dark',
};

export default ProductDetailImage;
