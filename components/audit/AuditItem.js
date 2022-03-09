import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from 'next/link';

import format from 'date-fns/format';

import SingleAuditModal from './SingleAuditModal';

const AuditItem = ({ audit, auditIndex, prepareShowSingleAuditModal }) => {
	const {
		_id,
		name,
		location,
		description,
		latitude,
		longitude,
		createdBy,
		updatedBy,
		createdAt,
		updatedAt,
	} = audit;

	return (
		<>
			<Grid item key={_id} xs={12} sm={12} md={6}>
				<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flexGrow: 1 }}>
						<Typography gutterBottom variant='h6'>
							{name}
						</Typography>
						<Typography gutterBottom>
							<strong>Location: </strong>
							{location}
						</Typography>

						<Typography gutterBottom>
							<strong>Description: </strong>
							{description}
						</Typography>
						<Typography gutterBottom>
							<strong>Coordinates: </strong> {latitude}, {longitude}
						</Typography>
						{!updatedBy ? (
							<Typography gutterBottom>
								<strong>Issued By: </strong>
								{`${createdBy}
														${format(new Date(createdAt), 'do MMM yy')}`}
							</Typography>
						) : (
							<Typography gutterBottom>
								<strong>Issue Updated By:</strong>
								{`${updatedBy}
														${format(new Date(updatedAt), 'do MMM yy')}`}
							</Typography>
						)}
					</CardContent>
					<CardActions>
						<Button onClick={() => prepareShowSingleAuditModal(auditIndex)} size='small'>
							View
						</Button>
						<Button size='small'>Edit</Button>
					</CardActions>
				</Card>
			</Grid>
		</>
	);
};

export default AuditItem;
