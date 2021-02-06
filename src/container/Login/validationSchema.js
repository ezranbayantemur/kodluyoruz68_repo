import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('geçerli bir e-mail girmen gerek')
    .required('e-mail adresi olmazsa olmaz'),
  password: yup.string().required('şifre olmadan mı gireceksin?!'),
});

export default schema;
