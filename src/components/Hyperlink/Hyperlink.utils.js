import { HYPERLINK_STYLE_TYPES } from '~/constants';

const {
  EXTERNAL_BUTTON_LINK,
  EXTERNAL_TEXT_LINK,
  INTERNAL_TEXT_LINK,
  EXTERNAL_NO_ICON_LINK,
  NO_ICON_LINK,
} = HYPERLINK_STYLE_TYPES;

/**
 * checkIsInlineFromStyle
 * @param style string
 * @return boolean
 */
export const checkIsInlineFromStyle = style => {
  const styleRepresentsInline =
    style === EXTERNAL_TEXT_LINK ||
    style === INTERNAL_TEXT_LINK ||
    style === NO_ICON_LINK ||
    style === EXTERNAL_NO_ICON_LINK;

  return styleRepresentsInline ? true : false;
};

/**
 * getButtonPropsFromStyle
 * @param style string
 * @param url string
 * @return object
 */
export const getButtonPropsFromStyle = (style, url) => {
  const styleRepresentsAbsoluteLink =
    style === EXTERNAL_BUTTON_LINK ||
    style === EXTERNAL_TEXT_LINK ||
    style === EXTERNAL_NO_ICON_LINK;

  const key = styleRepresentsAbsoluteLink ? 'href' : 'to';

  return {
    [key]: url,
  };
};

/**
 * hasIconFromStyle
 * @param style string
 * @return boolean
 */
export const hasIconFromStyle = style =>
  style === NO_ICON_LINK || style === EXTERNAL_NO_ICON_LINK ? false : true;

/**
 * getTargetType
 * @param openInANewWindow boolean
 * @return string
 */
export const getTargetType = openInANewWindow =>
  openInANewWindow ? '_blank' : '_self';

export default {
  checkIsInlineFromStyle,
  getButtonPropsFromStyle,
  getTargetType,
  hasIconFromStyle,
};
