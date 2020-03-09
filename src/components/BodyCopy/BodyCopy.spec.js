import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import BodyCopy from './BodyCopy';
import { getPrimaryTitleLevel, getSecondaryTitleLevel } from './BodyCopy.utils';

configure({ adapter: new Adapter() });

describe('<BodyCopy />', () => {
  it('should be defined', () => {
    expect(BodyCopy).toBeDefined();
  });

  it('renders base component correctly', () => {
    const button = {
      id: 'button-id',
      text: 'Read more',
      url: 'http://aesop.com',
      openInANewWindow: true,
    };

    const tree = renderer
      .create(
        <BodyCopy
          copy="Parsley Seed Cream. [The Paris Review](http://theparisreview.org) Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals."
          cta={button}
          eyebrow="Recommended Nearby"
          id="Anti-Oxidant"
          primaryTitle="Aesop & The Paris Review: A Partnership Extended"
          secondaryTitle="Active Nutrients"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders promary title as an `h2` if no `eyebrow` prop is passed', () => {
    const tree = renderer
      .create(
        <BodyCopy primaryTitle="Aesop & The Paris Review: A Partnership Extended" />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders promary title as an `h2` if no `eyebrow` or `primaryTitle` prop are passed', () => {
    const tree = renderer
      .create(
        <BodyCopy secondaryTitle="Aesop & The Paris Review: A Partnership Extended" />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders primary title as an `h2` if no `eyebrow` prop is passed', () => {
    expect(getPrimaryTitleLevel(undefined)).toEqual('2');
  });

  it('renders primary title as an `h3` if `eyebrow` prop is passed', () => {
    expect(getPrimaryTitleLevel('eyebrow')).toEqual('3');
  });

  it('renders secondary title as an `h2` if no `eyebrow` or `primaryTitle` prop are passed', () => {
    expect(getSecondaryTitleLevel(undefined, undefined)).toEqual('2');
  });

  it('renders secondary title as an `h3` if `eyebrow` prop is passed but no `primaryTitle` prop is passed', () => {
    expect(getSecondaryTitleLevel('eyebrow', undefined)).toEqual('3');
  });

  it('renders secondary title as an `h3` if no `eyebrow` prop is passed but `primaryTitle` prop is passed', () => {
    expect(getSecondaryTitleLevel(undefined, 'secondaryTitle')).toEqual('3');
  });

  it('renders secondary title as an `h4` if `eyebrow` and `primaryTitle` props are passed', () => {
    expect(getSecondaryTitleLevel('eyebrow', 'secondaryTitle')).toEqual('4');
  });
});
