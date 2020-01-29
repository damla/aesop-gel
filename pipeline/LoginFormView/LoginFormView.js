import React from 'react';
import cx from 'classnames';
import FormContainer from '~/components/FormContainer';
import { Input } from '~/components/controls';
import Button from '~/components/Button';
import Props from './LoginFormView.types';
import { loginFormSchema as schema } from './LoginFormView.schema';
import styles from './LoginFormView.module.css';

const classSet = cx(styles.base);
const handleOnSubmit = (
  values: object,
  setSubmitting: (arg: boolean) => void,
) => {
  console.info(
    '<LoginFormView /> handleOnSubmit[values]',
    JSON.stringify(values, null, 2),
  );
  setTimeout(() => {
    setSubmitting(false);
  }, 400);
};

const LoginFormInnerView: React.FunctionComponent<Props> = ({
  props,
  handleSubmit,
  isSubmitting,
  setSubmitting,
  transformedSchema,
  triggerSubmit,
}) => {
  const {
    copy: { submitTitle, submitLabel },
  } = props;

  return (
    <>
      <Input {...transformedSchema.username} />
      <Input {...transformedSchema.password} />
      <Button
        disabled={isSubmitting}
        onClick={() => {
          triggerSubmit(setSubmitting, handleSubmit);
        }}
        title={submitTitle}
      >
        {submitLabel}
      </Button>
    </>
  );
};

const LoginFormView = FormContainer(LoginFormInnerView, {
  schema,
  handleOnSubmit,
  className,
});

export default LoginFormView;
