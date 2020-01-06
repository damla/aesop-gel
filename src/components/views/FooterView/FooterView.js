import React from 'react';
import cx from 'classnames';
import { LABELS } from '~/constants';
import SubscriptionFormView from '~/components/views/SubscriptionFormView';
import SubNav from '~/components/layouts/SubNav';
import RegionSelector from '~/components/layouts/RegionSelector';
import PROP_TYPES from './FooterView.prop-types';
import styles from './FooterView.module.css';

const FooterView = ({
  className,
  siteNavigationPrimary,
  siteNavigationSecondary,
  siteNavigationTernary,
}) => {
  const classSet = cx(styles.base, className);

  const siteNavigationSharedProps = {
    classSet: styles.siteNavigation,
    titleClassSet: styles.siteNavigationTitle,
  };

  return (
    <footer className={classSet}>
      <div className={styles.block}>
        <div className={styles.subscription}>
          {/* @TODO Figure out how we are injecting translated copy from graphQL */}
          <SubscriptionFormView
            className={styles.subscriptionForm}
            copy={{
              submitTitle: 'Subscribe form submit button',
              description:
                'I would like to receive communications about Aesop products, services, stores, events and matters of cultural interest.',
            }}
          />
        </div>
        <SubNav {...siteNavigationPrimary} {...siteNavigationSharedProps} />
        <SubNav {...siteNavigationSecondary} {...siteNavigationSharedProps} />
        <SubNav {...siteNavigationTernary} {...siteNavigationSharedProps} />
      </div>
      <div className={styles.sock}>
        <span className={styles.copyright}>
          &copy;
          {LABELS.AESOP}
        </span>
        <RegionSelector>Region Selector</RegionSelector>
      </div>
    </footer>
  );
};

FooterView.propTypes = PROP_TYPES;

export default FooterView;
