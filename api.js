const { news, quickAnswer, lyrics } = require('ivrit')
const {Router} = require('express');
const router = new Router();

router.get('/', (req, res) => {
	res.send('wellcome to the hets API!')
})

router.get('/news', async (req, res) => {
	try {
		let answer = await news(req.query.q)
		res.json(answer)
	} catch (error) {
		console.log(error)
	}
})

router.get('/quickAnswer', async (req, res) => {
	try {
		let answer = await quickAnswer(req.query.q)
		res.json(answer)
	} catch (error) {
		console.log(error)
	}
})

router.get('/lyrics', async (req, res) => {
	try {
		let answer = await lyrics(req.query.q)
		res.json(answer)
	} catch (error) {
		console.log(error)
	}
})

module.exports = router
