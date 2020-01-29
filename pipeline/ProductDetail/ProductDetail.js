import React from 'react';
import cx from 'classnames';
import Carousel from '~/components/Carousel';
import ImageWithHeaderAndContent from '~/components/ImageWithHeaderAndContent';
import ImageWithHeaderAndContentFixture from '~/components/ImageWithHeaderAndContent/ImageWithHeaderAndContent.fixture';
import PDPHeader from '~/components/PDPHeader';
import Quote from '~/components/Quote';
import DefinitionList from '~/components/DefinitionList';
import KitList from '~/components/KitList';
import QuoteFixture from '~/components/Quote/Quote.fixture';
import ProductDetailFixture from './ProductDetail.fixture';
import PROP_TYPES from './ProductDetail.prop-types';
import styles from './ProductDetail.module.css';

const ProductDetail = ({ className, data }) => {
  const classSet = cx(styles.base, className);

  return (
    <div className={classSet}>
      <PDPHeader product={data.product} />
      <ImageWithHeaderAndContent
        content={
          <DefinitionList
            items={ImageWithHeaderAndContentFixture.definitionList}
          />
        }
        copy={ImageWithHeaderAndContentFixture.copy}
        image={ImageWithHeaderAndContentFixture.image}
      />
      <Quote author={QuoteFixture.author}>{QuoteFixture.content}</Quote>
      <ImageWithHeaderAndContent
        content={<KitList items={ImageWithHeaderAndContentFixture.kitList} />}
        copy={ImageWithHeaderAndContentFixture.copyKit}
        image={ImageWithHeaderAndContentFixture.imageKit}
      />
      <Carousel
        className={styles.asideProducts}
        introduction={
          ProductDetailFixture.data.product.accompanyWith.introduction
        }
        slides={ProductDetailFixture.data.product.accompanyWith.products}
      />
      <ImageWithHeaderAndContent
        copy={ImageWithHeaderAndContentFixture.copyExpectations}
        image={ImageWithHeaderAndContentFixture.imageExpectations}
        reverse={true}
      />
    </div>
  );
};

ProductDetail.propTypes = PROP_TYPES;

export default ProductDetail;
