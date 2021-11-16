import { useState, useCallback } from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react'
import axios from 'axios'
import InputWithMic from './../components/InputWithMic'
import useLocalStorge from './../hooks/useLocalStorge'
import { Box } from '@mui/material';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
// ------------------------------------

export default function Codex() {
	const { finalTranscript, listening } = useSpeechRecognition()
	const { startListening, stopListening, abortListening } = SpeechRecognition
	const start = () =>
		startListening({
			continuous: true,
			interimResults: true,
			language: 'iw-IL',
		})
	const stop = useCallback(() => stopListening(), [stopListening])
	const CancelToken = axios.CancelToken
	const source = CancelToken.source()
	const [q, setQ] = useState('')
	const [loading, setLoading] = useState(false)
	const [results, setResults] = useLocalStorge('codex', '')
	const options = {
		selectOnLineNumbers: true,
		roundedSelection: false,
		readOnly: false,
	};
	async function fetchData() {
		try {
			const { data } = await axios.get('http://localhost:4000/api/codex', { q })
			console.log(data.answer)
			setResults(data.answer)
		} catch (error) {
			console.log(error)
		}
	}

	function hendleKeyDown(e) {
		if (e.key === 'Enter') {
			setLoading(true)
			fetchData(q)
			setQ('')
			setLoading(false)
		}
	}
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '1rem',
			}}>
			<InputWithMic
				value={q}
				loading={loading}
				hendleClick={() => !listening ? start : stop}
				hendleChange={e => setQ(e.target.value)}
				listening={listening}
				hendleKeyDown={hendleKeyDown}
			/>
				<Editor
					height='50vh'
					theme='vs-dark'
					value={results}
					options={options}
					defaultValue={results}
					onChange={setResults}
				/>
		</Box>
	)
}
/* make the screen height/width 100/100 */
/* cancel body margin */
/* make a red ball bounce around the screen. when the ball hit the edge of the screen make the ball bounce up */
/* create small gray boxs in the top of the screen with gap between them */
/* when click on the arrows keboard key, move the ball */
