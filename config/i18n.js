import NextTranslate from 'next-translate'

export default NextTranslate({
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    pages: {
        '*': ['translation'],
    },
})