import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '~/components/Heading';
import Paragraph from '~/components/Paragraph';
import Transition from '~/components/Transition';
import styles from './ProductDetailTitle.module.css';

const ProductDetailTitle = ({
  className,
  description,
  id,
  productName,
  theme,
}) => {
  const classSet = cx(styles.base, className);

  return (
    <Transition isActiveOnMount={true} type="slowFade">
      <header className={classSet} id={`product-description-header-${id}`}>
        <Heading
          className={styles.productName}
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
  description: PropTypes.string.isRequired,
  id: PropTypes.string,
  productName: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ProductDetailTitle.defaultProps = {
  className: undefined,
  description: undefined,
  id: undefined,
  productName: undefined,
  theme: 'dark',
};

export default ProductDetailTitle;
