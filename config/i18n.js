import NextTranslate from 'next-translate'

export default NextTranslate({
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    pages: {
        '*': ['locales'],
    },
})