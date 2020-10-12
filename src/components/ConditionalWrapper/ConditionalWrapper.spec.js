import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ConditionalWrapper from './ConditionalWrapper';

configure({ adapter: new Adapter() });

describe('<ConditionalWrapper />', () => {
  it('should be defined', () => {
    expect(ConditionalWrapper).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <ConditionalWrapper
          condition={true}
          wrapper={children => <div className="wrapper">{children}</div>}
        >
          <span className="children">children</span>
        </ConditionalWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders children only is condition is false', () => {
    const tree = renderer
      .create(
        <ConditionalWrapper
          condition={false}
          wrapper={children => <div className="wrapper">{children}</div>}
        >
          <span className="children">children</span>
        </ConditionalWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders alternateWrapper correctly', () => {
    const tree = renderer
      .create(
        <ConditionalWrapper
          alternateWrapper={children => (
            <div className="alternateWrapper">{children}</div>
          )}
          condition={false}
          wrapper={children => <div className="wrapper">{children}</div>}
        >
          <span className="children">children</span>
        </ConditionalWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
