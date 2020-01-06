export const product = {
  name: 'Parsley Seed Facial Cleanser',
  field1Label: 'Suited to',
  field1Description: 'Normal, combination and troubled skin',
  field2Label: 'Skin feel',
  field2Description: 'Clarified, smooth and gently cleansed',
  variants: [
    {
      description:
        'A clarifying formulation that removes surface impurities and offers mild exfoliation from Lactic Acid. Ideal for maintaining immaculately clean skin in polluted urban environments.',
      image: {
        altText: 'here is a descriptive alt tag',
        sizes: [
          {
            viewport: 'LARGE',
            src:
              '/images/products/Skin_Amazing_Face_Cleanser_100mL_large.png 2x',
          },
          {
            viewport: 'MEDIUM',
            src:
              '/images/products/Skin_Amazing_Face_Cleanser_100mL_medium.png 2x',
          },
          {
            viewport: 'SMALL',
            src:
              '/images/products/Skin_Amazing_Face_Cleanser_100mL_small.png 2x',
          },
        ],
      },
      isDefault: true,
      keyIngredient: 'Licorice Root, Lactic Acid, Blackcurrant Seed',
      price: '$43.00',
      size: '100 mL',
      sku: 'SK45',
    },
  ],
};

export default {
  product,
};
