const withImages = require('next-images')

module.exports = withImages({
    async rewrites() {
        return [{
            source: '/api/:path*',
            destination: 'https://www.moonyapp.site/:path*'
        }, {
            source: 'www.moonyapp.site',
            destination: 'https://www.moonyapp.site'
        }]
    }
})