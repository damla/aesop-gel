import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { getHeadingLevel, getSubHeadingLevel } from './SectionHeading.utils';
import SectionHeading from './SectionHeading';

configure({ adapter: new Adapter() });

describe('<SectionHeading />', () => {
  it('should be defined', () => {
    expect(SectionHeading).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <SectionHeading
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
        <SectionHeading
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
        <SectionHeading
          eyebrow="Eyebrow: Offers fortification of the highest order against free radicals."
          heading="Heading: Fortification of the highest order. Parsley Seed Anti-Oxidant Facial Hydrating Cream."
          id="Anti-Oxidant"
          subHeading="SubHeading: Parsley Seed Cream. Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals."
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with subHeading, eyebrow variation, font family correctly', () => {
    const tree = renderer
      .create(
        <SectionHeading
          eyebrow="Eyebrow: Offers fortification of the highest order against free radicals."
          heading="Heading: Fortification of the highest order. Parsley Seed Anti-Oxidant Facial Hydrating Cream."
          id="Anti-Oxidant"
          subHeading="SubHeading: Parsley Seed Cream. Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals."
          titleFont="Zapf"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('SectionHeading.utils', () => {
  it('renders heading as an `h2` if no `eyebrow` prop is passed', () => {
    expect(getHeadingLevel(undefined)).toEqual('2');
  });

  it('renders heading as an `h3` if `eyebrow` prop is passed', () => {
    expect(getHeadingLevel('eyebrow')).toEqual('3');
  });

  it('renders subHeading as an `h2` if no `eyebrow` or `heading` prop are passed', () => {
    expect(getSubHeadingLevel(undefined, undefined)).toEqual('2');
  });

  it('renders subHeading as an `h3` if `eyebrow` prop is passed but no `heading` prop is passed', () => {
    expect(getSubHeadingLevel('eyebrow', undefined)).toEqual('3');
  });

  it('renders subHeading as an `h3` if no `eyebrow` prop is passed but `heading` prop is passed', () => {
    expect(getSubHeadingLevel(undefined, 'subHeading')).toEqual('3');
  });

  it('renders subHeading as an `h4` if `eyebrow` and `heading` props are passed', () => {
    expect(getSubHeadingLevel('eyebrow', 'subHeading')).toEqual('4');
  });
});
