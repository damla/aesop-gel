import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { VariantSelectContextProvider } from '~/contexts';
import renderer from 'react-test-renderer';
import AccordionProductFixture from './AccordionProduct.fixture.js';
import AccordionProduct from './AccordionProduct';

configure({ adapter: new Adapter() });

describe('<AccordionProduct />', () => {
  it('should be defined', () => {
    expect(AccordionProduct).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <VariantSelectContextProvider
          variants={AccordionProductFixture.openState.product.variants}
        >
          <AccordionProduct
            addToCart={AccordionProductFixture.addToCart}
            closedState={AccordionProductFixture.closedState}
            id={AccordionProductFixture.id}
            openState={AccordionProductFixture.openState}
          />
        </VariantSelectContextProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
