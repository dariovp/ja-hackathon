const withImages = require('next-images')


module.exports = withImages({
    env: {
        PORT: NEXT_PUBLIC_PORT || $PORT || 8080,
    },
})

