import filter from 'leo-profanity'

filter.loadDictionary('en')
filter.add(filter.getDictionary('ru'))

export const profanityClean = (text) => filter.clean(text)
