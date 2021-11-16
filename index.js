const express = require('express');
const cors = require('cors');
const apiRoute = require('./api');
const app = express();
const port = process.env.PORT || 4000;
const prod = process.env.NODE_ENV === 'production'
const path = require('path');
const {hendleErrors} = require('./errors');

hendleErrors()
app.use(cors());
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
app.use((req,res) => {
	res.status(404).send('404');
})



app.listen(port, () => console.log(`Listening on port ${port}`));