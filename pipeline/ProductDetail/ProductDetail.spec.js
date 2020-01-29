import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import ProductDetail from './ProductTemplate';
import ProductDetailFixture from './ProductTemplate.fixture';

configure({ adapter: new Adapter() });

describe('<ProductTemplate />', () => {
  it('should be defined', () => {
    expect(ProductDetail).toBeDefined();
  });

  it('renders base component correctly', async () => {
    const component = renderer.create(
      <ProductDetail data={ProductDetailFixture.data} />,
    );

    await act(async () => {
      await waitForExpect(() => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
