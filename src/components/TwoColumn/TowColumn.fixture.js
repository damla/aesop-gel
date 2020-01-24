export default {
  addExtraVerticalPadding: false,
  id: 'philosophy-body',
  isSidebarRightAligned: true,
  main: {
    id: 'facial-apt-first-body-right',
    type: 'componentBodyCopy',
    fields: {
      primaryTitle: 'Facial Appointments:  Composed skin, at hand.',
      secondaryTitle: undefined,
      copy:
        'Aesop Facial Appointments offer a series of unique treatments to balance, stimulate and intensely nourish the skin through touch, taking into consideration the relationship between the mind and the senses. \n\nDuring each appointment, an Aesop-Trained Facial Therapist will apply pressure to the face in rhythmic, cursive motions, delivering generous doses of Aesop formulations, and helping to restore calm to the skin.',
      quote: undefined,
      cta: {
        id: 'book-facial-apt',
        type: 'Relative',
        style: 'Internal Button Link',
        url: '/r/facial-appointments#facial-locations',
        text: 'Book now',
        openInANewWindow: false,
      },
    },
  },
  sidebar: {
    id: 'philosophy-body-sidebar',
    type: 'componentBodyCopy',
    fields: {
      eyebrow: 'Available Locations',
      primaryTitle:
        'Aesop Facial Appointments are available at select doors across the globe.',
      secondaryTitle: undefined,
      copy: undefined,
      quote: undefined,
      cta: {
        id: 'read-terms-and-conditions',
        type: 'Relative',
        style: 'Internal Button Link',
        url: '/r/terms',
        text: 'Read our terms and conditions',
        openInANewWindow: true,
      },
    },
  },
};
