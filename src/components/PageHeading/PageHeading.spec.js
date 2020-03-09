import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import PageHeading from './PageHeading';

configure({ adapter: new Adapter() });

describe('<PageHeading />', () => {
  it('should be defined', () => {
    expect(PageHeading).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <PageHeading
          heading="Title: Fortification of the highest order. Parsley Seed Anti-Oxidant Facial Hydrating Cream."
          id="Anti-Oxidant"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with subHeading variation correctly', () => {
    const tree = renderer
      .create(
        <PageHeading
          heading="Heading: Fortification of the highest order."
          id="Parsley"
          subHeading="Subcopy: Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with subHeading and eyebrow variation correctly', () => {
    const tree = renderer
      .create(
        <PageHeading
          eyebrow="Eyebrow: Offers fortification of the highest order against free radicals."
          heading="Heading: Fortification of the highest order. Parsley Seed Anti-Oxidant Facial Hydrating Cream."
          id="Anti-Oxidant"
          subHeading="SubHeading: Parsley Seed Cream. Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals."
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
