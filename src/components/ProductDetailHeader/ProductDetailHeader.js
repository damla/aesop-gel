import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useProductDetailContext } from '~/contexts/ProductDetail.context';
import Breadcrumbs from '~/components/Breadcrumbs';
import Hidden from '~/components/Hidden';
import ProductDetailTitle from './components/ProductDetailTitle';
import ProductDetailBody from './components/ProductDetailBody';
import ProductDetailImage from './components/ProductDetailImage';
import styles from './ProductDetailHeader.module.css';

const ProductDetailHeader = ({ breadcrumbs, className, copy, theme }) => {
  const classSet = cx(styles.base, className);
  const { productDetail } = useProductDetailContext();

  return (
    <div className={classSet}>
      <Hidden isLarge={true} isMedium={true} isXLarge={true}>
        <Breadcrumbs
          className={styles.breadcrumbs}
          items={breadcrumbs?.items}
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
          <ProductDetailTitle
            description={productDetail?.description}
            productName={productDetail?.productName}
            theme={theme}
          />
          <ProductDetailBody
            copy={{
              cart: productDetail?.cartDisclaimer,
              ingredients: {
                heading: copy?.ingredients?.heading,
                label: copy?.ingredients?.label,
                title: copy?.ingredients?.title,
              },
            }}
            definitionList={productDetail?.definitionList}
            ingredients={productDetail?.ingredients}
            keyIngredient={productDetail?.keyIngredient}
            productName={productDetail?.productName}
            theme={theme}
          />
        </div>
        <ProductDetailImage className={styles.image} theme={theme} />
      </div>
    </div>
  );
};

ProductDetailHeader.propTypes = {
  breadcrumbs: PropTypes.object,
  className: PropTypes.string,
  copy: PropTypes.shape({
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
