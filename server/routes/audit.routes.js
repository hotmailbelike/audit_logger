const express = require('express');
const router = express.Router();
const {
	createAudit,
	listAudits,
	getAudit,
	updateAudit,
	deleteAudit,
} = require('../controllers/audit.ctrl');

/* 
  param:  auditId -> id of the audit
*/

router.post(`/api/audit`, createAudit);

router.get('/api/audit', listAudits);

router.get(`/api/audit/:auditId`, getAudit);

router.delete('/api/audit/:auditId', deleteAudit);

router.put('/api/audit/:auditId', updateAudit);

module.exports = router;
