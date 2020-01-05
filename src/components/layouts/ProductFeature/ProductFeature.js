import React from 'react';
import cx from 'classnames';
import Hyperlink from '~/components/elements/Hyperlink';
import Image from '~/components/elements/Image';
import PROP_TYPES from './ProductFeature.prop-types';
import styles from './ProductFeature.module.css';

const ProductImage = ({ image }) => (
  <Image
    altText={image.altText}
    className={styles.image}
    large={image.large}
    medium={image.medium}
    small={image.small}
  />
);

const ProductInfo = ({ productDetails }) => (
  <div className={styles.productCaption}>
    <div className={styles.name}>{productDetails.name}</div>
    <div className={styles.price}>{productDetails.priceDetails}</div>
  </div>
);

const ProductFeature = ({ className, hyperlink, image, productDetails }) => {
  const classSet: string = cx(styles.base, className);

  return (
    <section className={classSet}>
      {hyperlink ? (
        <div className={styles.productImage}>
          <Hyperlink
            openInANewWindow={hyperlink.openInANewWindow}
            url={hyperlink.url}
          >
            <ProductImage image={image} />
            <ProductInfo productDetails={productDetails} />
          </Hyperlink>
        </div>
      ) : (
        <div className={styles.productImage}>
          <ProductImage image={image} />
          <ProductInfo productDetails={productDetails} />
        </div>
      )}
    </section>
  );
};

ProductFeature.propTypes = PROP_TYPES;

export default ProductFeature;
