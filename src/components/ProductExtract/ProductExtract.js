import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import cx from 'classnames';
import { HEADING } from '~/constants';
import { ConditionalWrapper, Heading, Hyperlink, Image } from '~/components';
import styles from './ProductExtract.module.css';

const ProductExtract = forwardRef(function ProductExtractRef(
  {
    className,
    dataTestRef,
    hasBottomBorder,
    isVisible,
    itemNum,
    product,
    theme,
    works,
  },
  ref,
) {
  const classSet = cx(
    styles.base,
    styles[theme],
    {
      [styles.slideIn]: isVisible,
    },
    styles[`item${itemNum}`],
    className,
  );

  const linkClassSet = cx(styles.link);

  const flexClassSet = cx(styles.test, styles.delayAnimation, {
    [styles.hasBottomBorder]: hasBottomBorder,
    [styles.slideIn]: isVisible,
  });

  const headingClassSet = cx(
    styles.heading,
    styles.delayAnimation,
    {
      [styles.slideIn]: isVisible,
    },
    className,
  );

  const productNameClassSet = cx(
    styles.productName,
    styles.delayAnimation,
    {
      [styles.slideIn]: isVisible,
    },
    className,
  );

  const productImageClassSet = cx(
    styles.productImage,
    styles.delayAnimation,
    {
      [styles.slideIn]: isVisible,
    },
    className,
  );

  if (!product || isEmpty(product)) {
    return null;
  }

  return (
    <div className={classSet} ref={ref}>
      <ConditionalWrapper
        condition={!!product.url}
        wrapper={children => (
          <Hyperlink
            className={linkClassSet}
            dataTestRef={dataTestRef}
            title={product.name}
            url={product.url}
          >
            {children}
          </Hyperlink>
        )}
      >
        <div className={flexClassSet}>
          <div>
            <Heading
              className={headingClassSet}
              level={HEADING.LEVEL.FOUR}
              size={HEADING.SIZE.X_X_SMALL}
            >
              <span>{works}</span>
            </Heading>
            <div className={productNameClassSet}>
              <div>
                <span>{product.name}</span>
              </div>
            </div>
          </div>
          <div className={productImageClassSet}>
            <Image
              altText={product.image.altText}
              large={product.image.small}
              medium={product.image.small}
              small={product.image.small}
            />
          </div>
        </div>
      </ConditionalWrapper>
    </div>
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
  },
  theme: 'dark',
  works: 'Works well with',
};

export default ProductExtract;
