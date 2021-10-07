import React, { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import api from './../api/api'
// mui
import { Box, Button } from '@mui/material'

export default function Assistant() {
	const [answer, setAnswer] = useState(null)
	const [loading, setLoading] = useState(false)
	const {
		transcript,
		interimTranscript,
		finalTranscript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition()
	const { startListening, stopListening, abortListening } = SpeechRecognition
	const toggleRecognition = () =>
		listening
			? stopListening()
			: startListening({
					continuous: true,
					interimResults: true,
					language: 'iw-IL',
			  })

	useEffect(() => {
		if (finalTranscript === transcript && finalTranscript !== '') {
			setLoading(true)
			fetchData(finalTranscript)
      resetTranscript()
			setLoading(false)
		}
	}, [listening, transcript, finalTranscript, interimTranscript,resetTranscript])

  useEffect(() => {
    if (answer){
      if (speechSynthesis.speaking){
        abortListening()
        return
      }
      if (typeof answer === 'string'){
        const speech = new SpeechSynthesisUtterance(answer)
        speechSynthesis.speak(speech)
      }
      if (typeof answer === 'object' && answer[0].answer){
        const speech = new SpeechSynthesisUtterance(answer[0].answer)
        speechSynthesis.speak(speech)
      }
    }
  },[answer,abortListening])

	async function fetchData(q) {
    setAnswer('')
		const { data } = await api.get(`/quickAnswer?q=${q}`)
    console.log(data)
		setAnswer(data)
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
			}}>
			<Button disabled={loading} onClick={toggleRecognition} maxwidth='sm'>
				עוזר קולי {listening ? 'פעיל' : 'כבוי'}
			</Button>
			<div>
        <p>{typeof answer === 'string' ? answer : null}</p>
        <div>
          {typeof answer === 'object' ? answer?.map((item, index) => (
            <div key={index}>
              {Object.entries(item).map(([key, value]) => (
                <p key={key}>{key}: {value}</p>
              ))}
            </div>
          )) : null}
        </div>
      </div>
		</Box>
	)
}
