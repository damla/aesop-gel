import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import renderer, { act } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import AddToCartButton from './AddToCartButton';
import AddToCartButtonFixture from './AddToCartButton.fixture';
import { LocaleContext } from '~/components/contexts/LocaleContext/LocaleContext';
import LocaleContextFixture from '~/components/contexts/LocaleContext/LocaleContext.fixture';
import { useMutationCreateCartEntry } from '~/hooks/api/useMutationCreateCartEntry';
import { resolvers } from '~/lib/apollo/clientSchema';

jest.mock('~/hooks/api/useMutationCreateCartEntry');

describe('<AddToCartButton />', () => {
  let mockFn;
  let locale;

  beforeEach(() => {
    mockFn = jest.fn();
    locale = LocaleContextFixture;

    useMutationCreateCartEntry.mockImplementation(() => [mockFn, {}]);
  });

  it('should be defined', () => {
    expect(AddToCartButton).toBeDefined();
  });

  it('should render the base component correctly', () => {
    const tree = renderer
      .create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider resolvers={resolvers}>
            <AddToCartButton
              dataTestRef="ADD_TO_CART_SMALL_CTA"
              disabled={AddToCartButtonFixture.disabled}
              name={AddToCartButtonFixture.name}
              price={AddToCartButtonFixture.price}
              sku={AddToCartButtonFixture.sku}
            />
          </MockedProvider>
        </LocaleContext.Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('when the button is clicked', () => {
    beforeEach(() => {
      useMutationCreateCartEntry.mockImplementation(() => {
        return [mockFn, { loading: true }];
      });
    });

    it('should invoke the mutation', async () => {
      const component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider resolvers={resolvers}>
            <AddToCartButton
              dataTestRef="ADD_TO_CART_SMALL_CTA"
              disabled={AddToCartButtonFixture.disabled}
              name={AddToCartButtonFixture.name}
              price={AddToCartButtonFixture.price}
              sku={AddToCartButtonFixture.sku}
            />
          </MockedProvider>
        </LocaleContext.Provider>,
      );

      await act(async () => {
        const addToCartButton = component.root.findByProps({
          'data-test-ref': 'ADD_TO_CART_SMALL_CTA',
        });

        addToCartButton.props.onClick();

        expect(mockFn).toHaveBeenCalled();
      });
    });

    it('should render a loading message', async () => {
      const component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider resolvers={resolvers}>
            <AddToCartButton
              dataTestRef="ADD_TO_CART_SMALL_CTA"
              disabled={AddToCartButtonFixture.disabled}
              name={AddToCartButtonFixture.name}
              price={AddToCartButtonFixture.price}
              sku={AddToCartButtonFixture.sku}
            />
          </MockedProvider>
        </LocaleContext.Provider>,
      );

      await act(async () => {
        const addToCartButton = component.root.findByProps({
          'data-test-ref': 'ADD_TO_CART_SMALL_CTA',
        });

        addToCartButton.props.onClick();

        await waitForExpect(() => {
          expect(
            component.root.findAllByProps({
              'data-test-ref': 'ADD_TO_CART_SMALL_CTA_UPDATING',
            }),
          ).toHaveLength(1);
        });
      });
    });
  });

  describe('when the mutation completes', () => {
    beforeEach(() => {
      useMutationCreateCartEntry.mockImplementation(() => [
        mockFn,
        {
          data: {
            createCartEntry: {
              appliedProductPromotions: [],
            },
          },
        },
      ]);
    });

    it('should render a success message when the mutation succeeds', async () => {
      const component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider resolvers={resolvers}>
            <AddToCartButton
              dataTestRef="ADD_TO_CART_SMALL_CTA"
              disabled={AddToCartButtonFixture.disabled}
              name={AddToCartButtonFixture.name}
              price={AddToCartButtonFixture.price}
              sku={AddToCartButtonFixture.sku}
            />
          </MockedProvider>
        </LocaleContext.Provider>,
      );

      await act(async () => {
        const addToCartButton = component.root.findByProps({
          'data-test-ref': 'ADD_TO_CART_SMALL_CTA',
        });

        addToCartButton.props.onClick();

        await waitForExpect(() => {
          expect(
            component.root.findAllByProps({
              'data-test-ref': 'ADD_TO_CART_SMALL_CTA',
            }),
          ).toHaveLength(1);
        });
      });
    });
  });
});
