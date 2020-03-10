import React from 'react';
import Button from '~/components/Button';
import FormRow from '~/components/FormRow';
import { Input } from '~/components/controls';
import Loading from '~/components/Loading';
import { useFormValues } from '~/customHooks/useFormValues';
import { useMutationCreateCartPromotion } from '~/customHooks/api/useMutationCreateCartPromotion';
// import Props from './CartDiscountForm.types';
import styles from './CartDiscountForm.module.css';

const initialFormValues = {
  promoCode: '',
};

const CartDiscountForm = ({ copy, onCompleted }) => {
  const {
    formErrorFor,
    formValues,
    handleInputChange,
    onFormError,
    onFormSubmit,
  } = useFormValues(initialFormValues);

  const [createCartPromotion, { loading }] = useMutationCreateCartPromotion(
    onCompleted,
    onFormError,
  );
  const submitDisabled = loading || formValues.promoCode.length < 2;

  const handleSubmit = event => {
    event.preventDefault();

    onFormSubmit();

    createCartPromotion(formValues);
  };

  return (
    <form data-test-ref="CART_DISCOUNT_FORM" onSubmit={handleSubmit}>
      <FormRow>
        <Input
          className={styles.input}
          errorMessage={formErrorFor('promoCode')}
          label={copy.inputLabel}
          name="promoCode"
          onChange={handleInputChange}
          testReference="CART_DISCOUNT_FORM_PROMO_CODE"
          value={formValues.promoCode}
        />
      </FormRow>
      <Button
        alternate={true}
        className={styles.submitButton}
        dataTestRef="CART_DISCOUNT_FORM_SUBMIT_BUTTON"
        disabled={submitDisabled}
        inline={false}
        title={copy.submitTitle}
        type="submit"
      >
        {loading ? (
          <Loading
            className={styles.loading}
            data-test-ref="CART_DISCOUNT_FORM_SUBMIT_BUTTON_LOADING"
            isLight={true}
            isLoading={true}
          />
        ) : (
          <span>{copy.submitLabel}</span>
        )}
      </Button>
    </form>
  );
};

export default CartDiscountForm;
