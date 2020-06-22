import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import { VariantSelectContextProvider } from '~/contexts/VariantSelect.context';
import useAddToCart from '~/customHooks/useAddToCart';
import useVariantSelect from '~/customHooks/useVariantSelect';
import useImageTransition from '~/customHooks/useImageTransition';
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
import { getVariantRadioOptions } from './ProductCommerce.utils.js';
import styles from './ProductCommerce.module.css';

const ProductCommerce = ({
  className,
  cta,
  description,
  eyebrow,
  heading,
  id,
  onAddToCartClick,
  productName,
  theme,
  variants,
}) => {
  const [
    addToCartState,
    addToCartDispatch,
    ADD_TO_CART_ACTION_TYPES,
  ] = useAddToCart();

  const variantSelect = useVariantSelect(variants);
  const imageRef = React.useRef();
  const { selectedVariant } = variantSelect;

  const [currentImage, isImageActive] = useImageTransition(
    selectedVariant?.image,
    imageRef,
  );

  if (!selectedVariant) {
    return <Loading isLoading={true} />;
  }

  const { hasError, isLoading, isUpdateSuccessful } = addToCartState;

  const variantRadioOptions = getVariantRadioOptions(variants);
  const { sku } = selectedVariant;
  const classSet = cx(styles.base, className);

  const handleOnAddToCartClick = () => {
    onAddToCartClick(sku, addToCartDispatch, ADD_TO_CART_ACTION_TYPES);
  };

  return (
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
          <P className={styles.description} theme={theme}>
            {description}
          </P>
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
              testReference="PRODUCT_COMMERCE_VARIANT_SELECT"
              theme={theme}
              value={sku}
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
              dataTestRef="PRODUCT_COMMERCE_ADD_TO_CART_CTA"
              hasError={hasError}
              isFullWidth={false}
              isLoading={isLoading}
              isUpdateSuccessful={isUpdateSuccessful}
              onClick={handleOnAddToCartClick}
              productName={productName}
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
    </VariantSelectContextProvider>
  );
};

ProductCommerce.propTypes = {
  className: PropTypes.string,
  cta: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
  description: PropTypes.string,
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  id: PropTypes.string,
  onAddToCartClick: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
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
  cta: undefined,
  description: undefined,
  eyebrow: undefined,
  heading: undefined,
  id: undefined,
  onAddToCartClick: undefined,
  productName: undefined,
  theme: 'dark',
  variants: undefined,
};

export default ProductCommerce;
