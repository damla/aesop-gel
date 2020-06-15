import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import find from 'lodash/find';
import { P } from '~/components/Paragraph';
import Heading from '~/components/Heading';
import Image from '~/components/Image';
import LinkButtonGroup from '~/components/LinkButtonGroup';
import Loading from '~/components/Loading';
import RadioGroup from '~/components/RadioGroup/RadioGroup';
import SectionHeading from '~/components/SectionHeading';
import styles from './ProductCommerce.module.css';

const ProductCommerce = ({
  className,
  description,
  eyebrow,
  heading,
  id,
  selectedVariant,
  onVariantSelect,
  theme,
  variants,
}) => {
  const classSet = cx(styles.base, className);

  useEffect(() => {
    onVariantSelect(variants[0]);
  }, [variants, onVariantSelect]);

  if (!selectedVariant) {
    return <Loading isLoading={true} />;
  }

  const handleVariantSelect = event => {
    event.persist();

    const {
      target: { value: value },
    } = event;

    const currentSelectedVariant = find(variants, { sku: value }) || {};

    onVariantSelect(currentSelectedVariant);
  };

  const variantRadioOptions = variants
    .filter(({ size, sku }) => size && sku)
    .map(({ size, sku }) => ({
      label: size,
      value: sku,
    }));

  const { image, sku: value } = selectedVariant;

  return (
    <div className={classSet} id={id}>
      <div className={styles.imageWrapper}>
        {image && (
          <Image
            altText={image.altText}
            className={styles.image}
            large={image.sizes?.large}
            medium={image.sizes?.medium}
            small={image.sizes?.small}
          />
        )}
      </div>

      <div className={styles.contentWrapper}>
        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          isFlush={true}
          theme={theme}
        />
        <P theme={theme}>{description}</P>
        <div className={styles.variantsWrapper}>
          <Heading
            hasMediumWeightFont={true}
            isFlush={true}
            level="4"
            size="xXSmall"
            theme={theme}
          >
            Sizes
          </Heading>
          <RadioGroup
            className={styles.variants}
            name="sku"
            onChange={handleVariantSelect}
            options={variantRadioOptions}
            testReference="selectedVariant"
            theme={theme}
            value={value}
          />
        </div>

        <LinkButtonGroup
          hasFitContent={false}
          isFlush={false}
          link={{
            isAlternate: true,
            text: 'Mauris volutpat molestie',
            url: '/',
            style: 'Internal No Icon Button Link',
          }}
          secondaryLink={{
            text: 'Vestibulum ante ipsum',
            url: '/',
            style: 'Internal Button Link',
          }}
          textAlign="center"
          theme={theme}
        />
      </div>
    </div>
  );
};

ProductCommerce.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  id: PropTypes.string,
  onVariantSelect: PropTypes.func.isRequired,
  selectedVariant: PropTypes.shape({
    size: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.shape({
      altText: PropTypes.string,
      sizes: PropTypes.shape({
        large: PropTypes.string,
        medium: PropTypes.string,
        small: PropTypes.string,
      }),
    }),
  }),
  theme: PropTypes.oneOf(['dark', 'light']),
  variants: PropTypes.array,
};

ProductCommerce.defaultProps = {
  className: undefined,
  description: undefined,
  eyebrow: undefined,
  heading: undefined,
  id: undefined,
  onVariantSelect: undefined,
  selectedVariant: undefined,
  theme: 'dark',
  variants: undefined,
};

export default ProductCommerce;
