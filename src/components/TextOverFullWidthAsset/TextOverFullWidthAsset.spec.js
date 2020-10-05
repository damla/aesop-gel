import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import TextOverFullWidthAsset from './TextOverFullWidthAsset';
import TextOverFullWidthAssetFixture from './TextOverFullWidthAsset.fixture';

configure({ adapter: new Adapter() });

describe('<TextOverFullWidthAsset />', () => {
  it('should be defined', () => {
    expect(TextOverFullWidthAsset).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<TextOverFullWidthAsset />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
