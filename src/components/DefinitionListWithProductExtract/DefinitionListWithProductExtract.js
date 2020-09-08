import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import DefinitionList from '../DefinitionList/DefinitionList';
import ProductExtract from '../ProductExtract/ProductExtract';

const DefinitionListWithProductExtract = ({
  isVisible,
  items,
  product,
  productBottomBorder,
  itemBottomBorder,
  productItemNumber,
  theme,
  works,
}) => {
  return (
    <Fragment>
      <DefinitionList
        hasBottomBorder={itemBottomBorder}
        isVisible={isVisible}
        items={items}
      />
      <ProductExtract
        hasBottomBorder={productBottomBorder}
        isVisible={isVisible}
        itemNum={productItemNumber}
        product={product}
        theme={theme}
        works={works}
      />
    </Fragment>
  );
};

DefinitionListWithProductExtract.propTypes = {
  className: PropTypes.string,
  dataTestRef: PropTypes.string.isRequired,
  productBottomBorder: PropTypes.bool,
  itemBottomBorder: PropTypes.bool,
  items: PropTypes.object,
  isVisible: PropTypes.bool,
  productItemNumber: PropTypes.number,
  product: PropTypes.shape({
    image: PropTypes.object,
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  works: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

DefinitionListWithProductExtract.defaultProps = {
  className: undefined,
  dataTestRef: undefined,
  items: [{}],
  productBottomBorder: false,
  itemBottomBorder: false,
  isVisible: true,
  productItemNumber: 1,
  product: {
    image: {
      altText: 'Product Extract',
    },
  },
  works: 'Works well with',
  theme: 'dark',
  url: '/',
};

export default DefinitionListWithProductExtract;
