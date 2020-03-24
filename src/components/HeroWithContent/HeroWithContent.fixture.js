import { HYPERLINK_STYLE_TYPES } from '~/constants';

const { EXTERNAL_NO_ICON_LINK } = HYPERLINK_STYLE_TYPES;

export default {
  copy:
    'Offering an exceptionally mild yet thorough cleanse, Gentle Facial Cleansing Milk removes surface impurities without stripping moisture, making it especially beneficial for dry or sensitive skin.',
  cta: {
    id: 'button-id',
    openInANewWindow: true,
    url: 'http://google.com',
    text: 'Read more',
    type: 'Absolute',
    style: 'Internal Button Link',
  },
  id: 'ImageHeader-old-component',
  heading: 'Gentle Facial Cleansing Milk',
  eyebrow: 'Image Header old component',
  image: {
    altText: 'Image of Milk Cleansing Campaign Aesop 2019',
    large:
      '/assets/images/HeroWithContent/Aesop_Protective_Facial_Lotion_SPF25_Homepage_Launch_Hero_Desktop_2880x1400px.jpg',
    medium:
      '/assets/images/HeroWithContent/Aesop_Protective_Facial_Lotion_SPF25_Homepage_Launch_Hero_Tablet_1400x1920px.jpg',
    small:
      '/assets/images/HeroWithContent/Aesop_Protective_Facial_Lotion_SPF25_Homepage_Launch_Hero_Mobile_640x640px.jpg',
  },
  lightImage: {
    altText: 'Image of Milk Cleansing Campaign Aesop 2019',
    large:
      '/assets/images/HeroWithContent/Aesop_In_Two_Minds_Landing_Page_Primary_Desktop_2880x1400px.jpg',
    medium:
      '/assets/images/HeroWithContent/Large_JPG-Aesop_Combination_Skin_Range_Page_Primary_Image_1440x1920px_T.jpg',
    small:
      '/assets/images/HeroWithContent/Large_JPG-Aesop_Combination_Skin_Range_Page_Primary_Image_640x456px_M.jpg',
  },
  subNavLinks: [
    {
      id: 'about',
      style: EXTERNAL_NO_ICON_LINK,
      children: 'About',
      url: 'http://www.aesop.com/au/r/about',
    },
    {
      id: 'products',
      style: EXTERNAL_NO_ICON_LINK,
      children: 'Products',
      url: 'http://www.aesop.com/au/r/about',
    },
    {
      id: 'philosophy',
      style: EXTERNAL_NO_ICON_LINK,
      children: 'Philosophy',
      url: 'http://www.aesop.com/au/r/philosophy-to-products',
    },
  ],
};
