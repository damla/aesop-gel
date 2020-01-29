import * as Yup from 'yup';

export const subscriptionFormSchema = {
  emailAddress: {
    name: 'emailAddress',
    label: 'Email address',
    type: 'text',
    initialValue: '',
    testReference: 'emailAddress',
    placeholder: '',
    validation: Yup.string()
      .email('Please enter a valid email address')
      .required('Required'),
  },
};

export default subscriptionFormSchema;
