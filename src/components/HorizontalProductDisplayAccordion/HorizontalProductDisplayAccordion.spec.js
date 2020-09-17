import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import HorizontalProductDisplayAccordionFixture from './HorizontalProductDisplayAccordion.fixture';
import HorizontalProductDisplayAccordion from './HorizontalProductDisplayAccordion';

configure({ adapter: new Adapter() });

describe('<HorizontalProductDisplayAccordion />', () => {
  it('should be defined', () => {
    expect(HorizontalProductDisplayAccordion).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <HorizontalProductDisplayAccordion
          addToCartCopy={HorizontalProductDisplayAccordionFixture.addToCartCopy}
          products={HorizontalProductDisplayAccordionFixture.products}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
