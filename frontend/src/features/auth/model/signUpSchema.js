import * as yup from 'yup'

export const getSignUpSchema = (t) =>
  yup.object({
    username: yup
      .string()
      .required(t('errors.required'))
      .min(3, t('errors.loginSymbols'))
      .max(20, t('errors.loginSymbols')),
    password: yup
      .string()
      .required(t('errors.required'))
      .min(6, t('errors.passwordSymbols'))
      .max(20, t('errors.passwordSymbols')),
    passwordConfirmation: yup
      .string()
      .required(t('errors.required'))
      .oneOf([yup.ref('password')], t('errors.confirmPassword')),
  })
