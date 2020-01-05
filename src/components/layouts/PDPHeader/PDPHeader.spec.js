import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MockedProvider } from '@apollo/react-testing';
import renderer, { act } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import PDPHeader from './PDPHeader';
import PDPHeaderFixture from './PDPHeader.fixture';
import { ProductContext } from '~/components/contexts/ProductContext/ProductContext';

configure({ adapter: new Adapter() });

describe('<PDPHeader />', () => {
  it('should be defined', () => {
    expect(PDPHeader).toBeDefined();
  });

  it('renders base component correctly', async () => {
    const component = renderer.create(
      <ProductContext.Provider value={PDPHeaderFixture.product}>
        <MockedProvider mocks={[]}>
          <PDPHeader />
        </MockedProvider>
      </ProductContext.Provider>,
    );

    await act(async () => {
      await waitForExpect(() => {
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
