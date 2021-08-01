export default {
    env: {
        base_url: process.env.VUE_APP_BASE_URL,
    },
    head: {
        title: 'Bitcoin HK registration'
    },
    serverMiddleware: [
        '~/server-middleware/log.js'
    ],
    router: {
        base: '/'
    },
    components: true,
    buildModules: [
        '@nuxtjs/eslint-module'
    ],
    eslint: {
        fix: true
    },
    modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'],
}