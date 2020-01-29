import React from 'react';
import cx from 'classnames';
import parse from 'html-react-parser';
import paragraphsFromDivs from '~/utils/paragraphsFromDivs/paragraphsFromDivs.js';
import { ParagraphSet } from '~/components/Paragraph';
import AddToCartButton from '~/components/AddToCartButton';
import Button from '~/components/Button';
import DefinitionList from '~/components/DefinitionList';
import FlyinPanel from '~/components/FlyinPanel';
import Hidden from '~/components/Hidden';
import Icon from '~/components/Icon';
import Transition from '~/components/Transition';
import PROP_TYPES from './PDPDetailsSection.prop-types';
import styles from './PDPDetailsSection.module.css';

export const useMockServerRequest = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    window.setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      setIsLoading(false);
    };
  }, [isLoading]);

  return isLoading;
};

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
  const onAddToCartClick = () => {};

  const classSet = cx(styles.base, className);
  const [isVisible, setIsVisible] = React.useState(false);

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
            isLoading={true}
            name={name}
            price={price}
            sku={sku}
            updateSuccessful={false}
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
