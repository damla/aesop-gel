import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import PageTitle from './PageTitle';

configure({ adapter: new Adapter() });

describe('<PageTitle />', () => {
  it('should be defined', () => {
    expect(PageTitle).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <PageTitle id="Anti-Oxidant">
          Title: Fortification of the highest order. Parsley Seed Anti-Oxidant
          Facial Hydrating Cream.
        </PageTitle>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with subcopy variation correctly', () => {
    const tree = renderer
      .create(
        <PageTitle
          id="Parsley"
          subcopy="Subcopy: Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL"
        >
          Title: Fortification of the highest order.
        </PageTitle>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders with subcopy and eyebrow variation correctly', () => {
    const tree = renderer
      .create(
        <PageTitle
          eyebrow="Eyebrow: Offers fortification of the highest order against free radicals."
          id="Anti-Oxidant"
          subcopy="Subcopy: Parsley Seed Cream. Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals."
        >
          Title: Fortification of the highest order. Parsley Seed Anti-Oxidant
          Facial Hydrating Cream.
        </PageTitle>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
