import React from 'react';
import cx from 'classnames';
import get from 'lodash/get';
import PDPDetailsHeader from '~/components/PDPDetailsHeader';
import PDPDetailsImage from '~/components/PDPDetailsImage';
import PDPDetailsSection from '~/components/PDPDetailsSection';
import PDPDetailsSectionFixture from '~/components/PDPDetailsSection/PDPDetailsSection.fixture';
import PROP_TYPES from './PDPHeader.prop-types';
import {
  getDescription,
  getImage,
  getKeyIngredient,
  getPrice,
  getSku,
} from './PDPHeader.utils';
import styles from './PDPHeader.module.css';

const PDPHeader = ({ className, product = {} }) => {
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

  const classSet = cx(styles.base, className);
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

PDPHeader.propTypes = PROP_TYPES;

export default PDPHeader;
