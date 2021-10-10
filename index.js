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
process.on('beforeExit', code => {
  // Can make asynchronous calls
  setTimeout(() => {
    console.log(`Process will exit with code: ${code}`)
    process.exit(code)
  }, 100)
})
app.use((req,res) => {
	res.status(404).send('404');
})

process.on('exit', code => {
  // Only synchronous calls
  console.log(`Process exited with code: ${code}`)
})
process.on('SIGTERM', signal => {
  console.log(`Process ${process.pid} received a SIGTERM signal`)
  process.exit(0)
})
process.on('SIGINT', signal => {
  console.log(`Process ${process.pid} has been interrupted`)
  process.exit(0)
})
process.on('uncaughtException', err => {
  console.log(`Uncaught Exception: ${err.message}`)
  process.exit(1)
})
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled rejection at ', promise, `reason: ${err.message}`)
  process.exit(1)
})


app.listen(port, () => console.log(`Listening on port ${port}`));