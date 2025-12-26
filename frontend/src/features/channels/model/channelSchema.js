import * as yup from 'yup'

export const getChannelsValidationSchema = (channels, t) => {
  return yup.object({
    name: yup
      .string()
      .trim()
      .required(t('errors.required'))
      .min(3, t('errors.loginSymbols'))
      .max(20, t('errors.loginSymbols'))
      .test('unique-name', t('errors.channelExist'), (channelName) => {
        if (!channelName) return true
        const isDuplicate = channels.some(
          channel => channel.name.toLowerCase() === channelName.toLowerCase(),
        )
        return !isDuplicate
      }),
  })
}
