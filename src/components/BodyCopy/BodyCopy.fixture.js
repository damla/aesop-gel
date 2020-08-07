import { HYPERLINK_STYLE_TYPES } from '~/constants';

const { EXTERNAL_NO_ICON_TEXT_LINK } = HYPERLINK_STYLE_TYPES;

export default {
  eyebrow: 'Nullam id erat est',
  heading: 'Lorem ipsum dolor sit amet',
  subHeading: 'Nunc dignissim quis arcu a',
  theme: 'dark',
  cta: {
    id: '1',
    style: 'External Button Link',
    text: 'Nullam id erat est',
    children: 'Nullam id erat est',
    url: '/',
  },
  secondaryCta: {
    id: '2',
    style: 'External Button Link',
    text: 'Phasellus tempus',
    children: 'Phasellus tempus',
    url: '/',
  },
  links: [
    {
      id: 'Morbi-id-nulla',
      style: EXTERNAL_NO_ICON_TEXT_LINK,
      children: 'Morbi id nulla',
      url: 'https://aesop.com/',
    },
    {
      id: 'Nullam-ultrices',
      style: EXTERNAL_NO_ICON_TEXT_LINK,
      children: 'Nullam ultrices',
      url: 'https://aesop.com/',
    },
  ],

  copy:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id erat est. Ut convallis, neque id semper fermentum, urna risus gravida nibh, vel molestie sapien leo ac tortor. Nunc dignissim quis arcu a lobortis. Phasellus tempus consequat erat, at egestas elit pulvinar lacinia. Nullam pretium, risus a dictum rhoncus, ex libero cursus erat, dignissim malesuada tortor justo quis enim.',
};
