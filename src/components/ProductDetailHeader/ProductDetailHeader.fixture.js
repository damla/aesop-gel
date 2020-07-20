export default {
  breadcrumbs: {
    items: [
      {
        label: 'Suspendisse',
        id: 'suspendisse',
        url: '/',
      },
      { label: 'Maecenas luctus', id: 'maecenas-luctus', url: '/' },
    ],
  },
  className: 'fixture-classname',
  theme: 'dark',
  product: {
    description:
      'Nunc sagittis ultrices dignissim. Nullam dignissim nisi nec dolor blandit convallis. Suspendisse quis facilisis arcu, nec feugiat ligula.',
    cartDisclaimer:
      'Quisque in felis id tellus condimentum scelerisque. Aliquam quis vestibulum felis, quis porta tellus',
    definitionList: [
      {
        term: 'Lorem ipsum dolor',
        id: 'Lorem-ipsum-dolor',
        description: 'Lorem ipsum dolort, consectetur adipiscing elit.',
      },
      {
        term: 'Ut consectetur mi',
        id: 'Ut-consectetur-mi',
        description: 'Ut consectetur, vitae libero imperdiet id. ',
      },
    ],
    id: 'Lorem-ipsum-dolor',
    ingredients:
      'Maecenas mattis, urna vel commodo vehicula, diam tellus vestibulum urna, in lobortis lacus quam et arcu. Nunc arcu neque, ullamcorper et eros vitae, scelerisque posuere quam. Nunc sagittis ultrices dignissim. Nullam dignissim nisi nec dolor blandit convallis. Suspendisse quis facilisis arcu, nec feugiat ligula. Vestibulum quis malesuada nisi, a finibus eros. Praesent et vestibulum diam. Nam tristique viverra odio, ut tincidunt diam placerat eu. Proin eu magna imperdiet vulputate ex sit amet, laoreet neque. Praesent rhoncus ex quis elit vehicula, et tincidunt nisi scelerisque. Nullam ultrices scelerisque ex at efficitur.',
    keyIngredient: 'Maecenas mattis, urna vel commodo vehicula',
    productName: 'Lorem ipsum dolor',
    variantOptions: [
      {
        size: '50 mL - In stock',
        sku: 'ARD33',
        price: '$26.45',
        isInStock: true,
        image: {
          altText: 'alt-tag-ARD33',
          sizes: {
            large: './assets/images/Product/variant-one-large.png',
            medium: './assets/images/Product/variant-one-medium.png',
            small: './assets/images/Product/variant-one-small.png',
          },
        },
      },
      {
        size: '100 mL - Not in stock',
        sku: 'ARD32',
        price: '$86.97',
        isInStock: false,
        image: {
          altText: 'alt-tag-ARD32',
          sizes: {
            large: './assets/images/Product/variant-two-large.png',
            medium: './assets/images/Product/variant-two-medium.png',
            small: './assets/images/Product/variant-two-small.png',
          },
        },
      },
      {
        size: '180 mL - In stock',
        sku: 'ARD30',
        price: '$96.97',
        isInStock: true,
        image: {
          altText: 'alt-tag-ARD32',
          sizes: {
            large: './assets/images/Product/variant-two-large.png',
            medium: './assets/images/Product/variant-two-medium.png',
            small: './assets/images/Product/variant-two-small.png',
          },
        },
      },
      {
        alternateAction: {
          url: '/?searchMenu=open',
          label: 'Visit Store - $89.45',
        },
        size: '500 mL - Alternate action',
        sku: 'ARD31',
        price: '$109.45',
        isInStock: true,
        image: {
          altText: 'alt-tag-ARD31',
          sizes: {
            large: './assets/images/Product/variant-two-large.png',
            medium: './assets/images/Product/variant-two-medium.png',
            small: './assets/images/Product/variant-two-small.png',
          },
        },
      },
    ],
  },
  variantOutOfStock: [
    {
      size: '50 mL',
      sku: 'ARD33',
      price: '$56.45',
      isInStock: false,
      image: {
        altText: 'ATL TAG',
        sizes: {
          large: './assets/images/Product/variant-one-large.png',
          medium: './assets/images/Product/variant-one-medium.png',
          small: './assets/images/Product/variant-one-small.png',
        },
      },
    },
  ],
};
