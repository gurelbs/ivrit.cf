require('dotenv').config()
const { Buffer } = require('buffer')
const { PassThrough } = require('stream')
const fs = require('fs')
const sdk = require('microsoft-cognitiveservices-speech-sdk')
const { API_KEY_1, LOCATION } = process.env

async function textToSpeech(answer) {
	return new Promise((resolve, reject) => {
		const speechConfig = sdk.SpeechConfig.fromSubscription(API_KEY_1, LOCATION)
		const audioConfig = sdk.AudioConfig.fromAudioFileOutput('answers/answer.mp3')
		speechConfig.speechRecognitionLanguage = 'he-IL'
		speechConfig.speechSynthesisVoiceName = 'he-IL-HilaNeural'
		speechConfig.speechSynthesisOutputFormat = 5
		const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig)
		synthesizer.speakTextAsync(
			answer,
			result => {
				if (result) {
					const { audioData } = result
					synthesizer.close()
					const audioFile = fs.createReadStream('answers/answer.mp3')
					resolve(audioFile)
				}
			},
			error => {
				synthesizer.close()
				reject(error)
			}
		)
	})
}

module.exports = {
	textToSpeech,
}
