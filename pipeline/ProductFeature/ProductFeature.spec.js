import React from 'react';
import renderer from 'react-test-renderer';
import ProductFeature from './ProductFeature';

describe('<ProductFeature />', () => {
  it('should be defined', () => {
    expect(ProductFeature).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <ProductFeature
          image={{
            altText: 'Image of Parsley Seed Anti-Oxidant Eye Cream',
            large:
              'https://release.aesop-web-ui.aesopdigital.io/images/square/large/item-1.jpg 2x',
          }}
          productDetails={{
            name: 'Parsley Seed Anti-Oxidant Eye Cream',
            priceDetails: '0.3 fl oz. / $87',
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with a wrapping hyperlink if the `hyperlink` prop is passed', () => {
    const tree = renderer
      .create(
        <ProductFeature
          hyperlink={{
            url: 'https://aesop.com',
          }}
          image={{
            altText: 'Image of Parsley Seed Anti-Oxidant Eye Cream',
            large:
              'https://release.aesop-web-ui.aesopdigital.io/images/square/large/item-1.jpg 2x',
          }}
          productDetails={{
            name: 'Parsley Seed Anti-Oxidant Eye Cream',
            priceDetails: '0.3 fl oz. / $87',
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
