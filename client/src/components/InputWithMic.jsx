import React from 'react'
// mui
import { Badge, InputAdornment, IconButton, OutlinedInput } from '@mui/material'
import Fab from '@mui/material/Fab'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'

export default function InputWithMic({
	value,
	hendleKeyDown,
	hendleChange,
	hendleClick,
	listening,
	loading,
}) {
	return (
		<OutlinedInput
			sx={{
				maxWidth: '50%',
				padding: '1rem',
				border: 0,
			}}
			endAdornment={
				<InputAdornment position='end'>
					<Badge
						color='secondary'
						variant={listening ? 'dot' : null}
						overlap='circular'
						badgeContent={listening ? ' ' : null}>
						<Fab
							variant={listening ? 'extended' : 'circular'}
							disabled={loading}
							onClick={hendleClick}
							maxwidth='sm'>
							{listening ? <MicIcon /> : <MicOffIcon />}
						</Fab>
					</Badge>
				</InputAdornment>
			}
			type='text'
			fullWidth
			autoFocus
			placeholder='אפשר לשאול אותי כל דבר, אעשה כמיטב יכולתי!'
			value={value}
			onChange={hendleChange}
			onKeyDown={hendleKeyDown}
		/>
	)
}
