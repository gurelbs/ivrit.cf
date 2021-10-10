const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const apiRoute = require('./api');
const app = express();
const port = process.env.PORT || 4000;
const prod = process.env.NODE_ENV === 'production'
const path = require('path');

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',apiRoute);

if (prod) {
	app.use(express.static('build'))
	app.get('/*', (req, res) => {
		let file = path.join('build', 'index.html')
		res.sendFile(file, { root: __dirname })
	})
}

app.listen(port, () => console.log(`Listening on port ${port}`));