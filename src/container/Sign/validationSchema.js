import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('geçerli bir e-mail girmen gerek')
    .required('e-mail adresi olmazsa olmaz'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'nerede küçük harf?')
    .matches(/\w*[A-Z]\w*/, 'nerede büyük harf?')
    .matches(/\d/, 'nerede sayı?')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'nerede özel karakter?')
    .min(8, ({min}) => "8'den aşağı olmaz")
    .required('parola nerede?'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'parolalar aynı değil ki')
    .required('parolayı tekrar girmen gerek'),
});

export default schema;
