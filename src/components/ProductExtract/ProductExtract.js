import React, { forwardRef, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Image from '~/components/Image';
import styles from './ProductExtract.module.css';
import { HEADING } from '~/constants';

import { Heading, Hyperlink } from '~/components';

const ProductExtract = forwardRef(function ProductExtractRef(
  {
    className,
    dataTestRef,
    hasBottomBorder,
    isVisible,
    product,
    theme,
    itemNum,
    works,
  },
  ref,
) {
  const classSet = cx(
    styles.base,
    styles[theme],
    {
      [styles.hasBottomBorder]: hasBottomBorder,
      [styles.slideIn]: isVisible,
    },
    styles[`item${itemNum}`],
    className,
  );

  const linkClassSet = cx(styles.link);

  const headingClassSet = cx(
    styles.heading,
    {
      [styles.slideIn]: isVisible,
    },
    className,
  );

  const productNameClassSet = cx(
    styles.productName,
    {
      [styles.slideIn]: isVisible,
    },
    className,
  );

  const productImageClassSet = cx(
    styles.productImage,
    {
      [styles.slideIn]: isVisible,
    },
    className,
  );

  const isEmptyObject = value => {
    return Object.keys(value).length === 0 && value.constructor === Object;
  };

  if (!product || isEmptyObject(product)) {
    return null;
  }

  return (
    <Fragment>
      <div className={classSet} ref={ref}>
        <Hyperlink
          className={linkClassSet}
          dataTestRef={dataTestRef}
          title={product.name}
          url={product.url}
        >
          <Heading
            className={headingClassSet}
            level={HEADING.LEVEL.FOUR}
            size={HEADING.SIZE.X_X_SMALL}
          >
            <span>{works}</span>
          </Heading>
          <div className={productNameClassSet}>
            <span>{product.name}</span>
          </div>
          <div className={productImageClassSet}>
            <Image
              altText={product.image.altText}
              small={product.image.small}
            />
          </div>
        </Hyperlink>
      </div>
    </Fragment>
  );
});

ProductExtract.propTypes = {
  className: PropTypes.string,
  dataTestRef: PropTypes.string.isRequired,
  hasBottomBorder: PropTypes.bool,
  isVisible: PropTypes.bool,
  itemNum: PropTypes.number,
  product: PropTypes.shape({
    image: PropTypes.object,
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  theme: PropTypes.oneOf(['dark', 'light']),
  works: PropTypes.string,
};

ProductExtract.defaultProps = {
  className: undefined,
  dataTestRef: undefined,
  hasBottomBorder: false,
  isVisible: true,
  itemNum: 1,
  product: {
    image: {
      altText: 'Product Extract',
    },
    name: 'Product Extract',
    url: '/',
  },
  theme: 'dark',
  works: 'Works well with',
};

export default ProductExtract;
