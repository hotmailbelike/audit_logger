'use strict';

const mongoose = require('mongoose');

const AuditSchema = mongoose.Schema(
	{
		site_id: {
			type: Number,
			default: 0,
		},
		name: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		latitude: {
			type: Number,
			required: true,
		},
		longitude: {
			type: Number,
			required: true,
		},
		createdBy: {
			type: String,
			required: true,
		},
		updatedBy: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model('audit', AuditSchema);
