import * as yupVal from 'yup';

import { regex } from './regex';

export const yup = {
  name: yupVal
    .string()
    .required('required_name')
    .matches(regex.name, ('format_not_correct_string')),
  
   email: yupVal
    .string()
    .required('required_email')
    .email (regex.email, ('sdadad')),
  
  password: yupVal
    .string()
    .required('required_password')
    .matches(regex.password, ('rules_password'))
 
};