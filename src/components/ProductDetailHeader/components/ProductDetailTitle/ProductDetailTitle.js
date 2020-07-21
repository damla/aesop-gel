import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useProductDetailContext } from '~/contexts';
import Heading from '~/components/Heading';
import Paragraph from '~/components/Paragraph';
import Transition from '~/components/Transition';
import styles from './ProductDetailTitle.module.css';

const ProductDetailTitle = ({ className, id, theme }) => {
  const { productDetail } = useProductDetailContext();

  if (!productDetail) return null;

  const { description, productName } = productDetail;
  const classSet = cx(styles.base, className);

  return (
    <Transition isActiveOnMount={true} type="slowFade">
      <header className={classSet} id={`product-detail-header-${id}`}>
        <Heading
          className={cx(styles.productName, {
            [styles.isOnlyChild]: !description,
          })}
          level="1"
          size="xLarge"
          theme={theme}
        >
          {productName}
        </Heading>

        {description && (
          <Paragraph className={styles.description} theme={theme}>
            {description}
          </Paragraph>
        )}
      </header>
    </Transition>
  );
};

ProductDetailTitle.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ProductDetailTitle.defaultProps = {
  className: undefined,
  id: undefined,
  theme: 'dark',
};

export default ProductDetailTitle;
