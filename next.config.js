const withImages = require('next-images')


module.exports = withImages({
	env: {
		PORT: process.env.PORT
	}
});

