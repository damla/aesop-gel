import React from 'react';
import cx from 'classnames';
import Carousel from '~/components/layouts/Carousel';
import FooterView from '~/components/views/FooterView';
import FooterViewFixture from '~/components/views/FooterView/FooterView.fixture';
import HeaderView from '~/components/views/HeaderView';
import ImageWithHeaderAndContent from '~/components/layouts/ImageWithHeaderAndContent';
import ImageWithHeaderAndContentFixture from '~/components/layouts/ImageWithHeaderAndContent/ImageWithHeaderAndContent.fixture';
import PDPHeader from '~/components/layouts/PDPHeader';
import Quote from '~/components/elements/Quote';
import DefinitionList from '~/components/elements/DefinitionList';
import KitList from '~/components/elements/KitList';
import QuoteFixture from '~/components/elements/Quote/Quote.fixture';
import ProductTemplateFixture from './ProductTemplate.fixture';
import PROP_TYPES from './ProductTemplate.prop-types';
import styles from './ProductTemplate.module.css';

const ProductTemplate = ({ className, data: {} }) => {
  const classSet = cx(styles.base, className);

  return (
    <div className={classSet}>
      <HeaderView />
      <PDPHeader />
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
          ProductTemplateFixture.data.aesopProduct.accompanyWith.introduction
        }
        slides={ProductTemplateFixture.data.aesopProduct.accompanyWith.products}
      />
      <ImageWithHeaderAndContent
        copy={ImageWithHeaderAndContentFixture.copyExpectations}
        image={ImageWithHeaderAndContentFixture.imageExpectations}
        reverse={true}
      />
      <FooterView {...FooterViewFixture} />
    </div>
  );
};

ProductTemplate.propTypes = PROP_TYPES;

export default ProductTemplate;
