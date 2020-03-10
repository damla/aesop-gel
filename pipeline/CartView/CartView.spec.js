import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import renderer, { act, ReactTestInstance } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import CartView from './CartView';
import CartViewFixture from './CartView.fixture';
import { LocaleContext } from '~/components/contexts/LocaleContext/LocaleContext';
import LocaleContextFixture from '~/components/contexts/LocaleContext/LocaleContext.fixture';
import { useQueryGetCart } from '~/customHooks/api/useQueryGetCart';

const mockFn = jest.fn();
jest.mock('~/customHooks/api/useQueryGetCart');

describe('<CartView />', () => {
  let data;
  let locale;

  beforeEach(() => {
    locale = LocaleContextFixture;
  });

  it('should be defined', () => {
    expect(CartView).toBeDefined();
  });

  describe('when query getCart is loading', () => {
    beforeEach(() => {
      data = {};

      useQueryGetCart.mockImplementationOnce(() => ({ data, loading: true }));
    });

    it('should render nothing', async () => {
      const component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider>
            <CartView copy={CartViewFixture.copy} handleOnClose={mockFn} />
          </MockedProvider>
        </LocaleContext.Provider>,
      );

      await act(async () => {
        expect(component).toMatchObject({});
      });
    });
  });

  describe('when query getCart resolves', () => {
    beforeEach(() => {
      data = {
        getCart: {
          appliedProductPromotions: [],
          entries: [
            {
              basePrice: {
                formattedValue: '$30.00',
              },
              entryNumber: 0,
              maxQuantity: 5,
              product: {
                code: 'AHR17',
                name: 'Volumising Conditioner',
                size: '200 mL ',
                url: '/au/p/hair/condition/volumising-conditioner/',
              },
              quantity: 1,
              totalPrice: {
                formattedValue: '$30.00',
              },
            },
          ],
          subTotal: {
            formattedValue: '$30.00',
          },
          totalItems: 1,
        },
      };

      useQueryGetCart.mockImplementation(() => ({ data }));
    });

    it('should render the cart heading', async () => {
      const component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider>
            <CartView
              copy={CartViewFixture.copy}
              handleOnClose={mockFn}
              isVisible={true}
            />
          </MockedProvider>
        </LocaleContext.Provider>,
      );

      await act(async () => {
        await waitForExpect(() => {
          const header: ReactTestInstance = component.root.findByProps({
            'data-test-ref': 'CART_HEADING',
          });

          expect(header).toBeDefined();
        });
      });
    });

    it('should render each cart item', async () => {
      const component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <MockedProvider>
            <CartView
              copy={CartViewFixture.copy}
              handleOnClose={mockFn}
              isVisible={true}
            />
          </MockedProvider>
        </LocaleContext.Provider>,
      );

      await act(async () => {
        await waitForExpect(() => {
          const item: ReactTestInstance = component.root.findByProps({
            'data-test-ref': `CART_ENTRY_${0}`,
          });

          expect(item).toBeDefined();
        });
      });
    });
  });
});
