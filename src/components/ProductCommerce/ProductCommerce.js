import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { AddToCartContextProvider } from '~/contexts/AddToCart.context';
import { VariantSelectContextProvider } from '~/contexts/VariantSelect.context';
import useAddToCart from '~/customHooks/useAddToCart';
import useVariantSelect from '~/customHooks/useVariantSelect';
import useProductImageTransition from '~/customHooks/useProductImageTransition';
import AddToCartButton from '~/components/AddToCartButton';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import Image from '~/components/Image';
import LinkButtonGroup from '~/components/LinkButtonGroup';
import Loading from '~/components/Loading';
import RadioGroup from '~/components/RadioGroup/RadioGroup';
import SectionHeading from '~/components/SectionHeading';
import Transition from '~/components/Transition';
import { P } from '~/components/Paragraph';
import styles from './ProductCommerce.module.css';

const ProductCommerce = ({
  className,
  description,
  eyebrow,
  heading,
  id,
  theme,
  variants,
}) => {
  const addToCart = useAddToCart();
  const variantSelect = useVariantSelect(variants);
  const imageRef = React.useRef();

  const { currentImage, isImageActive } = useProductImageTransition(
    variantSelect.selectedVariant.image,
    imageRef,
  );

  if (!variantSelect.selectedVariant) {
    return <Loading isLoading={true} />;
  }

  const variantRadioOptions = variants
    .filter(({ size, sku }) => size && sku)
    .map(({ size, sku }) => ({
      label: size,
      value: sku,
    }));

  const { sku: value } = variantSelect.selectedVariant;
  const classSet = cx(styles.base, className);

  return (
    <AddToCartContextProvider value={addToCart}>
      <VariantSelectContextProvider value={variantSelect}>
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
                onChange={e => variantSelect.onVariantChange(e, variants)}
                options={variantRadioOptions}
                testReference="selectedVariant"
                theme={theme}
                value={value}
              />
            </div>

            <LinkButtonGroup
              hasFitContent={false}
              isFlush={false}
              textAlign="center"
              theme={theme}
            >
              <AddToCartButton
                dataTestRef="ADD_TO_CART_SMALL_CTA"
                isFullWidth={false}
                productName="Product Name"
                theme={theme}
              />
              <Hyperlink
                isAlternate={false}
                style="Internal Button Link"
                url="/"
              >
                Mauris volutpat molestie
              </Hyperlink>
            </LinkButtonGroup>
          </div>
        </div>
      </VariantSelectContextProvider>
    </AddToCartContextProvider>
  );
};

ProductCommerce.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  id: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
  variants: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
};

ProductCommerce.defaultProps = {
  className: undefined,
  description: undefined,
  eyebrow: undefined,
  heading: undefined,
  id: undefined,
  theme: 'dark',
  variants: undefined,
};

export default ProductCommerce;

// <LinkButtonGroup
//   hasFitContent={false}
//   isFlush={false}
//   link={{
//     isAlternate: true,
//     text: 'Mauris volutpat molestie',
//     url: '/',
//     style: 'Internal No Icon Button Link',
//   }}
//   secondaryLink={{
//     text: 'Vestibulum ante ipsum',
//     url: '/',
//     style: 'Internal Button Link',
//   }}
//   textAlign="center"
//   theme={theme}
// />

// <Hyperlink
//   isAlternate={true}
//   style="Internal No Icon Button Link"
//   url="/"
// >
//   Mauris volutpat molestie
// </Hyperlink>
//
// <Button>This is a button</Button>
