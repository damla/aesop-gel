import React from 'react';
import cx from 'classnames';
import { BREAKPOINTS } from '~/constants';
import Image from '~/components/Image';
import RadioGroup from '~/components/RadioGroup';
import Transition from '~/components/Transition';
import PROP_TYPES from './PDPDetailsImage.prop-types';
import { getImageSource } from './PDPDetailsImage.utils';
import styles from './PDPDetailsImage.module.css';

const { LARGE, MEDIUM, SMALL } = BREAKPOINTS;

const PDPDetailsImage = ({
  className,
  id,
  image,
  variantOptions,
  onVariantChange,
  selectedOption,
}) => {
  if (!image) {
    return null;
  }

  const classSet = cx(styles.base, className);
  const { altText, sizes } = image;

  const variantRadioOptions = variantOptions.map(option => ({
    label: option.size || '',
    value: option.sku,
  }));

  return (
    <Transition activeOnMount={true} type="shiftInLeft">
      <div className={classSet} id={`product-${id}`}>
        <Image
          altText={altText}
          className={styles.image}
          large={getImageSource(LARGE.VIEWPORT, sizes)}
          medium={getImageSource(MEDIUM.VIEWPORT, sizes)}
          small={getImageSource(SMALL.VIEWPORT, sizes)}
        />
        {variantOptions.length === 1 ? (
          <div className={styles.singleVariantLabel}>
            {variantOptions[0].size}
          </div>
        ) : (
          <RadioGroup
            className={styles.variants}
            name="sku"
            onChange={e => onVariantChange(e)}
            options={variantRadioOptions}
            testReference="selectedVariant"
            value={selectedOption}
          />
        )}
      </div>
    </Transition>
  );
};

PDPDetailsImage.propTypes = PROP_TYPES;

export default PDPDetailsImage;
