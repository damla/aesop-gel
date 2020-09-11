import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import TermsBox from './TermsBox';
import TermsBoxFixture from './TermsBox.fixture';

configure({ adapter: new Adapter() });

describe('<TermsBox />', () => {
  it('should be defined', () => {
    expect(TermsBox).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<TermsBox id="test-textarea" term={TermsBoxFixture.term} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
