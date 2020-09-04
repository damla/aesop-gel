import React from 'react';
import cx from 'classnames';
import { HEADING, HYPERLINK_STYLE_TYPES } from '~/constants';
import PropTypes from 'prop-types';
<<<<<<< HEAD
=======
// import { useProductDetailContext, useVariantSelectContext } from '~/contexts';

>>>>>>> 23691e3... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
import AddToCartButton from '~/components/AddToCartButton';
import AccordionProductBackgroundImage from '../AccordionProductBackgroundImage';
import AccordionProductBackgroundVideo from '../AccordionProductBackgroundVideo';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import Image from '~/components/Image';
import Paragraph from '~/components/Paragraph';
import styles from './AccordionProduct.module.css';

const AccordionProduct = ({
  closedState,
  compressed,
  expanded,
  id,
  index,
  openState,
  resetAccordion,
  toggleAccordion,
}) => {
  return (
    <div
      className={cx(
        styles.accordionProduct,
        expanded && styles.expanded,
        compressed && styles.compressed,
      )}
      onClick={compressed ? () => resetAccordion() : undefined}
      onKeyDown={compressed ? () => resetAccordion() : undefined}
      role="button"
      tabIndex={compressed ? 0 : -1}
    >
      <div
        className={cx(
          styles.accordionDefaultBackground,
          expanded && styles.hidden,
        )}
<<<<<<< HEAD
=======
        // style={{ closedState.background === 'Colour' ? { backgroundColor: closedState?.backgroundColour } : {} }}

>>>>>>> 23691e3... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
        style={{ backgroundColor: closedState?.backgroundColour }}
      >
        {closedState.background === 'Video' && (
          <AccordionProductBackgroundVideo {...closedState.backgroundVideo} />
        )}
        {closedState.background === 'Image' && (
          <AccordionProductBackgroundImage {...closedState.backgroundImage} />
        )}
      </div>

      <div
        className={cx(
          styles.accordionDefaultContent,
          expanded || compressed ? styles.hidden : '',
        )}
      >
        <div>
          {closedState?.title && (
            <Heading level="2" size="xLarge">
              {closedState?.title}
            </Heading>
          )}
          {closedState?.eyebrow && (
            <Heading level="4" size="xXSmall">
              {closedState?.eyebrow}
            </Heading>
          )}
          <div className={cx(styles.accordionClosedCopy, styles.theme)}>
            {closedState?.copy}
          </div>
          <button
            className={cx(styles.openBtn)}
            onClick={() => toggleAccordion(index, true)}
          >
            {closedState?.openButtonText}
          </button>
<<<<<<< HEAD
          <Image
            className={cx(styles.closedForegroundImage)}
            {...closedState.foregroundImage}
          />
=======
          <Image {...closedState.foregroundImage} />
>>>>>>> 23691e3... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
        </div>
      </div>

      <div
        className={cx(styles.accordionExpanded, expanded ? styles.open : '')}
        style={{ backgroundColor: openState?.backgroundColour }}
      >
        {openState.background === 'Video' && (
          <AccordionProductBackgroundVideo {...openState.backgroundVideo} />
        )}
        {openState.background === 'Image' && (
          <AccordionProductBackgroundImage {...openState.backgroundImage} />
        )}
        <div className={cx(styles.accordionExpandedContent)}>
          <div className={cx(styles.expandedAccordionImage)}>
            <Image {...openState.foregroundImage} />
          </div>
          <div className={cx(styles.expandedAccordionText)}>
            {openState?.title && (
              <Heading level="2" size="xLarge">
                {openState?.title}
              </Heading>
            )}
            {openState?.eyebrow && (
              <Heading level="4" size="xXSmall">
                {openState?.eyebrow}
              </Heading>
            )}
            <div className={cx(styles.accordionOpenCopy, styles.theme)}>
              {openState?.copy}
            </div>
            <div className={cx(styles.btns)}>
              <AddToCartButton
                copy={{
                  /** @TODO needs to be passed down in props, considering adding this copy to the addToCart context */
                  cartAction: 'Add to your cart',
                  updateNotification: 'added to your cart',
                  outOfStock: {
                    label: 'Out of Stock',
                    title: 'Out of stock',
                  },
                }}
                dataTestRef="add-to-cart-accordion-product"
              />
<<<<<<< HEAD
              {openState?.cta && (
=======
              {/* {openState?.cta && (
>>>>>>> 23691e3... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
                <Hyperlink
                  className={styles.cta}
                  isAlternate={false}
                  style={HYPERLINK_STYLE_TYPES.INTERNAL_BUTTON_LINK}
                  url={openState?.cta.url}
                >
                  {openState?.cta.text}
                </Hyperlink>
<<<<<<< HEAD
              )}
=======
              )} */}
>>>>>>> 23691e3... Adding HorizontalProductDisplayAccordion and FullscreenHeroScroll
            </div>
          </div>
        </div>
        <button
          className={cx(styles.closeBtn)}
          onClick={() => toggleAccordion(index, false)}
        >
          {openState.closeButtonText}
        </button>
      </div>
    </div>
  );
};

AccordionProduct.propTypes = {
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
    cta: PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
    }),
    eyebrow: PropTypes.string,
    foregroundImage: PropTypes.object,
    theme: PropTypes.string,
    title: PropTypes.string,
  }),
  resetAccordion: PropTypes.func,
  toggleAccordion: PropTypes.func,
};

AccordionProduct.defaultProps = {
  closedState: {
    background: undefined,
    backgroundColour: undefined,
    backgroundImage: undefined,
    backgroundVideo: undefined,
    copy: undefined,
    eyebrow: undefined,
    foregroundImage: undefined,
    theme: 'dark',
    title: undefined,
  },
  compressed: false,
  expanded: false,
  id: undefined,
  index: undefined,
  openState: {
    background: undefined,
    backgroundColour: undefined,
    backgroundImage: undefined,
    backgroundVideo: undefined,
    copy: undefined,
    eyebrow: undefined,
    foregroundImage: undefined,
    theme: 'dark',
    title: undefined,
  },
  resetAccordion: undefined,
  toggleAccordion: undefined,
};

export default AccordionProduct;
