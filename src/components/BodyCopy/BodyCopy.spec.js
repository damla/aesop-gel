import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import BodyCopy from './BodyCopy';
import BodyCopyFixture from './BodyCopy.fixture';

configure({ adapter: new Adapter() });

describe('<BodyCopy />', () => {
  it('should be defined', () => {
    expect(BodyCopy).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <BodyCopy
          copy="Parsley Seed Cream. [The Paris Review](http://theparisreview.org) Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals."
          cta={BodyCopyFixture.cta}
          eyebrow="Recommended Nearby"
          heading="Aesop & The Paris Review: A Partnership Extended"
          id="Anti-Oxidant"
          subHeading="Active Nutrients"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders promary title as an `h2` if no `eyebrow` prop is passed', () => {
    const tree = renderer
      .create(
        <BodyCopy heading="Aesop & The Paris Review: A Partnership Extended" />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders promary title as an `h2` if no `eyebrow` or `primaryTitle` prop are passed', () => {
    const tree = renderer
      .create(
        <BodyCopy subHeading="Aesop & The Paris Review: A Partnership Extended" />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
