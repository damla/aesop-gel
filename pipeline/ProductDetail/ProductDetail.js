import React from 'react';
import cx from 'classnames';
import Carousel from '~/components/Carousel';
import MediaWithContent from '~/components/MediaWithContent';
import MediaWithContentFixture from '~/components/MediaWithContent/MediaWithContent.fixture';
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
      <MediaWithContent
        content={
          <DefinitionList
            items={MediaWithContentFixture.definitionList}
          />
        }
        copy={MediaWithContentFixture.copy}
        image={MediaWithContentFixture.image}
      />
      <Quote author={QuoteFixture.author}>{QuoteFixture.content}</Quote>
      <MediaWithContent
        content={<KitList items={MediaWithContentFixture.kitList} />}
        copy={MediaWithContentFixture.copyKit}
        image={MediaWithContentFixture.imageKit}
      />
      <Carousel
        className={styles.asideProducts}
        introduction={
          ProductDetailFixture.data.product.accompanyWith.introduction
        }
        slides={ProductDetailFixture.data.product.accompanyWith.products}
      />
      <MediaWithContent
        copy={MediaWithContentFixture.copyExpectations}
        image={MediaWithContentFixture.imageExpectations}
        reverse={true}
      />
    </div>
  );
};

ProductDetail.propTypes = PROP_TYPES;

export default ProductDetail;
