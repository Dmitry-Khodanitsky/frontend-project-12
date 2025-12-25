import filter from 'leo-profanity'

filter.loadDictionary('ru')

export const profanityClean = (text) => filter.clean(text)
