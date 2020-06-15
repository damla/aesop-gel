import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { P } from '~/components/Paragraph';
import Heading from '~/components/Heading';
import Image from '~/components/Image';
import LinkButtonGroup from '~/components/LinkButtonGroup';
import RadioGroup from '~/components/RadioGroup/RadioGroup';
import SectionHeading from '~/components/SectionHeading';
import styles from './ProductCommerce.module.css';

const ProductCommerce = ({
  className,
  eyebrow = 'Vestibulum ante ipsum primis',
  heading = 'Lorem ipsum dolor',
  id,
  theme,
}) => {
  const classSet = cx(styles.base, className);

  const [value, setValue] = React.useState('nullam-ultrices');

  const handleVariantSelect = event => {
    event.persist();

    const {
      target: { value: newValue },
    } = event;

    setValue(newValue);
  };

  return (
    <div className={classSet}>
      <div className={styles.imageWrapper}>
        <Image
          altText="ATL TAG"
          className={styles.image}
          large="/assets/images/Product/variant-one-large.png"
          medium="/assets/images/Product/variant-one-medium.png"
          small="/assets/images/Product/variant-one-small.png"
        />
      </div>

      <div className={styles.contentWrapper}>
        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          isFlush={true}
          theme={theme}
        />
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          et ornare mauris, id dictum ante. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Mauris
          volutpat molestie lobortis. Nunc vel aliquam odio.{' '}
        </P>
        <div className={styles.variantsWrapper}>
          <Heading
            hasMediumWeightFont={true}
            isFlush={true}
            level="4"
            size="xXSmall"
          >
            Sizes
          </Heading>
          <RadioGroup
            className={styles.variants}
            name="sku"
            onChange={handleVariantSelect}
            options={[
              {
                value: 'morbi-id-nulla',
                label: 'Morbi id nulla',
              },
              {
                value: 'nullam-ultrices',
                label: 'Nullam ultrices',
              },
            ]}
            testReference="selectedVariant"
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
};

ProductCommerce.defaultProps = {
  className: undefined,
};

export default ProductCommerce;
