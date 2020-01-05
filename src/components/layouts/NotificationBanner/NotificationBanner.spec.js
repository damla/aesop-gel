import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import renderer, { act, ReactTestInstance } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import { useQueryGetNotification } from '~/hooks/api/useQueryGetNotification';
import { useMutationHideNotification } from '~/hooks/api/useMutationHideNotification';
import NotificationBanner from './NotificationBanner';

jest.mock('~/hooks/api/useMutationHideNotification');
jest.mock('~/hooks/api/useQueryGetNotification');

describe('<NotificationBanner />', () => {
  it('should be defined', () => {
    expect(NotificationBanner).toBeDefined();
  });

  beforeEach(() => {
    useMutationHideNotification.mockImplementation(() => ({}));
  });

  describe('when useQueryGetNotification resolves', () => {
    let data;
    let messageText;

    beforeEach(() => {
      messageText = 'Parsley Seed Cleansing Masque added to the cart';

      data = {
        Notification: {
          message: messageText,
          visible: true,
        },
      };

      useQueryGetNotification.mockImplementation(() => ({ data }));
    });

    it('should render the notification message', async () => {
      const component = renderer.create(
        <MockedProvider>
          <NotificationBanner timeout={2000} />
        </MockedProvider>,
      );

      await act(async () => {
        await waitForExpect(() => {
          const message: ReactTestInstance = component.root.findByProps({
            'data-test-ref': 'NOTIFICATION_BANNER_MESSAGE',
          });

          expect(message.children).toContain(messageText);
        });
      });
    });

    it('should invoke hideNotification after timeout', async () => {
      const component = renderer.create(
        <MockedProvider>
          <NotificationBanner timeout={2000} />
        </MockedProvider>,
      );

      await act(async () => {
        await waitForExpect(() => {
          expect(useMutationHideNotification).toHaveBeenCalled();
        });
      });
    });
  });
});
