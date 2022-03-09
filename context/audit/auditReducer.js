const auditReducer = (state, { type, payload }) => {
	switch (type) {
		case `LIST_AUDITS`:
			return {
				...state,
				audits: payload,
			};
		case `FILTER_CONTENT_TO_BE_ADDED`:
			return {
				...state,
				filteredItems: payload,
			};
		case `CREATE_AUDIT`:
			return {
				...state,
				audits: [payload, ...state.audits],
			};
		case `GET_AUDIT`:
			return {
				...state,
				singleAudit: payload,
			};

		case `SET_EDITING`:
			return {
				...state,
				editingAudit: payload,
			};
		case `SET_LOADING`:
			return {
				...state,
				loadingAudit: payload,
			};
		case `CHANGE_MESSAGE`:
			return {
				...state,
				message: payload,
			};
		default:
			return state;
	}
};

export default auditReducer;
