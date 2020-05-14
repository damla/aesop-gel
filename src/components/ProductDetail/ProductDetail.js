import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Breadcrumbs from '~/components/Breadcrumbs';
import Hidden from '~/components/Hidden';
import ProductDetailHeader from './components/ProductDetailHeader';
import ProductDetailBody from './components/ProductDetailBody';
import ProductDetailImage from './components/ProductDetailImage';
import styles from './ProductDetail.module.css';

import ProductDetailHeaderFixture from './components/ProductDetailHeader/ProductDetailHeader.fixture';
import ProductDetailBodyFixture from './components/ProductDetailBody/ProductDetailBody.fixture';

const ProductDetail = ({ breadcrumbs, className, theme }) => {
  const classSet = cx(styles.base, className);

  return (
    <div className={classSet}>
      <Hidden isLarge={true} isMedium={true} isXLarge={true}>
        <Breadcrumbs
          className={styles.breadcrumbs}
          items={breadcrumbs.items}
          theme={theme}
        />
      </Hidden>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Hidden isSmall={true}>
            <Breadcrumbs
              className={styles.breadcrumbs}
              items={breadcrumbs.items}
              theme={theme}
            />
          </Hidden>
          <ProductDetailHeader
            description={ProductDetailHeaderFixture.description}
            productName={ProductDetailHeaderFixture.productName}
            theme={theme}
          />
          <ProductDetailBody {...ProductDetailBodyFixture} theme={theme} />
        </div>
        <ProductDetailImage className={styles.image} theme={theme} />
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  breadcrumbs: PropTypes.object,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ProductDetail.defaultProps = {
  breadcrumbs: undefined,
  className: undefined,
  theme: 'dark',
};

export default ProductDetail;
