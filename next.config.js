const withImages = require('next-images')


module.exports = withImages({
    env: {
        PORT: $PORT || 8080,
    },
})

