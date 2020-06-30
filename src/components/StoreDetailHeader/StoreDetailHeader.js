import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '~/components/Heading';
import StoreHoursList from '~/components/StoreHoursList';
import TwoColumnLayout from '~/components/TwoColumnLayout';
import styles from './StoreDetailHeader.module.css';

const StoreDetailHeader = ({
  alternateHoursNote,
  className,
  copy,
  email,
  location,
  openingHours,
  phone,
  storeName,
  theme,
}) => {
  const classSet = cx(styles.base, styles[theme], className);

  const contentBlocks = [
    {
      label: copy.location,
      content: location,
      id: 'location',
    },
    {
      label: copy.email,
      content: email,
      id: 'email',
    },
    {
      label: copy.phone,
      content: phone,
      id: 'phone',
    },
    {
      label: copy.openingHours,
      content: (
        <StoreHoursList
          alternateHoursNote={alternateHoursNote}
          hoursList={openingHours}
          theme={theme}
        />
      ),
      id: 'openingHours',
    },
  ];

  return (
    <TwoColumnLayout
      className={classSet}
      content={
        <>
          <Heading level="1" size="large" theme={theme}>
            {storeName}
          </Heading>
          <div className={styles.detailBlock}>
            {contentBlocks
              .filter(({ label, content }) => label && content)
              .map(({ label, content, id }) => (
                <div className={styles.detail} key={id}>
                  <Heading
                    className={styles.detailHeading}
                    level="3"
                    size="xXSmall"
                    theme={theme}
                  >
                    {label}
                  </Heading>
                  <div className={cx(styles.detailContent)}>{content}</div>
                </div>
              ))}
          </div>
        </>
      }
      hasRightPadding={false}
      isReversed={true}
    />
  );
};

StoreDetailHeader.propTypes = {
  alternateHoursNote: PropTypes.string,
  className: PropTypes.string,
  copy: PropTypes.shape({
    location: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    openingHours: PropTypes.string,
  }),
  email: PropTypes.string,
  location: PropTypes.string,
  openingHours: PropTypes.array,
  phone: PropTypes.string,
  storeName: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
};

StoreDetailHeader.defaultProps = {
  alternateHoursNote: undefined,
  className: undefined,
  copy: {
    location: undefined,
    email: undefined,
    phone: undefined,
    openingHours: undefined,
  },
  email: undefined,
  location: undefined,
  openingHours: undefined,
  phone: undefined,
  storeName: undefined,
  theme: 'dark',
};

export default StoreDetailHeader;
