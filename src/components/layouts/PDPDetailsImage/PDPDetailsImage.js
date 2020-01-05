import React from 'react';
import cx from 'classnames';
import { BREAKPOINTS } from '~/constants';
import Image from '~/components/elements/Image';
import RadioGroup from '~/components/controls/RadioGroup';
import Transition from '~/components/elements/Transition';
import Props from './PDPDetailsImage.types';
import { imageSource } from './PDPDetailsImage.utils';
import styles from './PDPDetailsImage.module.css';

const { LARGE, MEDIUM, SMALL } = BREAKPOINTS;

const PDPDetailsImage: React.FunctionComponent<Props> = ({
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

  const classSet: string = cx(styles.base, className);
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
          large={imageSource(LARGE.VIEWPORT, sizes)}
          medium={imageSource(MEDIUM.VIEWPORT, sizes)}
          small={imageSource(SMALL.VIEWPORT, sizes)}
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

export default PDPDetailsImage;
