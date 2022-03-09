import React, { useEffect, useContext, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AuditItem from '../components/audit/AuditItem';
import SingleAuditModal from '../components/audit/SingleAuditModal';

import AuditContext from '../context/audit/auditContext';

const theme = createTheme();

const Dashboard = () => {
	const auditContext = useContext(AuditContext);

	const { audits, loadingAudit, listAudits } = auditContext;

	const [showSingleAuditModal, setShowSingleAuditModal] = useState(false);
	const [singleAudit, setSingleAudit] = useState({});

	/**
	 * set singleAudit from list of audist by its index
	 *
	 * @param {number} auditIndex
	 */
	const prepareShowSingleAuditModal = (auditIndex) => {
		setSingleAudit(audits[auditIndex]);
		console.log(
			'🚀 -> file: Dashboard.js -> line 35 -> prepareShowSingleAuditModal -> audits[auditIndex]',
			audits[auditIndex]
		);
		setShowSingleAuditModal(true);
	};

	useEffect(() => {
		listAudits();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main>
				{!loadingAudit ? (
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
							{audits.map((audit, auditIndex) => (
								<AuditItem
									key={audit._id}
									audit={audit}
									auditIndex={auditIndex}
									prepareShowSingleAuditModal={prepareShowSingleAuditModal}
								></AuditItem>
							))}
						</Grid>
						<SingleAuditModal
							showSingleAuditModal={showSingleAuditModal}
							setShowSingleAuditModal={setShowSingleAuditModal}
							singleAudit={singleAudit}
						></SingleAuditModal>
					</Container>
				) : (
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							marginTop: '5rem',
						}}
					>
						<CircularProgress />
						<h5>Fetching audits...</h5>
					</div>
				)}
			</main>
		</ThemeProvider>
	);
};

export default Dashboard;
