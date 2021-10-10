import React, { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import {api} from './../api/api'
// mui
import { Box, Button } from '@mui/material'
import ReactAudioPlayer from 'react-audio-player'

export default function Assistant() {
	const [audioSrc, setAudioSrc] = useState(null)
	const [loading, setLoading] = useState(false)
	const [result, setResult] = useState(null)
	const {
		transcript,
		interimTranscript,
		finalTranscript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition()
	const { startListening, stopListening, abortListening } = SpeechRecognition
	const start = () =>
		startListening({
			continuous: true,
			interimResults: true,
			language: 'iw-IL',
		})
	const stop = () => stopListening()
	const abort = () => abortListening()

	useEffect(() => {
		if (finalTranscript === transcript && finalTranscript !== '') {
			setLoading(true)
			fetchData(finalTranscript)
		}
	}, [finalTranscript,transcript])

	async function fetchData(q) {
		try {
			const { config } = await api.get(`/quickAnswer?q=${q}`)
			const { data } = await api.get(`/quickAnswerData`)
			const {baseURL} = config
			setAudioSrc(`${baseURL}/quickAnswer?q=${finalTranscript}`)
			setResult(data)
		} catch (error) {
			console.log(error)
		}
	}
	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>
	}
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: 'calc(100vh - 5rem)',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
			}}>
			<Button disabled={loading} onClick={!listening ? start : stop} maxwidth='sm'>
				עוזר קולי {listening ? 'פעיל' : 'כבוי'}
			</Button>
			<Button onClick={resetTranscript} maxwidth='sm'>
				אפס עוזר קולי
			</Button>
			<div>
				<p>
					{interimTranscript ? interimTranscript : finalTranscript}
				</p>
			{result && <div>
				<code>{JSON.stringify(result)}</code>
			</div>}
				{audioSrc && (
					<div>
						<ReactAudioPlayer 
						src={audioSrc} 
						autoPlay={true}
						controls
						onCanPlay={() => setLoading(false)}
						onPlay={() => stop()}
						onEnded={() => {
							resetTranscript()
							start()
						}}
						/>
					</div>
				)}
				<div>
				</div>
			</div>
		</Box>
	)
}
