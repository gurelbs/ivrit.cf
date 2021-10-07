import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
// components
import Nav from './components/Nav.component'
import Homepage from './pages/Homepage.component'
import Docs from './pages/Docs.component'
import Playground from './pages/Playground.component'
import Examples from './pages/Examples.component'
import NotFound from './pages/NotFound.component'
import Assistant from './pages/Assistant.component'
import Footer from './components/Footer.component'

// Mui
import { Box, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
const theme = createTheme({
	direction: 'rtl', // Both here and <body dir="rtl">
})
export default function App() {
	const routes = [
		{ path: '/', name: 'homepage', Component: Homepage },
		{ path: '/docs', name: 'documentation', Component: () => (<><Nav/><Docs/></>) },
		{ path: '/playground', name: 'recognition', Component: () => (<><Nav/><Playground/></> )},
		{ path: '/examples', name: 'homepage', Component: () => (<><Nav/><Examples/></>) },
		{ path: '/assistant', name: 'homepage', Component: () => (<><Nav/><Assistant/></>) },
	]
	return (
		<ThemeProvider theme={theme}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
					}}>
				<CssBaseline />
				<Router>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							marginTop: '5rem',
						}}>
						<Switch>
							{routes.map(({ path, Component }) => (
								<Route key={path} component={Component} path={path} exact />
							))}
							<Route component={NotFound} />
						</Switch>
					</Box>
				</Router>
				<Footer />
		</Box>
			</ThemeProvider>
	)
}
