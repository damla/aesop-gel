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
          // introduction={HorizontalProductDisplayAccordionFixture.introduction}

          products={HorizontalProductDisplayAccordionFixture.products}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders component correctly if no `introduction` prop is provided', () => {
    const tree = renderer
      .create(
        <HorizontalProductDisplayAccordion
          products={HorizontalProductDisplayAccordionFixture.products}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders component correctly if no `url` member is provided on the `slides` prop', () => {
    const tree = renderer
      .create(
        <HorizontalProductDisplayAccordion
          products={[
            {
              open:
                HorizontalProductDisplayAccordionFixture.slides[0].description,
              heading:
                HorizontalProductDisplayAccordionFixture.slides[0].heading,
              image: HorizontalProductDisplayAccordionFixture.slides[0].image,
            },
          ]}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  // @TODO Address hooks + version of react + testing suite
  // it('should return `null` if the length of the `slides` prop is 0', () => {
  //   const component = shallow(<HorizontalProductDisplayAccordion slides={[]} />);
  //   expect(component.type()).toEqual(null);
  // });
});
