import React from 'react';
import cx from 'classnames';
import get from 'lodash/get';
import PDPDetailsHeader from '~/components/layouts/PDPDetailsHeader';
import PDPDetailsImage from '~/components/layouts/PDPDetailsImage';
import PDPDetailsSection from '~/components/layouts/PDPDetailsSection';
import PDPDetailsSectionFixture from '~/components/layouts/PDPDetailsSection/PDPDetailsSection.fixture';
import Props from './PDPHeader.types';
import {
  getDescription,
  getImage,
  getKeyIngredient,
  getPrice,
  getSku,
} from './PDPHeader.utils';
import { ProductContext } from '~/components/contexts/ProductContext/ProductContext';
import styles from './PDPHeader.module.css';

const PDPHeader: React.FunctionComponent<Props> = ({ classSet }) => {
  const product = React.useContext(ProductContext);

  const {
    field1Description,
    field1Label,
    field2Description,
    field2Label,
    ingredientText,
    name = '',
    variants = [],
  } = product;

  const defaultVariant = variants.find(variant => variant.isDefault);
  const [selectedOption, setSelectedOption] = React.useState(
    get(defaultVariant, 'sku', ''),
  );

  if (!product) {
    return null;
  }

  const classSet: string = cx(styles.base, className);
  const variantOptions = variants.map(({ size, sku }) => ({ size, sku }));

  const selectedVarient = variants.find(
    variant => variant.sku === selectedOption,
  );

  return (
    <form className={classSet}>
      <div className={styles.productWrapper}>
        <div className={styles.productImageWrapper}>
          <PDPDetailsImage
            id={getSku(selectedVarient)}
            image={getImage(selectedVarient)}
            onVariantChange={e => setSelectedOption(e.target.value)}
            selectedOption={selectedOption}
            variantOptions={variantOptions}
          />
        </div>
        <div className={styles.productDetailsWrapper}>
          <PDPDetailsHeader
            description={getDescription(selectedVarient)}
            productName={name}
          />
          <PDPDetailsSection
            copy={PDPDetailsSectionFixture.copy}
            field1Description={field1Description}
            field1Label={field1Label}
            field2Description={field2Description}
            field2Label={field2Label}
            ingredientText={ingredientText}
            keyIngredient={getKeyIngredient(selectedVarient)}
            name={name}
            price={getPrice(selectedVarient)}
            sku={getSku(selectedVarient)}
          />
        </div>
      </div>
    </form>
  );
};

export default PDPHeader;
