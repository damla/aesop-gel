import React from 'react';
import cx from 'classnames';
import { HYPERLINK_STYLE_TYPES } from '~/constants';
import PropTypes from 'prop-types';
import AddToCartButton from '~/components/AddToCartButton';
import Video from '~/components/Video';
import Heading from '~/components/Heading';
import Hyperlink from '~/components/Hyperlink';
import Image from '~/components/Image';
import styles from './AccordionProduct.module.css';

const AccordionProduct = ({
  addToCartCopy,
  closedState,
  isCompressed,
  isExpanded,
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
        isExpanded && styles.isExpanded,
        isCompressed && styles.isCompressed,
      )}
      id={id}
      onClick={isCompressed ? () => resetAccordion() : undefined}
      onKeyDown={isCompressed ? () => resetAccordion() : undefined}
      role="button"
      tabIndex={isCompressed ? 0 : -1}
    >
      <div
        className={cx(
          styles.accordionDefaultBackground,
          isExpanded && styles.hidden,
        )}
        style={{ backgroundColor: closedState?.backgroundColour }}
      >
        {closedState.background === 'Video' && (
          <Video
            className={cx(styles.closedBackgroundVideo)}
            hasAllowAudio={false}
            hasAutoplay={true}
            hasControls={false}
            hasLoop={true}
            isMuted={true}
            {...closedState.backgroundVideo}
          />
        )}
        {closedState.background === 'Image' && (
          <Image
            className={cx(styles.closedBackgroundImage)}
            {...closedState.backgroundImage}
          />
        )}
      </div>

      <div
        className={cx(
          styles.accordionDefaultContent,
          isExpanded || isCompressed ? styles.hidden : '',
        )}
      >
        <div>
          {closedState?.title && (
            <Heading
              hasSerifFont={true}
              level="2"
              size="xLarge"
              theme={closedState.theme}
            >
              {closedState?.title}
            </Heading>
          )}
          {closedState?.eyebrow && (
            <Heading
              hasMediumWeightFont={true}
              level="4"
              size="xSmall"
              theme={closedState.theme}
            >
              {closedState?.eyebrow}
            </Heading>
          )}
          <div
            className={cx(
              styles.accordionClosedCopy,
              styles[closedState.theme],
            )}
          >
            {closedState?.copy}
          </div>
          <button
            className={cx(styles.openBtn, styles[closedState.theme])}
            onClick={() => toggleAccordion(index, true)}
          >
            {closedState?.openButtonText}
          </button>
          <button
            className={cx(styles.closedStateForegroundImageWrap)}
            onClick={() => toggleAccordion(index, true)}
          >
            <Image
              className={cx(styles.closedForegroundImage)}
              {...closedState.foregroundImage}
            />
          </button>
        </div>
      </div>

      <div
        className={cx(styles.accordionExpanded, isExpanded ? styles.open : '')}
        style={{ backgroundColor: openState?.backgroundColour }}
      >
        {openState.background === 'Video' && (
          <Video
            className={cx(styles.openBackgroundVideo)}
            hasAllowAudio={false}
            hasAutoplay={true}
            hasControls={false}
            hasLoop={true}
            isMuted={true}
            {...openState.backgroundVideo}
          />
        )}
        {openState.background === 'Image' && (
          <Image
            className={cx(styles.openBackgroundImage)}
            {...openState.backgroundImage}
          />
        )}
        <div className={cx(styles.accordionExpandedContent)}>
          <div className={cx(styles.expandedAccordionImage)}>
            <Image {...openState.foregroundImage} />
          </div>
          <div className={cx(styles.expandedAccordionText)}>
            {openState?.title && (
              <Heading
                hasSerifFont={openState?.hasSerifFont}
                level="2"
                size="xLarge"
              >
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
            <div className={cx(styles.buttonGroup)}>
              <AddToCartButton copy={addToCartCopy} theme={openState.theme} />
              {openState?.cta && (
                <Hyperlink
                  className={styles.cta}
                  isAlternate={false}
                  style={HYPERLINK_STYLE_TYPES.INTERNAL_BUTTON_LINK}
                  url={openState?.cta.url}
                >
                  {openState?.cta.text}
                </Hyperlink>
              )}
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
  addToCartCopy: PropTypes.shape({
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
    hasSerifFont: PropTypes.bool,
    id: PropTypes.string,
    openButtonText: PropTypes.string,
    theme: PropTypes.string,
    title: PropTypes.string,
  }),
  isCompressed: PropTypes.bool,
  isExpanded: PropTypes.bool,
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
    hasSerifFont: PropTypes.bool,
    theme: PropTypes.string,
    title: PropTypes.string,
    product: PropTypes.object,
  }),
  resetAccordion: PropTypes.func,
  toggleAccordion: PropTypes.func,
};

AccordionProduct.defaultProps = {
  addToCartCopy: {
    cartAction: undefined,
    updateNotification: undefined,
    outOfStock: {
      label: undefined,
      title: undefined,
    },
  },
  closedState: {
    background: undefined,
    backgroundColour: undefined,
    backgroundImage: undefined,
    backgroundVideo: undefined,
    copy: undefined,
    eyebrow: undefined,
    foregroundImage: undefined,
    hasSerifFont: false,
    theme: 'dark',
    title: undefined,
  },
  isCompressed: false,
  isExpanded: false,
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
    hasSerifFont: false,
    theme: 'dark',
    title: undefined,
  },
  resetAccordion: undefined,
  toggleAccordion: undefined,
};

export default AccordionProduct;
