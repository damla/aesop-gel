import React from 'react';
import { get } from 'lodash';
import cx from 'classnames';
import { useQueryGetUserSession } from '~/hooks/api/useQueryGetUserSession';
import Button from '~/components/elements/Button';
import List from '~/components/elements/List';
import Props from './UserSession.types';
import styles from './UserSession.module.css';

const UserSession: React.FunctionComponent<Props> = ({
  className,
  handleOnCartClick,
}) => {
  const classSet: string = cx(styles.base, className);
  const { data } = useQueryGetUserSession();

  const sessionItems = () => {
    const cartCount = get(data, 'getUserSession.qtyInMiniCart', 0);
    const isLoggedIn = get(data, 'getUserSession.isLoggedIn', false);
    const userLabel = isLoggedIn
      ? `${data.getUserSession.firstName} ${data.getUserSession.lastName}`
      : 'Login';

    const headerLinkSharedProps = {
      classSet: styles.link,
      inline: true,
      tabIndex: 0,
    };

    return [
      {
        content: (
          <Button
            {...headerLinkSharedProps}
            className={cx(styles.link, styles.loginLink)}
            dataTestRef="NAV_LINK"
            onClick={(event: React.SyntheticEvent) =>
              console.log('HeaderView userSession event', event)
            }
            title={userLabel}
          >
            {userLabel}
          </Button>
        ),
      },
      {
        content: (
          <Button
            {...headerLinkSharedProps}
            className={cx(styles.cart, { [styles.hasItems]: cartCount > 0 })}
            dataTestRef="NAV_CART"
            onClick={handleOnCartClick}
            title="Cart"
          >
            {cartCount.toString()}
          </Button>
        ),
      },
    ];
  };

  return (
    <div className={classSet}>
      <List className={styles.list} items={sessionItems()} />
    </div>
  );
};

UserSession.defaultProps = {};

export default UserSession;
