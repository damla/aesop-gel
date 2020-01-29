import React from 'react';
import cx from 'classnames';
import { getUrlPrefix } from '~/components/contexts/LocaleContext/LocaleContext.utils';
import { LocaleContext } from '~/components/contexts/LocaleContext/LocaleContext';
import Button from '~/components/Button';
import Hidden from '~/components/Hidden';
import Icon from '~/components/Icon';
import List from '~/components/List';
import Transition from '~/components/Transition';
// import Props from './MainNavigation.types';
import styles from './MainNavigation.module.css';

const MainNavigation = ({ className }) => {
  const classSet = cx(styles.base, className);
  const locale = React.useContext(LocaleContext);
  const prefix = `${process.env.GATSBY_MEDIA}/${getUrlPrefix(locale)}`;

  const headerLinkSharedProps = {
    className: styles.link,
    inline: true,
    tabIndex: 0,
  };

  const mainNavigation = [
    {
      content: (
        <Button {...headerLinkSharedProps} href={`${prefix}/shop`} title="Shop">
          Shop
        </Button>
      ),
    },
    {
      content: (
        <Button {...headerLinkSharedProps} href={`${prefix}/read`} title="Read">
          Read
        </Button>
      ),
    },
    {
      content: (
        <Button
          {...headerLinkSharedProps}
          href={`${prefix}/visit`}
          title="Visit"
        >
          Visit
        </Button>
      ),
    },
    {
      content: (
        <Button
          {...headerLinkSharedProps}
          href={`${prefix}/search`}
          title="Search"
        >
          Search
        </Button>
      ),
    },
  ];

  return (
    <Transition activeOnMount={true} type="fade">
      <>
        <div className={styles.aesopLogoWrapper}>
          <Button
            className={styles.homeLink}
            dataTestRef="NAV_LOGO"
            inline={true}
            title="Link to homepage"
            to="/"
          >
            <Icon className={styles.aesopLogo} name="aesop" />
          </Button>
        </div>

        <Hidden className={styles.mainNavigationWrapper} small={true}>
          <nav className={classSet}>
            <List className={styles.list} items={mainNavigation} />
            <Button
              className={cx(styles.closeButton)}
              inline={true}
              onClick={(event: React.SyntheticEvent) => {
                console.log('HeaderView event', event);
              }}
              tabIndex={0}
              title="Close"
            >
              <Icon height={12} name="close" width={12} />
            </Button>
          </nav>
        </Hidden>
      </>
    </Transition>
  );
};

export default MainNavigation;
