import React, { useReducer } from 'react';
import Cookies from 'js-cookie';

import AuditContext from './auditContext';
import auditReducer from './auditReducer';

const AuditState = (props) => {
	const initialState = {
		audits: [],
		singleAudit: null,
		editingAudit: false,
		loadingAudit: false,
	};

	const [state, dispatch] = useReducer(auditReducer, initialState);

	const listAudits = async () => {
		setLoadingAudit(true);
		try {
			let res = await fetch('/api/audit', {
				method: 'get',
				headers: {
					Authorization: `Bearer ${Cookies.get('token')}`,
				},
			});
			res = await res.json();

			if (res.error) {
				throw JSON.stringify(res.error);
			}

			dispatch({
				type: `LIST_AUDITS`,
				payload: res,
			});
			setLoadingAudit(false);
		} catch (error) {
			console.error('listAudits -> error', error);
		}
	};

	const createAudit = async (formData) => {
		try {
			let res = await fetch('/api/audit', {
				method: 'post',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${Cookies.get('token')}`,
				},
				body: JSON.stringify(formData),
			});
			res = await res.json();

			if (res.error) {
				throw JSON.stringify(res.error);
			}

			dispatch({
				type: `CREATE_AUDIT`,
				payload: res,
			});
		} catch (error) {
			console.error('createAudit -> error', error);
		}
	};

	const updateAudit = async (auditId, updatedAuditObj) => {
		try {
			let res = await fetch(`/api/audit/${auditId}`, {
				method: 'put',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${Cookies.get('token')}`,
				},
				body: JSON.stringify(updatedAuditObj),
			});
			res = await res.json();

			if (res.error) {
				throw JSON.stringify(res.error);
			}
		} catch (error) {
			console.error('updateAudit -> error', error);
		}
	};

	const getAudit = async (auditId) => {
		setLoadingAudit(true);
		try {
			let res = await fetch(`/api/audit/${auditId}`, {
				method: 'get',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${Cookies.get('token')}`,
				},
			});

			res = await res.json();
			if (res.error) {
				setLoadingAudit(false);

				throw JSON.stringify(res.error);
			}

			dispatch({
				type: `GET_AUDIT`,
				payload: res,
			});
			setLoadingAudit(false);

			return res;
		} catch (error) {
			console.error('getAudit -> error', error);
		}
	};

	const setEditingAudit = (mode) => {
		dispatch({
			type: `SET_EDITING`,
			payload: mode,
		});
	};

	const setLoadingAudit = (mode) => {
		dispatch({
			type: `SET_LOADING`,
			payload: mode,
		});
	};

	return (
		<AuditContext.Provider
			value={{
				audits: state.audits,
				singleAudit: state.singleAudit,
				editingAudit: state.editingAudit,
				loadingAudit: state.loadingAudit,
				message: state.message,

				setEditingAudit,
				setLoadingAudit,
				getAudit,
				changeMessage,
				listAudits,
				searchContentToBeAdded,
				createAudit,
				updateAudit,
			}}
		>
			{props.children}
		</AuditContext.Provider>
	);
};

export default AuditState;
