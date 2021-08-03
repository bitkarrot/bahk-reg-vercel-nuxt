export default {
    env: {
        base_url: process.env.VUE_APP_BASE_URL,
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    head: {
        title: 'Bitcoin HK Registration'
    },
    loading: {
        color: 'blue',
        height: '5px'
    },
    serverMiddleware: [
        '~/server-middleware/log.js'
    ],
    router: {
        base: '/'
    },
    components: true,
    modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'],
}