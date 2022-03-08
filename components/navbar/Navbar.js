import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

const Navbar = () => {
	return (
		<AppBar position='relative'>
			<Link href='/'>
				<a>
					<Toolbar>
						<EventNoteIcon sx={{ mr: 2 }} />
						<Typography variant='h6' color='inherit' noWrap>
							Audit Logger
						</Typography>
					</Toolbar>
				</a>
			</Link>
		</AppBar>
	);
};

export default Navbar;
