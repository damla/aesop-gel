import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Image from '~/components/Image';
import DoubleImage from '~/components/DoubleImage';
import ImageCarousel from '~/components/ImageCarousel';
import Map from '~/components/Map';
import styles from './StoreDetail.module.css';

import MapFixture from '~/components/Map/Map.fixture';
import StoreDetailFixture from './StoreDetail.fixture';

const StoreDetail = ({ className }) => {
  const classSet = cx(styles.base, className);

  return (
    <div className={classSet}>
      <Image
        altText={StoreDetailFixture.storeImage.altText}
        cta={{
          url: '',
        }}
        large={StoreDetailFixture.storeImage.large}
        medium={StoreDetailFixture.storeImage.medium}
        small={StoreDetailFixture.storeImage.small}
      />
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
      <ImageCarousel slides={StoreDetailFixture.slides} />
      <Map center={MapFixture.center} places={MapFixture.places} />
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
