const express = require('express');
const next = require('next');


const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.all('*', (req, res) => {
		if (req.headers['x-forwarded-proto']!='https') {
			console.log("no tiene https")
			res.redirect('https://www.moonyapp.site' + req.url)
		} else {
			return handle(req, res);
		}
		
	})


	server.listen(port, err => {
		if (err) throw err;
		console.log("qwasd")

		console.log(`> Ready on http://localhost:${port}`);
	});
});
