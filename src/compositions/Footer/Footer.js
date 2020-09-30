import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FooterBlock from '~/components/FooterBlock';
import Hidden from '~/components/Hidden';
import IconLink from '~/components/IconLink';
import NotificationModal from '~/components/NotificationModal';
import NewsLetterSignUp from '../NewsLetterSignUp';
import styles from './Footer.css';
import { NotificationContextProvider } from '~/contexts';

const Footer = ({
  blocks,
  className,
  consentErrorMsg,
  iconLinks,
  errorMessage,
  notificationMessage,
  showTermsConditionsTextBox,
  subscriptionMessage,
  termsAndCondition,
  termsMessage,
  onClick,
}) => {
  const baseClassSet = cx(styles.base, className);
  const blockClassSet = cx(styles.block);
  const bottomClasset = cx(styles.bottom);

  return (
    <NotificationContextProvider>
      <div className={baseClassSet}>
        <NotificationModal
          backgroundColor="#d5d5cc"
          notificationMessage={notificationMessage}
        />
        <div className={blockClassSet}>
          <div className={styles.signup}>
            <NewsLetterSignUp
              consentErrorMsg={consentErrorMsg}
              errorMessage={errorMessage}
              onClick={onClick}
              showTermsConditionsTextBox={showTermsConditionsTextBox}
              subscriptionMessage={subscriptionMessage}
              termsAndCondition={termsAndCondition}
              termsMessage={termsMessage}
              theme="light"
            />
          </div>
          {blocks &&
            blocks.map((block, index) => (
              <FooterBlock
                className={cx(
                  (index + 1) % 4 === 0 && styles.wideItem,
                  styles.item,
                )}
                copy={block.copy}
                heading={block.heading}
                isVisibleOnTabletAndMobile={block.isVisibleOnTabletAndMobile}
                key={index}
                links={block.links}
                theme="light"
              />
            ))}
        </div>
        <div className={bottomClasset}>
          <span>&copy; Aesop</span>
          <Hidden isLarge={true} isXLarge={true}>
            <div>
              {iconLinks &&
                iconLinks.map(icon => (
                  <IconLink
                    altText={icon.altText}
                    className={styles.iconLinks}
                    hasTargetInNewWindow={icon.hasTargetInNewWindow}
                    height={21}
                    icon={icon.icon}
                    id={icon.altText}
                    key={icon.id}
                    target={icon.target}
                    width={21}
                  />
                ))}
            </div>
          </Hidden>
        </div>
      </div>
    </NotificationContextProvider>
  );
};

Footer.propTypes = {
  blocks: PropTypes.array,
  className: PropTypes.string,
  consentErrorMsg: PropTypes.string,
  iconLinks: PropTypes.array,
  errorMessage: PropTypes.string,
  notificationMessage: PropTypes.string,
  showTermsConditionsTextBox: PropTypes.bool,
  subscriptionMessage: PropTypes.string,
  termsAndCondition: PropTypes.string,
  termsMessage: PropTypes.string,
  onClick: PropTypes.func,
};

Footer.defaultProps = {
  blocks: undefined,
  className: undefined,
  consentErrorMsg: undefined,
  iconLinks: undefined,
  errorMessage: undefined,
  notificationMessage: undefined,
  showTermsConditionsTextBox: undefined,
  subscriptionMessage: undefined,
  termsAndCondition: undefined,
  termsMessage: undefined,
  onClick: undefined,
};

export default Footer;
