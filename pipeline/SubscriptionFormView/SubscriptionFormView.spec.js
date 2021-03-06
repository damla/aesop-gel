import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import SubscriptionFormView from './SubscriptionFormView';

configure({ adapter: new Adapter() });

describe('<SubscriptionFormView />', () => {
  it('should be defined', () => {
    expect(SubscriptionFormView).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        // @TODO Figure out how we are injecting translated copy from graphQL into components
        // @ts-ignore
        <SubscriptionFormView
          copy={{
            submitLabel: 'Subscribe',
            submitTitle: 'Subscribe form submit button',
            description:
              'I would like to receive communications about Aesop products, services, stores, events and matters of cultural interest.',
          }}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
