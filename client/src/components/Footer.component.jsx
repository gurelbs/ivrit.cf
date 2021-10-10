import { Container, Typography, Box } from '@mui/material'
function Copyright() {
	/* eslint-disable react/jsx-no-target-blank */
	return (
		<Typography variant='body2' color='text.secondary'>
			{'Copyright © '}
			{/* <Link color='inherit'> */}
			<a href='https://guribs.com/' target='_blank'>
				guribs
			</a>
			{' '}
			{/* </Link>{' '} */}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}
const bgColor = theme =>
	theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800]

export default function Footer() {
	return (
		<Box
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
      }}
			component='footer'
			sx={{
				py: 3,
				px: 2,
				mt: 'auto',
				backgroundColor: bgColor,
			}}>
			<Container maxWidth='sm'>
				<Typography variant='body1'>
					נבנה באהבה ע"י{' '}
					<a target='_blank' href='https://github.com/gurelbs'>
						גוראל בן שבת
					</a>
					.
				</Typography>
				<Copyright />
			</Container>
		</Box>
	)
}
