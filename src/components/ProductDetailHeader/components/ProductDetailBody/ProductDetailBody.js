import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useProductDetailContext, useVariantSelectContext } from '~/contexts';
import Paragraph, { ParagraphSet } from '~/components/Paragraph';
import AddToCartButton from '~/components/AddToCartButton';
import Heading from '~/components/Heading';
import Button from '~/components/Button';
import DefinitionList from '~/components/DefinitionList';
import RadioGroup from '~/components/RadioGroup';
import FlyinPanel from '~/components/FlyinPanel';
import Hidden from '~/components/Hidden';
import Icon from '~/components/Icon';
import Transition from '~/components/Transition';
import styles from './ProductDetailBody.module.css';

import { getVariantRadioOptions } from '~/components/ProductCommerce/ProductCommerce.utils.js';

const ProductDetailBody = ({ className, copy, theme }) => {
  const [isFlyinPanelVisible, setIsFlyinPanelVisible] = React.useState(false);
  const { productDetail } = useProductDetailContext();
  const {
    selectedVariant,
    onVariantChange,
    variants,
  } = useVariantSelectContext();

  if (!productDetail) return null;

  const {
    definitionList,
    ingredients,
    keyIngredient,
    productName,
    description,
    cartDisclaimer,
  } = productDetail;
  const classSet = cx(styles.base, styles[theme], className);
  const variantRadioOptions = getVariantRadioOptions(variants);

  const definitionListItems = [
    ...definitionList,
    {
      term: (
        <>
          <span>{copy.ingredients.label}</span>
          {ingredients && (
            <Button
              className={cx(styles.ingredientsTrigger, {
                [styles.isActiveButton]: isFlyinPanelVisible,
              })}
              isInline={true}
              onClick={() => setIsFlyinPanelVisible(true)}
              theme={theme}
              title={copy.ingredients.title}
            >
              <Icon
                height={22}
                name="plusAndCloseWithCircle"
                theme={theme}
                width={22}
              />
            </Button>
          )}
        </>
      ),
      description: keyIngredient,
      id: 'ingredients',
    },
  ];

  return (
    <div className={classSet}>
      <div className={styles.content}>
        <Hidden isMedium={true}>
          <header className={styles.header}>
            <Transition isActiveOnMount={true} type="slowFade">
              <>
                <Heading
                  className={styles.productName}
                  level="1"
                  size="xLarge"
                  theme={theme}
                >
                  {productName}
                </Heading>
                <Hidden isMedium={true} isSmall={true}>
                  <Paragraph className={styles.descriptionCopy} theme={theme}>
                    {description}
                  </Paragraph>
                </Hidden>
              </>
            </Transition>
          </header>
        </Hidden>

        <Hidden isSmall={true} isMedium={true}>
          <div className={styles.breadcrumbs}>breadcrumbs</div>
        </Hidden>

        <Hidden isLarge={true} isMedium={true} isXLarge={true}>
          <div className={styles.description}>
            <Transition isActiveOnMount={true} type="slowFade">
              <Paragraph className={styles.descriptionCopy} theme={theme}>
                {description}
              </Paragraph>
            </Transition>
          </div>
        </Hidden>

        <div className={styles.purchase}>
          <Transition isActiveOnMount={true} type="shiftInDown">
            <>
              <Heading
                hasMediumWeightFont={true}
                isFlush={true}
                level="4"
                size="xXSmall"
                theme={theme}
              >
                {copy?.size}
              </Heading>

              <RadioGroup
                className={styles.variants}
                name="sku"
                onChange={e => onVariantChange(e, variants)}
                options={variantRadioOptions}
                testReference="PRODUCT_COMMERCE_VARIANT_SELECT"
                theme={theme}
                value={selectedVariant.sku}
              />

              <AddToCartButton
                dataTestRef="PRODUCT_COMMERCE_ADD_TO_CART_CTA"
                theme={theme}
              />
            </>
          </Transition>
        </div>

        <Hidden isMedium={true}>
          <div className={styles.cartDisclaimer}>{cartDisclaimer}</div>
        </Hidden>

        <div className={styles.details}>
          <Transition isActiveOnMount={true} type="shiftInDown">
            <DefinitionList
              className={styles.definitionList}
              items={definitionListItems}
              theme={theme}
            />
          </Transition>
        </div>

        <div className={styles.upSell}>Upsell Component</div>
      </div>

      <Hidden isLarge={true} isSmall={true} isXLarge={true}>
        <div className={styles.mediumSidebar}>
          <header className={styles.mediumHeader}>
            <div className={styles.mediumBreadcrumbs}>breadcrumbs</div>
            <Heading
              className={styles.mediumProductName}
              level="1"
              size="xLarge"
              theme={theme}
            >
              {productName}
            </Heading>
            <Paragraph className={styles.mediumDescriptionCopy} theme={theme}>
              {description}
            </Paragraph>
            <div className={styles.cartDisclaimer}>{cartDisclaimer}</div>
          </header>
        </div>
      </Hidden>

      {ingredients && (
        <FlyinPanel
          heading={copy.ingredients.heading}
          isVisible={isFlyinPanelVisible}
          onClose={() => setIsFlyinPanelVisible(false)}
        >
          <ParagraphSet>{ingredients}</ParagraphSet>
        </FlyinPanel>
      )}
    </div>
  );
};

ProductDetailBody.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    size: PropTypes.string,
    cart: PropTypes.string,
    ingredients: PropTypes.shape({
      heading: PropTypes.string,
      label: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
  definitionList: PropTypes.arrayOf(
    PropTypes.shape({
      term: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  ingredients: PropTypes.string,
  keyIngredient: PropTypes.string,
  productName: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ProductDetailBody.defaultProps = {
  className: undefined,
  copy: {
    size: undefined,
    cart: undefined,
    ingredients: {
      heading: undefined,
      label: undefined,
      title: undefined,
    },
  },
  theme: 'dark',
};

export default ProductDetailBody;
