const { news, quickAnswer, lyrics, answer, getCatsBreeds } = require('ivrit')
const gptResponse = require('./OpenAI')
const { Router } = require('express')
const router = new Router()
const { textToSpeech } = require('./textToSpeech')
let result
router
	.get('/', (req, res) => {
		res.send('wellcome to the ivrit API!')
	})
	.get('/answer', async (req, res) => {
		try {
			const { q } = req.query
			result = await answer(q)
			if (!result) return res.json('no answer')
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
	.get('/dataAnswer', (req, res) => {
		try {
			if (!result) return res.json('no answer')
			res.json({ result })
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
	.get('/codex', async (req, res) => {
		try {
			const { q } = req.query
			const answer = await gptResponse(q)
			if (!answer) return res.status(404).send('לא נמצאה תשובה')
			res.send({ answer })
		} catch (error) {
			console.log(error)
		}
	})
	.get('/cats', async (req, res) => {
		try {
			const answer = await getCatsBreeds()
			res.send({ answer })
		} catch (error) {
			console.log(error)
		}
	})
module.exports = router
