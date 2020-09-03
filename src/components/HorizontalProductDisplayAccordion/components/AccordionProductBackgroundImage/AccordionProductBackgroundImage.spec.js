import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import AccordionProductBackgroundImage from './AccordionProductBackgroundImage';

configure({ adapter: new Adapter() });

describe('<AccordionProductBackgroundImage />', () => {
  it('should be defined', () => {
    expect(AccordionProductBackgroundImage).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <AccordionProductBackgroundImage
          altText="Image of Milk Cleansing Campaign Aesop 2019"
          cta={{
            id: 'milk-cleansing,jpg',
            url: 'https://www.aesop.com/au/r/philosophy-to-products',
          }}
          large="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_large.png 2x"
          medium="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_medium.png 2x"
          small="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_small.png 2x"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders the picture tag without a Hyperlink if the `cta` prop was not passed', () => {
    const tree = renderer
      .create(
        <AccordionProductBackgroundImage
          altText="Image of Milk Cleansing Campaign Aesop 2019"
          large="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_large.png 2x"
          medium="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_medium.png 2x"
          small="/images/products/Hand_Reverence_Aromatique_Hand_Wash_500mL_small.png 2x"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
