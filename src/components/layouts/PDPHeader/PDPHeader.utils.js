import { ProductVariant, ProductVariantImage } from '~/types/Product';

export const getDescription = (
  defaultVariant: ProductVariant | undefined,
): string => (defaultVariant ? defaultVariant.description : '');

export const getKeyIngredient = (
  defaultVariant: ProductVariant | undefined,
): string | undefined =>
  defaultVariant ? defaultVariant.keyIngredient : undefined;

export const getImage = (
  defaultVariant: ProductVariant | undefined,
): ProductVariantImage | undefined =>
  defaultVariant ? defaultVariant.image : undefined;

export const getPrice = (
  defaultVariant: ProductVariant | undefined,
): string | undefined => (defaultVariant ? defaultVariant.price : undefined);

export const getSku = (
  defaultVariant: ProductVariant | undefined,
): string | undefined => (defaultVariant ? defaultVariant.sku : undefined);

export default {
  getDescription,
  getKeyIngredient,
  getImage,
  getPrice,
  getSku,
};
