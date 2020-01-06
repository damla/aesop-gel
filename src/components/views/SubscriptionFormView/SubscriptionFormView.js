import React from 'react';
import cx from 'classnames';
import FormContainer from '~/components/containers/FormContainer';
import { Input } from '~/components/controls';
import Button from '~/components/elements/Button';
import Icon from '~/components/elements/Icon';
import Props from './SubscriptionFormView.types';
import { subscriptionFormSchema as schema } from './SubscriptionFormView.schema';
import styles from './SubscriptionFormView.module.css';

const classSet = cx(styles.base);
const handleOnSubmit = (
  values: object,
  setSubmitting: (arg: boolean) => void,
) => {
  console.info(
    '<SubscriptionFormView /> handleOnSubmit[values]',
    JSON.stringify(values, null, 2),
  );
  setTimeout(() => {
    setSubmitting(false);
  }, 400);
};

const SubscriptionFormInnerView: React.FunctionComponent<Props> = ({
  props,
  handleSubmit,
  isSubmitting,
  setSubmitting,
  transformedSchema,
  triggerSubmit,
}) => {
  const {
    className,
    copy: { description, submitTitle },
  } = props;

  return (
    <>
      <div className={styles.description}>{description}</div>
      <div className={cx(styles.inputWrapper, classSet)}>
        <Input className={styles.input} {...transformedSchema.emailAddress} />
        {transformedSchema.emailAddress.value && (
          <Button
            className={styles.submitButton}
            disabled={isSubmitting}
            onClick={() => {
              triggerSubmit(setSubmitting, handleSubmit);
            }}
            title={submitTitle}
          >
            <Icon height={18} name="rightArrow" width={18} />
          </Button>
        )}
      </div>
    </>
  );
};

const SubscriptionFormView = FormContainer(SubscriptionFormInnerView, {
  schema,
  handleOnSubmit,
  className,
});

export default SubscriptionFormView;
