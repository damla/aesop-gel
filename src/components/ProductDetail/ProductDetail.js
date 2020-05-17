import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { AddToCartContextProvider } from '~/contexts/AddToCart.context';
import { ProductDetailContextProvider } from '~/contexts/ProductDetail.context';
import { VariantSelectContextProvider } from '~/contexts/VariantSelect.context';
import useAddToCart from '~/customHooks/useAddToCart';
import useProductDetail from '~/customHooks/useProductDetail';
import useVariantSelect from '~/customHooks/useVariantSelect';
import styles from './ProductDetail.module.css';

import ProductDetailHeader from '~/components/ProductDetailHeader';
import MediaWithContent from '~/components/MediaWithContent';
import DefinitionList from '~/components/DefinitionList';
import Quote from '~/components/Quote';
import Carousel from '~/components/Carousel';
import Image from '~/components/Image';
import KitList from '~/components/KitList';
import Podium from '~/components/Podium';

import ProductDetailHeaderFixture from '~/components/ProductDetailHeader/ProductDetailHeader.fixture';
import CarouselFixture from '~/components/Carousel/Carousel.fixture';
import MediaWithContentFixture from '~/components/MediaWithContent/MediaWithContent.fixture';
import QuoteFixture from '~/components/Quote/Quote.fixture';

const ProductDetail = ({ className, product }) => {
  const classSet = cx(styles.base, className);
  const addToCart = useAddToCart();
  const productDetail = useProductDetail(product);
  const variantSelect = useVariantSelect(product.variantOptions[0]);

  return (
    <div className={classSet} style={{ backgroundColor: '#fffeef' }}>
      <AddToCartContextProvider value={addToCart}>
        <VariantSelectContextProvider value={variantSelect}>
          <ProductDetailContextProvider value={productDetail}>
            <ProductDetailHeader
              breadcrumbs={ProductDetailHeaderFixture.breadcrumbs}
            />
          </ProductDetailContextProvider>
        </VariantSelectContextProvider>
      </AddToCartContextProvider>

      <MediaWithContent
        backgroundColor="#fffeef"
        content={
          <DefinitionList
            items={MediaWithContentFixture.definitionList.items}
          />
        }
        copy={{
          eyebrow: MediaWithContentFixture.copy.default.eyebrow,
          heading: MediaWithContentFixture.copy.default.heading,
        }}
        media={
          <Image
            altText={MediaWithContentFixture.image.default.altText}
            large={MediaWithContentFixture.image.default.large}
            medium={MediaWithContentFixture.image.default.medium}
            small={MediaWithContentFixture.image.default.small}
          />
        }
        theme="dark"
      />

      <Podium verticalPadding="large">
        <Quote
          author={QuoteFixture.author}
          content={QuoteFixture.content}
          theme="dark"
        />
      </Podium>

      <MediaWithContent
        content={<KitList items={MediaWithContentFixture.kitList.items} />}
        copy={MediaWithContentFixture.kitList.copy}
        media={
          <Image
            altText={MediaWithContentFixture.image.kit.altText}
            large={MediaWithContentFixture.image.kit.large}
            medium={MediaWithContentFixture.image.kit.medium}
            small={MediaWithContentFixture.image.kit.small}
          />
        }
        theme="dark"
      />

      <Podium verticalPadding="medium">
        <Carousel
          className={styles.asideProducts}
          introduction={CarouselFixture.introduction}
          slides={CarouselFixture.slides}
        />
      </Podium>
    </div>
  );
};

ProductDetail.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
};

ProductDetail.defaultProps = {
  className: undefined,
  product: undefined,
};

export default ProductDetail;
