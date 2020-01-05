import { HYPERLINK_STYLE_TYPES } from '~/constants';

const {
  EXTERNAL_BUTTON_LINK,
  EXTERNAL_TEXT_LINK,
  INTERNAL_TEXT_LINK,
  EXTERNAL_NO_ICON_LINK,
  NO_ICON_LINK,
} = HYPERLINK_STYLE_TYPES;

export const checkIsInlineFromStyle = (style: string | undefined): boolean => {
  const styleRepresentsInline =
    style === EXTERNAL_TEXT_LINK ||
    style === INTERNAL_TEXT_LINK ||
    style === NO_ICON_LINK ||
    style === EXTERNAL_NO_ICON_LINK;

  return styleRepresentsInline ? true : false;
};

export const getButtonPropsFromStyle = (
  style: string | undefined,
  url: string | undefined,
): object => {
  const styleRepresentsAbsoluteLink =
    style === EXTERNAL_BUTTON_LINK ||
    style === EXTERNAL_TEXT_LINK ||
    style === EXTERNAL_NO_ICON_LINK;

  const key = styleRepresentsAbsoluteLink ? 'href' : 'to';

  return {
    [key]: url,
  };
};

export const hasIconFromStyle = (style: string | undefined): boolean =>
  style === NO_ICON_LINK || style === EXTERNAL_NO_ICON_LINK ? false : true;

export const getTargetType = (openInANewWindow: boolean | undefined): string =>
  openInANewWindow ? '_blank' : '_self';

export default {
  checkIsInlineFromStyle,
  getButtonPropsFromStyle,
  getTargetType,
  hasIconFromStyle,
};
