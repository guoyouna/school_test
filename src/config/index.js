const env = process.env.NODE_ENV
const DOMAIN_DEV = 'asset-dev.h5h5h5.cn'
// const DOMAIN_TEST = 'asset-test.h5h5h5.cn'
    // export const isDev = env === 'dev'
    // export const isProd = env === 'prod'
    // export const api = 'http://bi-api.${DOMAIN_DEV}/bi/v1.0'
const development = {
    host: `http://127.0.0.1:3030`
        // host: '/bi'
}

// 开发环境打包 npm run build dev
const dev = {
    host: `http://127.0.0.1:3030`,
}

// 测试环境打包 npm run build test
const test = {
    host: `http://127.0.0.1:3030`,
}

// 正式环境打包 npm run build
const production = {
    host: `http://127.0.0.1:3030`,
}
const CONFIG = {
    development,
    dev,
    test,
    production
}
console.log(CONFIG[env])
console.log(development)
export default CONFIG[env]