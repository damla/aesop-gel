import React from 'react';
import cx from 'classnames';
import Button from '~/components/elements/Button';
import Loading from '~/components/elements/Loading';
import { useMutationCreateCartEntry } from '~/hooks/api/useMutationCreateCartEntry';
import Props from './AddToCartButton.types';
import styles from './AddToCartButton.module.css';

const AddToCartButton: React.FunctionComponent<Props> = ({
  classSet,
  dataTestRef,
  disabled,
  name,
  price,
  sku,
}) => {
  const className: string = cx(styles.base, classSet);

  // TODO - need contentful translations for these
  const cartActionCopy = `Add to your cart — ${price}`;
  const notificationCopy = `${name} added to your cart`;
  const successCopy = `Added to your cart`;

  const [
    createCartEntry,
    { data, error, loading },
  ] = useMutationCreateCartEntry(notificationCopy, sku);

  const updateSuccessful = !loading && data && data.createCartEntry;
  const labelClassName: string = cx(styles.label, {
    [styles.showSuccessMessage]: updateSuccessful,
  });

  return (
    <Button
      alternate={true}
      classSet={className}
      dataTestRef={dataTestRef}
      disabled={loading || disabled}
      onClick={createCartEntry}
      title="Add to cart button"
    >
      {loading ? (
        <Loading
          classSet={styles.loading}
          data-test-ref={`${dataTestRef}_UPDATING`}
          isLight={true}
          isLoading={true}
        />
      ) : (
        <span
          className={labelClassName}
          data-test-ref={
            updateSuccessful ? `${dataTestRef}_SUCCESS` : undefined
          }
        >
          <span>{successCopy}</span>
          <span>{cartActionCopy}</span>
        </span>
      )}
    </Button>
  );
};

AddToCartButton.defaultProps = {
  disabled: false,
};

export default AddToCartButton;
