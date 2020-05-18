import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { AddToCartContextProvider } from '~/contexts/AddToCart.context';
import { ProductDetailContextProvider } from '~/contexts/ProductDetail.context';
import { VariantSelectContextProvider } from '~/contexts/VariantSelect.context';
import useAddToCart from '~/customHooks/useAddToCart';
import useProductDetail from '~/customHooks/useProductDetail';
import useVariantSelect from '~/customHooks/useVariantSelect';
import Carousel from '~/components/Carousel';
import DefinitionList from '~/components/DefinitionList';
import Image from '~/components/Image';
import KitList from '~/components/KitList';
import MediaWithContent from '~/components/MediaWithContent';
import Podium from '~/components/Podium';
import ProductDetailHeader from '~/components/ProductDetailHeader';
import Quote from '~/components/Quote';
import styles from './ProductDetail.module.css';

const ProductDetail = ({
  __asideDetails1,
  __asideDetails2,
  breadcrumbs,
  className,
  copy,
  product,
  quote,
  relatedProducts,
}) => {
  const classSet = cx(styles.base, className);
  const addToCart = useAddToCart();
  const productDetail = useProductDetail(product);
  const variantSelect = useVariantSelect(product.variantOptions);

  return (
    <div className={classSet} style={{ backgroundColor: '#fffeef' }}>
      <AddToCartContextProvider value={addToCart}>
        <VariantSelectContextProvider value={variantSelect}>
          <ProductDetailContextProvider value={productDetail}>
            <ProductDetailHeader
              breadcrumbs={breadcrumbs}
              copy={copy?.productHeader}
            />
          </ProductDetailContextProvider>
        </VariantSelectContextProvider>
      </AddToCartContextProvider>

      <MediaWithContent
        backgroundColor="#fffeef"
        content={<DefinitionList items={__asideDetails1.definitionListItems} />}
        copy={{
          eyebrow: __asideDetails1.copy.eyebrow,
          heading: __asideDetails1.copy.heading,
        }}
        media={
          <Image
            altText={__asideDetails1.image.altText}
            large={__asideDetails1.image.large}
            medium={__asideDetails1.image.medium}
            small={__asideDetails1.image.small}
          />
        }
        theme="dark"
      />

      <Podium verticalPadding="large">
        <Quote author={quote.author} content={quote.content} theme="dark" />
      </Podium>

      <MediaWithContent
        content={<KitList items={__asideDetails2.kitListItems} />}
        copy={__asideDetails2.copy}
        media={
          <Image
            altText={__asideDetails2.image.altText}
            large={__asideDetails2.image.large}
            medium={__asideDetails2.image.medium}
            small={__asideDetails2.image.small}
          />
        }
        theme="dark"
      />

      <Podium verticalPadding="medium">
        <Carousel
          className={styles.asideProducts}
          introduction={relatedProducts.introduction}
          slides={relatedProducts.slides}
        />
      </Podium>
    </div>
  );
};

ProductDetail.propTypes = {
  __asideDetails1: PropTypes.object,
  __asideDetails2: PropTypes.object,
  breadcrumbs: PropTypes.object,
  className: PropTypes.string,
  copy: PropTypes.shape({
    productHeader: PropTypes.shape({
      ingredients: PropTypes.shape({
        heading: PropTypes.string,
        label: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
  product: PropTypes.object,
  quote: PropTypes.object,
  relatedProducts: PropTypes.object,
};

ProductDetail.defaultProps = {
  __asideDetails1: undefined,
  __asideDetails2: undefined,
  breadcrumbs: undefined,
  className: undefined,
  copy: undefined,
  product: undefined,
  quote: undefined,
  relatedProducts: undefined,
};

export default ProductDetail;
