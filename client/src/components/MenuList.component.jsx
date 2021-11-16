import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const list = [
	{
		name: 'assistant',
		heName: 'עוזרת קולית',
		to: '/assistant',
	},
	{
		name: 'codex',
		heName: 'קודקס',
		to: '/codex',
	},
	{
		name: 'playground',
		heName: 'מגרש משחקים',
		to: '/playground',
	},
	{
		name: 'docs',
		heName: 'דוקומנטציה',
		to: '/docs',
	},
	{
		name: 'examples',
		heName: 'דוגמאות',
		to: '/examples',
	},
]

function CustomLink({ name, heName, path }) {
	const { listening } = useSpeechRecognition()
	const location = useLocation()

	useEffect(() => {
		if (!listening || location.pathname === '/assistant') return
		else if (
			listening &&
			(list.find(item => item.to === location.pathname) || location.pathname === '/')
		) {
			SpeechRecognition.stopListening()
		}
	}, [listening, location.pathname])

	return (
		<li>
			<NavLink to={path} title={name} exact>
				{heName}
			</NavLink>
		</li>
	)
}
export default function MenuList() {
	return (
		<ul>
			{list.map(({ name, heName, to }) => (
				<CustomLink key={name} name={name} heName={heName} path={to} />
			))}
		</ul>
	)
}
