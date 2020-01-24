import * as Yup from 'yup';

export const loginFormSchema = {
  name: {
    name: 'username',
    label: 'Username',
    type: 'text',
    initialValue: '',
    testReference: 'username',
    placeholder: '',
    validation: Yup.string()
      .email()
      .required('Required'),
  },
  password: {
    name: 'password',
    label: 'Password',
    type: 'password',
    initialValue: '',
    testReference: 'password',
    placeholder: '',
    validation: Yup.string().required('Required'),
  },
};

export default loginFormSchema;
