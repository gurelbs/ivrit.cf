const { news, quickAnswer, lyrics, answer} = require('ivrit')
const { Router } = require('express')
const router = new Router()
const { textToSpeech } = require('./textToSpeech')
let result;
router
	.get('/', (req, res) => {
		res.send('wellcome to the ivrit API!')
	})
	.get('/quickAnswer', async (req, res) => {
		try {
			const { q } = req.query
			result = await answer(q)
			if (!result) return res.json('no answer') 
			console.log(result)
			const audioStream = await textToSpeech(result)
			res.set({
				'Content-Type': 'audio/mpeg',
				'Transfer-Encoding': 'chunked',
			})
			audioStream.pipe(res)
		} catch (error) {
			console.log(error)
		}
	})
	.get('/quickAnswerData', (req, res) => {
		try {
			if (!result) return res.json('no answer')
			res.json({result})
		} catch (err) {
			console.log(err)
		}
	})
	.get('/news', async (req, res) => {
		try {
			let answer = await news(req.query.q)
			res.json(answer)
		} catch (error) {
			console.log(error)
		}
	})
	.get('/lyrics', async (req, res) => {
		try {
			let answer = await lyrics(req.query.q)
			res.json(answer)
		} catch (error) {
			console.log(error)
		}
	})

module.exports = router
