import React from 'react';
import PropTypes from 'prop-types';

const ProductGridItem = ({ prop }) => {
  return (
    <div>
      <p>Product grid item - mobile first</p>
      <p>Image</p>
      <p>Product title</p>
      <p>radio buttons</p>
      <p>Button add to cart</p>
      <p>list items</p>
    </div>
  );
};

ProductGridItem.propTypes = {};

ProductGridItem.defaultProps = {};

export default ProductGridItem;
