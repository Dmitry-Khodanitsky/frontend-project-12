import * as yup from 'yup'

export const getChannelsValidationSchema = (channels) => {
  const channelSchema = yup.object({
    name: yup
      .string()
      .required('Введите название')
      .min(3, 'От 3 до 20 символов')
      .max(20, 'От 3 до 20 символов')
      .test('unique-name', 'Такой канал уже существует', (channelName) => {
        const isDublicate = channels.some(
          (channel) => channel.name.toLowerCase() === channelName.toLowerCase()
        )
        // если дубликат есть, то это true, и тогда результат test должен быть false
        return !isDublicate
      }),
  })

  return channelSchema
}
