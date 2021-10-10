import React from 'react'
import { Link } from 'react-router-dom'

function CustomLink({ name, heName, path}) {
	return (
		<li>
			<Link to={path} title={name}>
				{heName}
			</Link>
		</li>
	)
}
export default function MenuList() {
	const list = [
		{
			name: 'assistant',
			heName: 'עוזרת קולית',
			to: '/assistant',
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

	const listItems = list.map(({name,heName,to}) => (
		<CustomLink
      key={name} 
      name={name}
      heName={heName}
      path={to}
    />
	));

	return <ul>
    {listItems}
  </ul>
}
