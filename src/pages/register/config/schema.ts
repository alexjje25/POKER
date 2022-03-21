import { yup as Yup } from '../../../components/utils/yup';


export const schema_sign_in = {
  name: Yup.name,  
 
  password: Yup.password,
  
};
