import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Image from '~/components/Image';
import DoubleMedia from '~/components/DoubleMedia';
import GoogleMap from '~/components/GoogleMap';
import Heading from '~/components/Heading';
import ImageCarousel from '~/components/ImageCarousel';
import { P } from '~/components/Paragraph';
import Podium from '~/components/Podium';
import TwoColumnLayout from '~/components/TwoColumnLayout';
import styles from './StoreDetail.module.css';
import StoreDetailHeader from '~/components/StoreDetailHeader';
import GoogleMapFixture from '~/components/GoogleMap/GoogleMap.fixture';
import StoreHoursListFixture from '~/components/StoreHoursList/StoreHoursList.fixture';
import StoreDetailHeaderFixture from '~/components/StoreDetailHeader/StoreDetailHeader.fixture';
import StoreDetailFixture from './StoreDetail.fixture';

const StoreDetail = ({ className }) => {
  const classSet = cx(styles.base, className);

  return (
    <div className={classSet}>
      <Podium horizontalPadding="small" verticalPadding="small">
        <StoreDetailHeader
          alternateHoursNote={StoreHoursListFixture.alternateHoursNote}
          copy={{
            location: StoreDetailHeaderFixture.copy.location,
            openingHours: StoreDetailHeaderFixture.copy.openingHours,
            phone: StoreDetailHeaderFixture.copy.phone,
            email: StoreDetailHeaderFixture.copy.email,
          }}
          email={StoreDetailHeaderFixture.email}
          location={StoreDetailHeaderFixture.location}
          openingHours={StoreHoursListFixture.hoursList}
          phone={StoreDetailHeaderFixture.phone}
          storeName={StoreDetailHeaderFixture.storeName}
        />
      </Podium>

      <Podium verticalPadding="small">
        <Image
          altText={StoreDetailFixture.storeImage.altText}
          cta={{
            url: '',
          }}
          large={StoreDetailFixture.storeImage.large}
          medium={StoreDetailFixture.storeImage.medium}
          small={StoreDetailFixture.storeImage.small}
        />
      </Podium>

      <Podium horizontalPadding="small" verticalPadding="small">
        <TwoColumnLayout
          content={
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              scelerisque eleifend ipsum, id sagittis eros laoreet ut. Fusce
              rutrum purus id iaculis molestie. Nulla lacinia luctus ante ut
              egestas. Nunc tincidunt purus eu sagittis suscipit. Aenean
              sollicitudin nisi faucibus sagittis lacinia. Aenean tellus lorem,
              euismod nec accumsan vestibulum, rhoncus vel lectus. Etiam sed
              tortor in ipsum congue bibendum id nec erat.
            </P>
          }
          hasFullWidthContent={true}
          isReversed={true}
          sidebar={
            <Heading hasSerifFont={true} level="2" size="large">
              Lorem ipsum dolor sit amet consectetur
            </Heading>
          }
        />
      </Podium>

      <Podium horizontalPadding="small" verticalPadding="small">
        <DoubleMedia
          mediaOne={{
            type: StoreDetailFixture.doubleMedia.imageOne.type,
            altText: StoreDetailFixture.doubleMedia.imageOne.altText,
            large: StoreDetailFixture.doubleMedia.imageOne.large,
            medium: StoreDetailFixture.doubleMedia.imageOne.medium,
            small: StoreDetailFixture.doubleMedia.imageOne.small,
          }}
          mediaTwo={{
            type: StoreDetailFixture.doubleMedia.imageOne.type,
            altText: StoreDetailFixture.doubleMedia.imageTwo.altText,
            large: StoreDetailFixture.doubleMedia.imageTwo.large,
            medium: StoreDetailFixture.doubleMedia.imageTwo.medium,
            small: StoreDetailFixture.doubleMedia.imageTwo.small,
          }}
        />
      </Podium>

      <Podium horizontalPadding="small" verticalPadding="small">
        <TwoColumnLayout
          content={
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              scelerisque eleifend ipsum, id sagittis eros laoreet ut. Fusce
              rutrum purus id iaculis molestie. Nulla lacinia luctus ante ut
              egestas. Nunc tincidunt purus eu sagittis suscipit. Aenean
              sollicitudin nisi faucibus sagittis lacinia. Aenean tellus lorem,
              euismod nec accumsan vestibulum, rhoncus vel lectus. Etiam sed
              tortor in ipsum congue bibendum id nec erat.
            </P>
          }
          hasRightPadding={true}
          isReversed={true}
        />
      </Podium>

      <Podium horizontalPadding="small" verticalPadding="small">
        <ImageCarousel slides={StoreDetailFixture.slides} />
      </Podium>

      <Podium horizontalPadding="small" verticalPadding="small">
        <GoogleMap
          center={{
            lat: GoogleMapFixture.places[0].lat,
            lng: GoogleMapFixture.places[0].lng,
          }}
          id="store-detail-map"
          places={[GoogleMapFixture.places[0]]}
        />
      </Podium>
    </div>
  );
};

StoreDetail.propTypes = {
  className: PropTypes.string,
};

StoreDetail.defaultProps = {
  className: undefined,
};

export default StoreDetail;
