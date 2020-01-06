import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import renderer, { act } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import ProductTemplate from './ProductTemplate';
import ProductTemplateFixture from './ProductTemplate.fixture';
import { resolvers } from '~/lib/apollo/clientSchema';

configure({ adapter: new Adapter() });

describe('<ProductTemplate />', () => {
  let mocks;

  beforeEach(() => {
    mocks = [];
  });

  it('should be defined', () => {
    expect(ProductTemplate).toBeDefined();
  });

  it('renders base component correctly', async () => {
    const component = renderer.create(
      <MockedProvider mocks={mocks} resolvers={resolvers}>
        <ProductTemplate data={ProductTemplateFixture.data} />
      </MockedProvider>,
    );

    await act(async () => {
      await waitForExpect(() => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
