export const getDescription = defaultVariant =>
  defaultVariant ? defaultVariant.description : '';

export const getKeyIngredient = defaultVariant =>
  defaultVariant ? defaultVariant.keyIngredient : undefined;

export const getImage = defaultVariant =>
  defaultVariant ? defaultVariant.image : undefined;

export const getPrice = defaultVariant =>
  defaultVariant ? defaultVariant.price : undefined;

export const getSku = defaultVariant =>
  defaultVariant ? defaultVariant.sku : undefined;

export default {
  getDescription,
  getKeyIngredient,
  getImage,
  getPrice,
  getSku,
};
