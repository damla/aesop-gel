import React, { useEffect, useState } from 'react';
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
import debounce from 'lodash/debounce';

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
        return product;
      }),
    );
  };

  useEffect(() => {
    const resetAccordionOnResize = debounce(() => {
      if (ascertainIsSmallOnlyViewport() !== isMobile) {
        accordionProducts.map(product => {
          product.expanded = false;
          product.compressed = false;
        });
        isMobile = ascertainIsSmallOnlyViewport();
      }
    }, 200);

    window.addEventListener('resize', resetAccordionOnResize);

    return () => {
      window.removeEventListener('resize', resetAccordionOnResize);
    };
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
      {accordionProducts.map(({ ...product }, productIndex) => {
        return (
          <ProductDetailContextProvider
            key={productIndex}
            product={{
              description: product.openState.eyebrow,
              productName: product.openState.title,
            }}
          >
            <VariantSelectContextProvider variants={product.variantOptions}>
              <AccordionProduct
                index={productIndex}
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
      addToCart: PropTypes.shape({
        cartAction: PropTypes.string,
        updateNotification: PropTypes.string,
        outOfStock: PropTypes.shape({
          label: PropTypes.string,
          title: PropTypes.string,
        }),
      }),
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

HorizontalProductDisplayAccordion.defaultProps = {
  className: undefined,
  id: undefined,
  openIndex: null,
  products: {
    addToCart: {
      cartAction: undefined,
      updateNotification: undefined,
      outOfStock: {
        label: undefined,
        title: undefined,
      },
    },
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
