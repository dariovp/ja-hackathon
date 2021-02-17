const express = require('express');
const next = require('next');


const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.all('*', (req, res) => {
		return handle(req, res);
	});

	server.get('*', function(req, res, next){
		if(req.headers['x-forwarded-proto']!='https')
			res.redirect('https://moonyapp.site'+req.url)
		else
			next() /* Continue to other routes if we're not redirecting */
	})

	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
