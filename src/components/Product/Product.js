import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AddToCartContext from '~/contexts/AddToCart.context';
import useAddToCart from '~/customHooks/useAddToCart';
import ProductDetail from '~/components/ProductDetail';
import styles from './Product.module.css';

import MediaWithContent from '~/components/MediaWithContent';
import DefinitionList from '~/components/DefinitionList';
import Quote from '~/components/Quote';
import Carousel from '~/components/Carousel';
import Image from '~/components/Image';
import KitList from '~/components/KitList';

import CarouselFixture from '~/components/Carousel/Carousel.fixture';
import MediaWithContentFixture from '~/components/MediaWithContent/MediaWithContent.fixture';
import QuoteFixture from '~/components/Quote/Quote.fixture';

const Product = ({ className }) => {
  const classSet = cx(styles.base, className);
  const addToCart = useAddToCart();

  return (
    <div className={classSet} style={{ backgroundColor: '#fffeef' }}>
      <AddToCartContext.Provider value={addToCart}>
        <ProductDetail />
      </AddToCartContext.Provider>

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
      <Quote
        author={QuoteFixture.author}
        content={QuoteFixture.content}
        theme="dark"
      />
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
      <Carousel
        className={styles.asideProducts}
        introduction={CarouselFixture.introduction}
        slides={CarouselFixture.slides}
      />
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
};

Product.defaultProps = {
  className: undefined,
};

export default Product;
