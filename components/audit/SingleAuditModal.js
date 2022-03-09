import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import format from 'date-fns/format';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	maxWidth: 1000,
	bgcolor: 'background.paper',
	borderRadius: 6,
	boxShadow: 24,
	p: 4,
};

const SingleAuditModal = ({
	showSingleAuditModal,
	setShowSingleAuditModal,
	singleAudit,
}) => {
	const {
		site_id,
		name,
		location,
		description,
		latitude,
		longitude,
		createdBy,
		updatedBy,
		createdAt,
		updatedAt,
	} = singleAudit;
	const handleClose = () => setShowSingleAuditModal(false);

	return (
		<div>
			<Modal open={showSingleAuditModal} onClose={handleClose}>
				{name && (
					<Box sx={style}>
						<Typography variant='h4'>{name}</Typography>
						<div style={{ marginBottom: 7, marginTop: 7 }}>
							<Divider />
						</div>
						<Typography gutterBottom variant='h6'>
							<strong>Site Id: </strong>
							{site_id}
						</Typography>
						<Typography gutterBottom variant='h6'>
							<strong>Jurisdiction/City/Region: </strong>
							{location}
						</Typography>

						<Typography gutterBottom variant='h6'>
							<strong>Site Description: </strong>
							{description}
						</Typography>
						<div style={{ display: 'flex' }}>
							<Typography gutterBottom variant='h6'>
								<strong>Latitude: </strong>
								{latitude}
							</Typography>
							<Typography sx={{ ml: 5 }} gutterBottom variant='h6'>
								<strong>Longitude: </strong>
								{longitude}
							</Typography>
						</div>

						<Typography gutterBottom variant='h6'>
							<strong>Issued By: </strong>
							{`${createdBy}
														${format(new Date(createdAt), 'do MMMM yyyy')}`}
						</Typography>
						{updatedBy && updatedAt && (
							<Typography gutterBottom variant='h6'>
								<strong>Issue Updated By:</strong>
								{`${updatedBy}
														${format(new Date(updatedAt), 'do MMMM yyyy')}`}
							</Typography>
						)}
					</Box>
				)}
			</Modal>
		</div>
	);
};

export default SingleAuditModal;
