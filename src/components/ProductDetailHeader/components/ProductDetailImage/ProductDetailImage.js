import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useProductDetailContext, useVariantSelectContext } from '~/contexts';
import { useImageTransition } from '~/customHooks';
import Hidden from '~/components/Hidden';
import Image from '~/components/Image';
import Transition from '~/components/Transition';
import styles from './ProductDetailImage.module.css';

const ProductDetailImage = ({ className, theme }) => {
  const imageRef = useRef();
  const { selectedVariant } = useVariantSelectContext();
  const { productDetail } = useProductDetailContext();
  const [currentImage, isImageActive] = useImageTransition(
    selectedVariant?.image,
    imageRef,
  );

  if (!selectedVariant?.image) return null;

  const { cartDisclaimer } = productDetail;
  const classSet = cx(styles.base, styles[theme], className);
  const { altText, sizes } = currentImage;

  return (
    <Transition isActiveOnMount={true} type="shiftInLeft">
      <div className={classSet}>
        <Transition isActive={isImageActive} type="fade">
          <Image
            altText={altText}
            className={styles.image}
            large={sizes?.large}
            medium={sizes?.medium}
            ref={imageRef}
            small={sizes?.small}
          />
        </Transition>
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
