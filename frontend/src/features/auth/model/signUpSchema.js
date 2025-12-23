import * as yup from 'yup'

export const signUpSchema = yup.object({
  username: yup
    .string()
    .required('Обязательное поле')
    .min(3, 'От 3 до 20 символов')
    .max(20, 'От 3 до 20 символов'),
  password: yup
    .string()
    .required('Обязательное поле')
    .min(6, 'От 6 до 20 символов')
    .max(20, 'От 6 до 20 символов'),
  passwordConfirmation: yup
    .string()
    .required('Обязательное поле')
    .oneOf([yup.ref('password')], 'Пароли должны совпадать'),
})
