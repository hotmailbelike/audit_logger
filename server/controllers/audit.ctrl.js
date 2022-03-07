'use strict';

const Audit = require('../models/audit.model');

const errorHandler = require('../helpers/dbErrorHandler');

/**
 * @param {Object} req
 * @param {Object} req.body
 */
const createAudit = async (req, res) => {
	const { body } = req;
	try {
		const audit = new Audit(body);
		await audit.save();

		res.json({ msg: 'successfully created an audit log' });
	} catch (error) {
		console.error('createAudit -> error', error.message);
		res.status(500).json({ error: errorHandler.getErrorMessage(error) });
	}
};

/**
 * @param {Object} req
 */
const listAudits = async (req, res) => {
	try {
		const audits = await Audit.find().sort({ _id: -1 });

		res.json(audits);
	} catch (error) {
		console.error('listAudits -> error', error.message);
		res.status(500).json({ error: errorHandler.getErrorMessage(error) });
	}
};

/**
 * @param {Object} req
 * @param {Object} req.params
 * @param {string} req.params.auditId
 */
const getAudit = async (req, res) => {
	const { auditId } = req.params;
	try {
		const audit = await Audit.findById(auditId);
		if (!audit) {
			return res.status(404).json({ msg: 'audit does not exist' });
		}

		res.json(audit);
	} catch (error) {
		console.error('getAudit -> error', error.message);
		res.status(500).json({ error: errorHandler.getErrorMessage(error) });
	}
};

/**
 * @param {Object} req
 * @param {Object} req.body
 * @param {Object} req.params
 * @param {string} req.params.auditId
 */
const updateAudit = async (req, res) => {
	const { body } = req;
	const { auditId } = req.params;

	try {
		const audit = await Audit.findByIdAndUpdate(auditId, body, {
			useFindAndModify: false,
			new: true,
		});

		if (!audit) {
			return res.status(404).json({ msg: 'audit does not exist' });
		}

		res.json(audit);
	} catch (error) {
		console.error('updateAudit -> error', error.message);
		res.status(500).json({ error: errorHandler.getErrorMessage(error) });
	}
};

/**
 * @param {Object} req
 * @param {Object} req.params
 * @param {string} req.params.auditId
 */
const deleteAudit = async (req, res) => {
	const { auditId } = req.params;
	try {
		const audit = await Audit.findByIdAndDelete(auditId);

		if (!audit) {
			return res.status(404).json({ msg: 'audit does not exist' });
		}

		res.json({ msg: 'successfully deleted an audit log' });
	} catch (error) {
		console.error('deleteAudit -> error', error.message);
		res.status(500).json({ error: errorHandler.getErrorMessage(error) });
	}
};

module.exports = {
	createAudit,
	listAudits,
	getAudit,
	updateAudit,
	deleteAudit,
};
