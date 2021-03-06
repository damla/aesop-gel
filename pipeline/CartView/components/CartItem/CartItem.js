import React from 'react';
import cx from 'classnames';
import Button from '~/components/Button';
import QuantitySelect from '~/components/QuantitySelect';
// import { useMutationUpdateCartEntry } from '~/customHooks/api/useMutationUpdateCartEntry';
// import PROP_TYPES from './CartItem.prop-types';
import { getQuantityOptions } from './CartItem.utils';
import styles from './CartItem.module.css';

const CartItem = ({
  className,
  copy,
  entryNumber,
  maxQuantity,
  quantity,
  name,
  price,
  size,
  url,
}) => {
  const classSet = cx(styles.base, className);
  // const [
  //   updateCartEntry,
  //   { data, error, loading },
  // ] = useMutationUpdateCartEntry(entryNumber);
  const updateCartEntry = () => {};
  const data = {};
  const error = {};
  const loading = true;

  return (
    <li className={classSet} data-test-ref={`CART_ENTRY_${entryNumber}`}>
      <div className={cx(styles.itemEntry, styles.name)}>
        <Button
          className={styles.productLink}
          inline={true}
          title={`link to ${name} product page`}
          to={url}
        >
          {name}
        </Button>
      </div>
      <div className={cx(styles.itemEntry, styles.size)}>{size}</div>
      <div className={cx(styles.itemEntry, styles.quantity)}>
        <QuantitySelect
          disabled={loading}
          name={String(entryNumber)}
          onChange={e => {
            updateCartEntry(Number.parseInt(e.target.value, 10));
          }}
          options={getQuantityOptions(maxQuantity)}
          testReference={`CART_ENTRY_${entryNumber}_QUANTITY_SELECT`}
          value={String(quantity)}
        />
      </div>
      <div className={cx(styles.itemEntry, styles.remove)}>
        <Button
          className={styles.removeButton}
          dataTestRef={`CART_ENTRY_${entryNumber}_REMOVE_BUTTON`}
          disabled={loading}
          inline={true}
          onClick={() => updateCartEntry(0)}
          title={`${copy.remove} ${name}`}
        >
          {copy.remove}
        </Button>
      </div>
      <div className={cx(styles.itemEntry, styles.price)}>{price}</div>
    </li>
  );
};

export default CartItem;
