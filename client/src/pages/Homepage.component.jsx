import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
// component
import MenuList from './../components/MenuList.component'

export default function Homepage() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: 'calc(100vh - 5rem)',
			}}>
			<CssBaseline />
			<Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='sm'>
				<Typography variant='h2' component='h1' gutterBottom>
					ברוכים הבאים ל-IVRIT
				</Typography>
				<Typography variant='h5' component='h2' gutterBottom>
					{'API למידע בעברית בזמן אמת'}
				</Typography>
				<Typography variant='body1'>
					להתקנת החבילה <span dir='ltr'>(Node.js)</span>
				</Typography>
				<Typography variant='h5' gutterBottom>
					<code style={{ backgroundColor: 'lightgray' }}>npm i ivrit</code>
				</Typography>
				<div className='list_wrap'>
					<MenuList />
				</div>
			</Container>
		</Box>
	)
}
