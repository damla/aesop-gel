import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import LoginFormView from './LoginFormView';

configure({ adapter: new Adapter() });

describe('<LoginFormView />', () => {
  it('should be defined', () => {
    expect(LoginFormView).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        // @TODO Figure out how we are injecting translated copy from graphQL into components
        // @ts-ignore
        <LoginFormView
          copy={{
            submitLabel: 'Login',
            submitTitle: 'Login form submit button',
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
