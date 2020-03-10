import React from 'react';
import renderer, { act, ReactTestInstance } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import { useQueryGetUserSession } from '~/customHooks/api/useQueryGetUserSession';
import { Locale } from '~/types/Locale';
import { LocaleContext } from '~/components/contexts/LocaleContext/LocaleContext';
import LocaleContextFixture from '~/components/contexts/LocaleContext/LocaleContext.fixture';
import UserSession from './UserSession';

const mockFn = jest.fn();
jest.mock('~/customHooks/api/useQueryGetUserSession');

describe('<UserSession />', () => {
  let data;
  let locale: Locale;

  beforeEach(() => {
    locale = LocaleContextFixture;
  });

  it('should be defined', () => {
    expect(UserSession).toBeDefined();
  });

  describe('when useQueryGetUserSession is loading', () => {
    beforeEach(() => {
      data = {};
      useQueryGetUserSession.mockImplementationOnce(() => ({
        data,
        loading: true,
      }));
    });

    it('should render a Login navLink', async () => {
      const component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <UserSession handleOnCartClick={mockFn} />
        </LocaleContext.Provider>,
      );

      await act(async () => {
        const navLink = component.root.findByProps({
          'data-test-ref': 'NAV_LINK',
        });
        const navLinkText = 'Login';

        expect(navLink.children).toContain(navLinkText);
      });
    });

    it('should render an empty navCart', async () => {
      const component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <UserSession handleOnCartClick={mockFn} />
        </LocaleContext.Provider>,
      );

      await act(async () => {
        const navCart = component.root.findByProps({
          'data-test-ref': 'NAV_CART',
        });
        const navCartText = '0';

        expect(navCart.children).toContain(`${navCartText}`);
      });
    });
  });

  describe('with useQueryGetUserSession resolves with data', () => {
    beforeEach(() => {
      data = {
        getUserSession: {
          firstName: 'Lisa',
          lastName: 'Simpson',
          userName: 'lsimpson',
          email: 'lisa.simpson@springfield.edu',
          isLoggedIn: true,
          qtyInMiniCart: 1,
        },
      };

      useQueryGetUserSession.mockImplementationOnce(() => ({ data }));
    });

    it('should render the user first and last name', async () => {
      const component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <UserSession handleOnCartClick={mockFn} />
        </LocaleContext.Provider>,
      );

      await act(async () => {
        const navLinkText = `${data.getUserSession.firstName} ${data.getUserSession.lastName}`;

        await waitForExpect(() => {
          const navLink: ReactTestInstance = component.root.findByProps({
            'data-test-ref': 'NAV_LINK',
          });

          expect(navLink.children).toContain(`${navLinkText}`);
        });
      });
    });

    it('should render the user cart items count', async () => {
      const component = renderer.create(
        <LocaleContext.Provider value={locale}>
          <UserSession handleOnCartClick={mockFn} />
        </LocaleContext.Provider>,
      );

      await act(async () => {
        const cartQty = data.getUserSession.qtyInMiniCart;

        await waitForExpect(() => {
          const navCart: ReactTestInstance = component.root.findByProps({
            'data-test-ref': 'NAV_CART',
          });

          expect(navCart.children).toEqual([`${cartQty}`]);
        });
      });
    });
  });
});
