import { HYPERLINK_STYLE_TYPES } from '~/constants';

const { EXTERNAL_NO_ICON_TEXT_LINK } = HYPERLINK_STYLE_TYPES;

export default {
  links: [
    {
      id: 'about',
      style: EXTERNAL_NO_ICON_TEXT_LINK,
      children: 'About',
      url: 'http://www.aesop.com/au/r/about',
    },
    {
      id: 'philosophy',
      style: EXTERNAL_NO_ICON_TEXT_LINK,
      children: 'Philosophy',
      url: 'http://www.aesop.com/au/r/philosophy-to-products',
    },
  ],
  heading: 'SubNav Title',
};
