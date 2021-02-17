const express = require('express');
const next = require('next');


const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {
	const server = express();

	server.all('*', (req, res) => {
		console.log("req ", req.headers)
		if (req.headers['x-forwarded-proto'] != 'https') {
			console.log("no tiene http")
			res.redirect('https://www.moonyapp.site' + req.url)
		}
	})


	server.listen(port, err => {
		if (err) throw err;
		console.log("qwasd")

		console.log(`> Ready on http://localhost:${port}`);
	});
});
