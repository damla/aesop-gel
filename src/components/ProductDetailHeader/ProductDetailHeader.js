import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useProductDetailContext } from '~/contexts/ProductDetail.context';
import { Breadcrumbs, Hidden } from '~/components';
import ProductDetailBody from './components/ProductDetailBody';
import ProductDetailImage from './components/ProductDetailImage';
import styles from './ProductDetailHeader.module.css';

const ProductDetailHeader = ({ breadcrumbs, className, copy, theme }) => {
  const { productDetail } = useProductDetailContext();
  const classSet = cx(styles.base, className);

  return (
    <div className={classSet}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Hidden isSmall={true}>
            <Breadcrumbs
              className={styles.breadcrumbs}
              items={breadcrumbs.items}
              theme={theme}
            />
          </Hidden>
          <ProductDetailBody
            copy={{
              size: copy?.size,
              ingredients: {
                heading: copy?.ingredients?.heading,
                label: copy?.ingredients?.label,
                title: copy?.ingredients?.title,
              },
            }}
            theme={theme}
          />
        </div>

        <div className={styles.image}>
          <Hidden isLarge={true} isMedium={true} isXLarge={true}>
            <Breadcrumbs
              className={styles.breadcrumbs}
              items={breadcrumbs.items}
              theme={theme}
            />
          </Hidden>
          <ProductDetailImage
            copy={{
              cart: productDetail?.cartDisclaimer,
            }}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

ProductDetailHeader.propTypes = {
  breadcrumbs: PropTypes.object,
  className: PropTypes.string,
  copy: PropTypes.shape({
    size: PropTypes.string,
    ingredients: PropTypes.shape({
      heading: PropTypes.string,
      label: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  theme: PropTypes.oneOf(['dark', 'light']),
};

ProductDetailHeader.defaultProps = {
  breadcrumbs: undefined,
  className: undefined,
  copy: undefined,
  theme: 'dark',
};

export default ProductDetailHeader;
