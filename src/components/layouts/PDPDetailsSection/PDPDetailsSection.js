import React from 'react';
import cx from 'classnames';
import parse from 'html-react-parser';
import paragraphsFromDivs from '~/utils/paragraphsFromDivs/paragraphsFromDivs.js';
import { ParagraphSet } from '~/components/elements/Paragraph';
import AddToCartButton from '~/components/elements/AddToCartButton';
import Button from '~/components/elements/Button';
import DefinitionList from '~/components/elements/DefinitionList';
import FlyinPanel from '~/components/layouts/FlyinPanel';
import Hidden from '~/components/elements/Hidden';
import Icon from '~/components/elements/Icon';
import Transition from '~/components/elements/Transition';
import PROP_TYPES from './PDPDetailsSection.prop-types';
import styles from './PDPDetailsSection.module.css';

const PDPDetailsSection = ({
  className,
  copy,
  field1Description,
  field1Label,
  field2Description,
  field2Label,
  ingredientText,
  keyIngredient,
  name,
  price,
  sku,
}) => {
  const classSet = cx(styles.base, className);
  const [isVisible, setIsVisible] = React.useState(false);
  const onAddToCartClick = () => {};

  const definitionListItems = [
    {
      term: field1Label,
      description: field1Description,
    },
    {
      term: field2Label,
      description: field2Description,
    },
    {
      term: (
        <>
          {/* TODO - fetch localisation of this title from Contentful */}
          <span>{copy.label}</span>
          {ingredientText && (
            <Button
              className={cx(styles.ingredientsTrigger, {
                [styles.isActiveButton]: isVisible,
              })}
              inline={true}
              onClick={() => setIsVisible(true)}
              title="See ingredients"
            >
              <Icon height={22} name="plusAndCloseWithCircle" width={22} />
            </Button>
          )}
        </>
      ),
      description: keyIngredient,
    },
  ];

  return (
    <div className={classSet}>
      <Hidden large={true} xLarge={true}>
        <Transition activeOnMount={true} type="shiftInDown">
          <AddToCartButton
            dataTestRef="ADD_TO_CART_SMALL_CTA"
            disabled={!price || !sku}
            handleOnClick={onAddToCartClick}
            name={name}
            price={price}
            sku={sku}
          />
        </Transition>
      </Hidden>

      <Transition activeOnMount={true} type="shiftInDown">
        <DefinitionList items={definitionListItems} />
      </Transition>

      <Hidden medium={true} small={true}>
        <Transition activeOnMount={true} type="shiftInDown">
          <AddToCartButton
            dataTestRef="ADD_TO_CART_LARGE_CTA"
            disabled={!price || !sku}
            handleOnClick={onAddToCartClick}
            name={name}
            price={price}
            sku={sku}
          />
        </Transition>
      </Hidden>
      {ingredientText && (
        <FlyinPanel
          handleClose={() => setIsVisible(false)}
          isVisible={isVisible}
          title="Ingredients" // @TODO replace with translated copy
        >
          <ParagraphSet>
            {parse(paragraphsFromDivs(ingredientText))}
          </ParagraphSet>
        </FlyinPanel>
      )}
    </div>
  );
};

PDPDetailsSection.propTypes = PROP_TYPES;

export default PDPDetailsSection;
