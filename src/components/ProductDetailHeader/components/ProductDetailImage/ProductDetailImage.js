import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useProductDetailContext, useVariantSelectContext } from '~/contexts';
import { Hidden, Image, Transition } from '~/components';
import styles from './ProductDetailImage.module.css';

const ProductDetailImage = ({ className, theme }) => {
  const { selectedVariant } = useVariantSelectContext();
  const { productDetail } = useProductDetailContext();

  if (!selectedVariant || !selectedVariant.image) return null;

  const { cartDisclaimer } = productDetail;

  const classSet = cx(styles.base, styles[theme], className);
  const { altText, sizes } = selectedVariant.image;

  return (
    <Transition isActiveOnMount={true} type="shiftInLeft">
      <div className={classSet}>
        <Image
          altText={altText}
          className={styles.image}
          large={sizes?.large}
          medium={sizes?.medium}
          small={sizes?.small}
        />
        <Hidden isMedium={true} isSmall={true}>
          <div className={styles.cartDisclaimer}>{cartDisclaimer}</div>
        </Hidden>
      </div>
    </Transition>
  );
};

ProductDetailImage.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ProductDetailImage.defaultProps = {
  className: undefined,
  theme: 'dark',
};

export default ProductDetailImage;
