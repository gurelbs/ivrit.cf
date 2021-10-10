import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { api } from './../api/api'
import axios from 'axios'
// mui
import { Box, Typography,Badge } from '@mui/material'
import Fab from '@mui/material/Fab'
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
export default function Assistant() {
	const CancelToken = axios.CancelToken
	const source = CancelToken.source()
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
			if(finalTranscript === 'דורין'){
				setResult(null)
				setAudioSrc(null)
				setLoading(false)
				resetTranscript()
				abort()
				start()
			}
		})
	useEffect(() => {
		if (finalTranscript === transcript && finalTranscript !== '' && finalTranscript !== 'דורין') {
			setLoading(true)
			fetchData(finalTranscript)
		}
	}, [finalTranscript, transcript])
	function createMarkup() {
		return { __html: result }
	}
	function RenderData() {
		return <div dangerouslySetInnerHTML={createMarkup()} />
	}
	async function fetchData(q) {
		try {
			const { config } = await api.get(`/answer?q=${q}`, { CancelToken: source.token })
			const { data } = await api.get(`/dataAnswer`, { CancelToken: source.token })
			console.log(data)
			const { baseURL } = config
			setAudioSrc(`${baseURL}/answer?q=${finalTranscript}`)
			setResult(data.result)
		} catch (error) {
			console.log(error)
			setResult('לא מצאתי תשובה, אבל אפשר לנסות שוב עם ביטוי דומה')
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
				gap: '1.5rem',
				alignItems: 'center',
				textAlign: 'center',
			}}>
				<Badge color="secondary" variant={listening ? "dot" : null} overlap="circular" badgeContent={listening ? " " : null}>
					<Fab
					variant={listening ? 'extended' : 'circular'}
					disabled={loading}
					onClick={!listening ? start : stop}
					maxwidth='sm'>
					{listening ? <MicIcon/> : <MicOffIcon/>}
				</Fab>
			</Badge>
			<div>
				<Typography fontWeight={400}>{interimTranscript ? interimTranscript : finalTranscript}</Typography>
				{result && (
					<Box sx={{
						display: 'flex',
						flexDirection: 'column',
						maxWidth:400,
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
					}}>
						<RenderData />
					</Box>
				)}
				{audioSrc && (
					<div style={{marginTop:'1rem'}}>
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
							onAbort={() => {
								resetTranscript()
								start()
							}}
							onPause={() => {
								resetTranscript()
								start()
							}}
						/>
					</div>
				)}
			</div>
		</Box>
	)
}
