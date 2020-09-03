import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  ProductDetailContextProvider,
  VariantSelectContextProvider,
} from '~/contexts';
import AccordionProduct from './components/AccordionProduct';
import styles from './HorizontalProductDisplayAccordion.module.css';
import { ascertainIsSmallOnlyViewport } from '~/utils/viewports';
import useWindowHasResized from '~/customHooks/useWindowHasResized';

const HorizontalProductDisplayAccordion = ({ id, products }) => {
  const [accordionProducts, toggleAccordionProducts] = useState(products);
  const [accordionActive, toggleAccordionActiveState] = useState(false);
  let isMobile = ascertainIsSmallOnlyViewport();

  const toggleAccordion = (index, opening) => {
    toggleAccordionProducts(
      accordionProducts.map((product, i) => {
        if (isMobile) {
          if (opening) {
            if (i === index) {
              product.expanded = true;
            }
          } else {
            if (i === index) {
              product.expanded = false;
            }
          }
        } else {
          if (opening) {
            if (i === index) {
              product.expanded = true;
              product.compressed = false;
            } else {
              product.expanded = false;
              product.compressed = true;
            }
            toggleAccordionActiveState(true);
          } else {
            if (i === index) {
              product.expanded = false;
              product.compressed = false;
            } else {
              product.expanded = false;
              product.compressed = false;
            }
            toggleAccordionActiveState(false);
          }
        }
        return product;
      }),
    );
  };

  const resetAccordion = () => {
    toggleAccordionProducts(
      accordionProducts.map((product, i) => {
        product.expanded = false;
        product.compressed = false;
<<<<<<< HEAD
=======
        console.log('reset');
>>>>>>> ecf893a... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
        return product;
      }),
    );
  };

  window.addEventListener('resize', () => {
    if (ascertainIsSmallOnlyViewport() === false && isMobile === true) {
      accordionProducts.map(product => {
        product.expanded = false;
      });
      isMobile = ascertainIsSmallOnlyViewport();
    }
  });

  useWindowHasResized();

  return (
    <div
      className={
        (accordionActive ? 'accordion-active ' : '') +
        cx(styles.accordionProductWrap)
      }
      id={id}
    >
      {accordionProducts.map(({ ...product }, index) => {
        return (
          <ProductDetailContextProvider
            key={index}
<<<<<<< HEAD
=======
            /**
              src/contexts/ProductDetail.context.js
              expects {
                description,
                id,
                variantOptions,
                cartDisclaimer,
                definitionList,
                ingredients,
                keyIngredient,
                productName,
              }
            */
>>>>>>> ecf893a... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
            product={{
              description: product.openState.eyebrow,
              productName: product.openState.title,
            }}
          >
            <VariantSelectContextProvider variants={product.variantOptions}>
              <AccordionProduct
                index={index}
                resetAccordion={resetAccordion}
                toggleAccordion={toggleAccordion}
                {...product}
              />
            </VariantSelectContextProvider>
          </ProductDetailContextProvider>
        );
      })}
    </div>
  );
};

HorizontalProductDisplayAccordion.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  openIndex: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
<<<<<<< HEAD
      addToCart: PropTypes.shape({
        cartAction: PropTypes.string,
        updateNotification: PropTypes.string,
        outOfStock: PropTypes.shape({
          label: PropTypes.string,
          title: PropTypes.string,
        }),
      }),
=======
>>>>>>> ecf893a... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
      closedState: PropTypes.shape({
        background: PropTypes.oneOf(['Colour', 'Image', 'Video']),
        backgroundColour: PropTypes.string,
        backgroundImage: PropTypes.object,
        backgroundVideo: PropTypes.object,
        copy: PropTypes.node,
        eyebrow: PropTypes.string,
        foregroundImage: PropTypes.object,
        id: PropTypes.string,
        openButtonText: PropTypes.string,
        theme: PropTypes.string,
        title: PropTypes.string,
      }),
      compressed: PropTypes.bool,
      expanded: PropTypes.bool,
      id: PropTypes.string,
      index: PropTypes.number,
      openState: PropTypes.shape({
        background: PropTypes.oneOf(['Colour', 'Image', 'Video']),
        backgroundColour: PropTypes.string,
        backgroundImage: PropTypes.object,
        backgroundVideo: PropTypes.object,
        closeButtonText: PropTypes.string,
        copy: PropTypes.node,
        eyebrow: PropTypes.string,
        foregroundImage: PropTypes.object,
        theme: PropTypes.string,
        title: PropTypes.string,
      }),
      toggleAccordion: PropTypes.func,
      variantOptions: PropTypes.arrayOf(
        PropTypes.shape({
          isInStock: PropTypes.bool,
          price: PropTypes.string,
          size: PropTypes.string,
          sku: PropTypes.string,
        }),
      ),
    }),
  ),
};

<<<<<<< HEAD
=======
// HorizontalProductDisplayAccordion.propTypes = {
//  className: PropTypes.string,
//  id: PropTypes.string,
//  openIndex: PropTypes.string,
//  products: PropTypes.array,
// };

>>>>>>> ecf893a... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
HorizontalProductDisplayAccordion.defaultProps = {
  className: undefined,
  id: undefined,
  openIndex: null,
  products: {
<<<<<<< HEAD
    addToCart: {
      cartAction: undefined,
      updateNotification: undefined,
      outOfStock: {
        label: undefined,
        title: undefined,
      },
    },
=======
>>>>>>> ecf893a... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
    closedState: {
      background: 'Image',
      backgroundColour: undefined,
      backgroundImage: undefined,
      backgroundVideo: undefined,
      closeButtonText: undefined,
      copy: undefined,
      eyebrow: undefined,
      foregroundImage: undefined,
      id: undefined,
      theme: undefined,
      title: undefined,
    },
    compressed: undefined,
    expanded: undefined,
    id: undefined,
    index: undefined,
    openState: {
      background: 'Colour',
      backgroundColour: undefined,
      backgroundImage: undefined,
      backgroundVideo: undefined,
      copy: undefined,
      eyebrow: undefined,
      foregroundImage: undefined,
      openButtonText: undefined,
      theme: undefined,
      title: undefined,
    },
    toggleAccordion: undefined,
    variantOptions: {
      isInStock: true,
    },
  },
};

export default HorizontalProductDisplayAccordion;
