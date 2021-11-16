import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import ReactAudioPlayer from 'react-audio-player'
import Typewriter from 'typewriter-effect'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
// mui
import { Box, Typography } from '@mui/material'
import InputWithMic from './../components/InputWithMic'
import { api } from './../api/api'
// ------------------------------------
export default function Assistant() {
	const CancelToken = axios.CancelToken
	const source = CancelToken.source()
	const [audioSrc, setAudioSrc] = useState(null)
	const [loading, setLoading] = useState(false)
	const [result, setResult] = useState(null)
	const [query, setQuery] = useState('')
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
	const stop = useCallback(() => stopListening(), [stopListening])
	const abort = useCallback(() => abortListening(), [abortListening])
	const fetchData = useCallback(
		async q => {
			try {
				setResult(null)
				const { config } = await api.get(`/answer?q=${q}`, { CancelToken: source.token })
				const { data } = await api.get(`/dataAnswer`, { CancelToken: source.token })
				console.log(data)
				const { baseURL } = config
				setAudioSrc(`${baseURL}/answer?q=${q}`)
				setResult(data.result)
				resetTranscript()
			} catch (error) {
				console.log(error)
				setResult('לא מצאתי תשובה, אבל אפשר לנסות שוב עם ביטוי דומה')
				resetTranscript()
				setResult(null)
			}
		},
		[resetTranscript, source]
	)

	useEffect(() => {
		if (finalTranscript === 'כיבוי') {
			setResult(null)
			setAudioSrc(null)
			setLoading(false)
			resetTranscript()
			stop()
		}
	}, [finalTranscript, resetTranscript, stop])

	useEffect(() => {
		if (finalTranscript === transcript && finalTranscript !== '' && finalTranscript !== 'כיבוי') {
			setLoading(true)
			fetchData(finalTranscript)
			setLoading(false)
		}
	}, [finalTranscript, transcript, fetchData])

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>
	}
	function hendleAudio() {
		stop()
		setLoading(false)
	}
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: 'calc(100vh - 5rem)',
				justifyContent: 'center',
				gap: '1.5rem',
				alignItems: 'center',
				textAlign: 'center',
			}}>
			<Box>
				<Typewriter
					onInit={typewriter =>
						typewriter.typeString('אפשר להקליד שאלה או פשוט ללחוץ על הכפתור ולהתחיל לדבר').start()
					}
					options={{
						delay: 40,
						autoStart: true,
					}}
				/>
			</Box>
			<InputWithMic
				value={query}
				loading={loading}
				hendleClick={!listening ? start : stop}
				hendleChange={e => setQuery(e.target.value)}
				listening={listening}
				hendleKeyDown={e => {
					if (e.key === 'Enter') {
						setLoading(true)
						fetchData(query)
						setQuery('')
						setLoading(false)
					}
				}}
			/>
			<div>
				<Typography fontWeight={400}>
					{interimTranscript ? interimTranscript : finalTranscript}
				</Typography>
				{result && (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							maxWidth: 400,
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
						}}>
						<Typewriter
							onInit={typewriter => typewriter.typeString(result).start()}
							options={{
								delay: 40,
								autoStart: true,
							}}
						/>
					</Box>
				)}
				{audioSrc && (
					<div style={{ marginTop: '1rem' }}>
						<ReactAudioPlayer
							src={audioSrc}
							autoPlay={true}
							controls
							onPlay={() => hendleAudio()}
							onEnded={() => hendleAudio()}
							onAbort={() => hendleAudio()}
							onPause={() => hendleAudio()}
							onError={() => hendleAudio()}
						/>
					</div>
				)}
			</div>
		</Box>
	)
}
