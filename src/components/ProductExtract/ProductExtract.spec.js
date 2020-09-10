import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ProductExtract from './ProductExtract';
import ProductExtractFixture from './ProductExtractfixture';

configure({ adapter: new Adapter() });

describe('<ProductExtract />', () => {
  it('should be defined', () => {
    expect(ProductExtract).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <ProductExtract
          dataTestRef={ProductExtractFixture.dataTestRef}
          product={ProductExtractFixture.product}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('returns null product prop is not a populated object', () => {
    const component = shallow(
      <ProductExtract
        dataTestRef={ProductExtractFixture.dataTestRef}
        product={{}}
      />,
    );
    expect(component.type()).toEqual(null);
  });
});
