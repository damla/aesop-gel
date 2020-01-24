import React from 'react';
import cx from 'classnames';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import PROP_TYPES from './AddToCartButton.prop-types';
import styles from './AddToCartButton.module.css';

const AddToCartButton = ({
  copy = {},
  className,
  dataTestRef,
  handleOnClick,
  isDisabled = false,
  isLoading = false,
  updateSuccessful,
  updateError,
  name,
  price,
  sku,
}) => {
  const classSet = cx(styles.base, className);

  // TODO - need contentful translations for these
  copy.cartActionCopy = `Add to your cart — ${price}`;
  copy.updateNotificationCopy = `${name} added to your cart`;

  const showUpdateSuccessMessage = !isLoading && updateSuccessful;
  const labelClassName = cx(styles.label, {
    [styles.showSuccessMessage]: !isLoading,
  });

  /**
   * @TODO handle onError (updateError)
   * @TODO is SKU needed?
   */

  return (
    <Button
      alternate={true}
      className={classSet}
      dataTestRef={dataTestRef}
      disabled={isLoading || isDisabled}
      onClick={handleOnClick}
      title="Add to cart button"
    >
      {isLoading ? (
        <Loading
          className={styles.loading}
          data-test-ref={`${dataTestRef}_UPDATING`}
          isLight={true}
          isLoading={true}
        />
      ) : (
        <span
          className={labelClassName}
          data-test-ref={
            showUpdateSuccessMessage ? `${dataTestRef}_SUCCESS` : undefined
          }
        >
          <span>{copy.updateNotificationCopy}</span>
          <span>{copy.cartActionCopy}</span>
        </span>
      )}
    </Button>
  );
};

AddToCartButton.propTypes = PROP_TYPES;

export default AddToCartButton;
