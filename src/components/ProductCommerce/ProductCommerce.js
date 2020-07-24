import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HEADING, HYPERLINK_STYLE_TYPES } from '~/constants';
import { useVariantSelectContext } from '~/contexts';
import { useImageTransition } from '~/customHooks';
import { getVariantRadioOptions } from '~/utils/product';
import {
  AddToCartButton,
  Heading,
  Hyperlink,
  Image,
  LinkButtonGroup,
  Loading,
  RadioGroup,
  SectionHeading,
  Transition,
  P,
} from '~/components';
import styles from './ProductCommerce.module.css';

const ProductCommerce = ({
  className,
  copy,
  cta,
  description,
  eyebrow,
  heading,
  id,
  theme,
}) => {
  const imageRef = useRef();
  const {
    selectedVariant,
    onVariantChange,
    variants,
  } = useVariantSelectContext();

  const [currentImage, isImageActive] = useImageTransition(
    selectedVariant?.image,
    imageRef,
  );

  if (!selectedVariant) {
    return <Loading isLoading={true} />;
  }

  const variantRadioOptions = getVariantRadioOptions(variants);
  const classSet = cx(styles.base, className);
  const RADIO_GROUP_NAME = 'sku';
  const RADIO_GROUP_DATA_TEST_REF = 'PRODUCT_COMMERCE_VARIANT_SELECT';
  const ADD_TO_CART_BUTTON_DATA_TEST_REF = 'PRODUCT_COMMERCE_ADD_TO_CART_CTA';

  return (
    <div className={classSet} id={id}>
      <div className={styles.imageWrapper}>
        <Transition isActive={isImageActive} name="fade">
          <Image
            altText={currentImage.altText}
            className={styles.image}
            large={currentImage.sizes?.large}
            medium={currentImage.sizes?.medium}
            ref={imageRef}
            small={currentImage.sizes?.small}
          />
        </Transition>
      </div>

      <div className={styles.contentWrapper}>
        <SectionHeading
          eyebrow={eyebrow}
          heading={heading}
          isFlush={true}
          theme={theme}
        />
        <P className={styles.description} theme={theme}>
          {description}
        </P>
        <div className={styles.variantsWrapper}>
          <Heading
            hasMediumWeightFont={true}
            isFlush={true}
            level={HEADING.LEVEL.FOUR}
            size={HEADING.SIZE.X_X_SMALL}
            theme={theme}
          >
            {copy?.size}
          </Heading>

          <RadioGroup
            className={styles.variants}
            dataTestRef={RADIO_GROUP_DATA_TEST_REF}
            name={RADIO_GROUP_NAME}
            onChange={e => onVariantChange(e, variants)}
            options={variantRadioOptions}
            theme={theme}
            value={selectedVariant.sku}
          />
        </div>
        <LinkButtonGroup
          hasFitContent={false}
          isFlush={false}
          textAlign="center"
          theme={theme}
        >
          <AddToCartButton
            className={styles.addToCartButton}
            copy={copy.addToCart}
            dataTestRef={ADD_TO_CART_BUTTON_DATA_TEST_REF}
            isFullWidth={false}
            theme={theme}
          />
          {cta && (
            <Hyperlink
              className={styles.cta}
              isAlternate={false}
              style={HYPERLINK_STYLE_TYPES.INTERNAL_BUTTON_LINK}
              url={cta.url}
            >
              {cta.text}
            </Hyperlink>
          )}
        </LinkButtonGroup>
      </div>
    </div>
  );
};

ProductCommerce.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    addToCart: PropTypes.shape({
      cartAction: PropTypes.string,
      updateNotification: PropTypes.string,
      outOfStock: PropTypes.shape({
        label: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
    size: PropTypes.string,
  }),
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  description: PropTypes.string,
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  id: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ProductCommerce.defaultProps = {
  className: undefined,
  copy: {
    addToCart: {
      cartAction: undefined,
      updateNotification: undefined,
      outOfStock: {
        label: undefined,
        title: undefined,
      },
    },
    size: undefined,
  },
  cta: undefined,
  description: undefined,
  eyebrow: undefined,
  heading: undefined,
  id: undefined,
  theme: 'dark',
};

export default ProductCommerce;