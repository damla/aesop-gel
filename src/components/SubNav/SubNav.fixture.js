import { HYPERLINK_STYLE_TYPES } from '~/constants';

const { EXTERNAL_NO_ICON_TEXT_LINK } = HYPERLINK_STYLE_TYPES;

export default {
  links: [
    {
      id: 'about',
      style: EXTERNAL_NO_ICON_TEXT_LINK,
      children: 'About',
      url: 'https://aesop.com.com/au/r/about',
    },
    {
      id: 'philosophy',
      style: EXTERNAL_NO_ICON_TEXT_LINK,
      children: 'Philosophy',
      url: 'https://aesop.com.com/au/r/philosophy-to-products',
    },
  ],
  heading: 'SubNav Title',
};
