import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import styles from './InfoCard.module.css';

const GOOGLE_DIRECTIONS_URL_PREFIX =
  'https://www.google.com/maps?saddr=Current+Location&daddr=';
const HYPERLINK_DATA_TEST_REF = 'DIRECTION_URL';
const HYPERLINK_STYLE = 'External Text Link';

const InfoCard = ({
  address,
  className,
  copy,
  count,
  hasMarkerIndexes,
  openingHours,
  phoneNumber,
  storeName,
}) => {
  return (
    <div className={cx(styles.base, className)}>
      <div className={styles.markerCount}>
        {hasMarkerIndexes ? <i>{count}</i> : ''}
      </div>
      <Heading level="3" size="xSmall">
        {storeName}
      </Heading>
      {address && (
        <div className={styles.address}>
          <Hyperlink
            className={styles.hyperlink}
            dataTestRef={HYPERLINK_DATA_TEST_REF}
            hasTargetInNewWindow={true}
            style={HYPERLINK_STYLE}
            title={`${copy.directions} ${address}`}
            url={`${GOOGLE_DIRECTIONS_URL_PREFIX}${address}`}
          >
            {address}
          </Hyperlink>
        </div>
      )}
      {phoneNumber && <div className={styles.phoneNumber}>{phoneNumber}</div>}

      {openingHours.length !== 0 && (
        <>
          <Heading
            className={styles.openingHoursHeading}
            hasTopMargin={false}
            level="4"
            size="xXSmall"
          >
            Opening hours
          </Heading>

          <ul className={styles.openingHoursList}>
            {openingHours.map(item => (
              <li className={styles.openingHoursItem} key={item.id}>
                <span className={styles.dayName}>{item.dayName}</span>
                <span
                  className={cx(styles.hours, {
                    [styles.specialHours]: item.special,
                  })}
                >
                  {item.hours}
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.specialHoursNote}>{copy.specialHoursNote}</div>
        </>
      )}
    </div>
  );
};

InfoCard.propTypes = {
  address: PropTypes.string,
  className: PropTypes.string,
  copy: PropTypes.object,
  count: PropTypes.number,
  hasMarkerIndexes: PropTypes.bool,
  openingHours: PropTypes.array,
  phoneNumber: PropTypes.string,
  storeName: PropTypes.string,
};

InfoCard.defaultProps = {
  address: undefined,
  className: undefined,
  copy: {
    directions: 'Directions to ',
    specialHoursNote: 'Special opening hours',
  },
  count: undefined,
  hasMarkerIndexes: false,
  openingHours: [
    { dayName: 'Monday', hours: '11am - 4pm', id: 1 },
    { dayName: 'Tuesday', hours: '10am - 3pm', id: 2, special: true },
    { dayName: 'Wednesday', hours: '10am - 3pm', id: 3 },
    { dayName: 'Thursday', hours: '10am - 3pm', id: 4 },
    { dayName: 'Friday', hours: '10am - 3pm', id: 5 },
    { dayName: 'Saturday', hours: '10am - 3pm', id: 6, special: true },
    { dayName: 'Sunday', hours: '10am - 3pm', id: 7 },
  ],
  phoneNumber: undefined,
  storeName: undefined,
};

export default InfoCard;
