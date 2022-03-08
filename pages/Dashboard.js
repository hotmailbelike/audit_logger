import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import format from 'date-fns/format';

const theme = createTheme();

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Dashboard = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main>
				<Container sx={{ py: 8 }} maxWidth='xl'>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							mb: 2,
						}}
					>
						<Typography variant='h6' component='div'>
							List of Logs
						</Typography>
						<Button variant='outlined' endIcon={<AddIcon />}>
							Add an Audit Log
						</Button>
					</Box>
					<Divider />
					<br />
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={12} md={6}>
								<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography gutterBottom variant='h6'>
											Name
										</Typography>
										<Typography gutterBottom>
											<strong>Location:</strong> Lorem ipsum dolor sit amet, consectetur
											adipisicing elit. Id, tenetur. Lorem, ipsum dolor sit amet
											consectetur adipisicing elit. Nesciunt, odio.{' '}
										</Typography>

										<Typography gutterBottom>
											<strong>Description:</strong> Lorem ipsum dolor sit amet,
											consectetur adipisicing elit. Id, tenetur. Lorem, ipsum dolor sit
											amet consectetur adipisicing elit. Nesciunt, odio.{' '}
										</Typography>
										<Typography gutterBottom>
											<strong>Coordinates:</strong> -27.55998421, 153.0811615
										</Typography>
										<Typography gutterBottom>
											<strong>Issued By:</strong> John Doe on{' '}
											{format(new Date(), 'do MMM yy')}
										</Typography>
									</CardContent>
									<CardActions>
										<Button size='small'>View</Button>
										<Button size='small'>Edit</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</ThemeProvider>
	);
};

export default Dashboard;
