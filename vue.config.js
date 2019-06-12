module.exports = {
    baseUrl: './', //根路径
    outputDir: "dist",
    assetsDir: "assets",
    lintOnSave: false, //eslint
    devServer: {
        open: true,
        host: "127.0.0.1",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            //配置跨域
            'apis': {
                target: "http://127.0.0.1:8080",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^apis': ''
                }
            }
        }
    }
}