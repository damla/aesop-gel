import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Image from '~/components/Image';
import DoubleImage from '~/components/DoubleImage';
import Heading from '~/components/Heading';
import ImageCarousel from '~/components/ImageCarousel';
import Map from '~/components/Map';
import { P } from '~/components/Paragraph';
import Podium from '~/components/Podium';
import TwoColumnLayout from '~/components/TwoColumnLayout';
import styles from './StoreDetail.module.css';

import MapFixture from '~/components/Map/Map.fixture';
import StoreDetailFixture from './StoreDetail.fixture';

const StoreDetail = ({ className }) => {
  const classSet = cx(styles.base, className);

  return (
    <div className={classSet}>
      <Podium horizontalPadding="small" verticalPadding="small">
        <TwoColumnLayout
          content={
            <>
              <Heading level="1" size="large">
                Lorem ipsum dolor
              </Heading>
              <div className={styles.detailBlock}>
                <div className={styles.detail}>
                  <Heading
                    className={styles.detailHeading}
                    level="3"
                    size="xXSmall"
                  >
                    Location
                  </Heading>
                  <div className={styles.detailContent}>
                    Duis in massa sed, Suspendisse hendrerit
                  </div>
                </div>
                <div className={styles.detail}>
                  <Heading
                    className={styles.detailHeading}
                    level="3"
                    size="xXSmall"
                  >
                    Email
                  </Heading>
                  <div className={styles.detailContent}>
                    consectetur.adipiscing.elit@aesop.com
                  </div>
                </div>
                <div className={styles.detail}>
                  <Heading
                    className={styles.detailHeading}
                    level="3"
                    size="xXSmall"
                  >
                    Phone
                  </Heading>
                  <div className={styles.detailContent}>+61 5555 1234</div>
                </div>
                <div className={styles.detail}>
                  <Heading
                    className={styles.detailHeading}
                    level="3"
                    size="xXSmall"
                  >
                    Opening hours
                  </Heading>
                  <div className={styles.detailContent}>
                    Quisque ac massa in ante vehicula elementum ac non magna. Ut
                    a ullamcorper metus, sed rutrum nunc. Suspendisse maximus
                    quam non tincidunt gravida. Sed porttitor vel mi a egestas.
                  </div>
                </div>
              </div>
            </>
          }
          hasRightPadding={false}
          isReversed={true}
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
          hasRightPadding={false}
          isReversed={true}
          sidebar={
            <Heading
              hasSerifFont={true}
              hasTopMargin={false}
              level="2"
              size="large"
            >
              Lorem ipsum dolor sit amet consectetur
            </Heading>
          }
        />
      </Podium>

      <Podium horizontalPadding="small" verticalPadding="small">
        <DoubleImage
          imageOne={{
            altText: StoreDetailFixture.doubleImage.imageOne.altText,
            large: StoreDetailFixture.doubleImage.imageOne.large,
            medium: StoreDetailFixture.doubleImage.imageOne.medium,
            small: StoreDetailFixture.doubleImage.imageOne.small,
          }}
          imageTwo={{
            altText: StoreDetailFixture.doubleImage.imageTwo.altText,
            large: StoreDetailFixture.doubleImage.imageTwo.large,
            medium: StoreDetailFixture.doubleImage.imageTwo.medium,
            small: StoreDetailFixture.doubleImage.imageTwo.small,
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
        <Map
          center={{
            lat: MapFixture.places[0].lat,
            lng: MapFixture.places[0].lng,
          }}
          places={[MapFixture.places[0]]}
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
