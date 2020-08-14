import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './ProductGridItem.module.css';

const ProductGridItem = ({ className }) => {
  const classSet = cx(styles.base, className);

  return (
    <div className={classSet}>
      <p>Product grid item - mobile first</p>
      <p>Image</p>
      <p>Product title</p>
      <p>radio buttons</p>
      <p>Button add to cart</p>
      <p>list items</p>
    </div>
  );
};

ProductGridItem.propTypes = {
  className: PropTypes.string,
};

ProductGridItem.defaultProps = {
  className: undefined,
};

export default ProductGridItem;
