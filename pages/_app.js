import '../styles/globals.scss';

import AuditState from '../context/audit/AuditState';

function MyApp({ Component, pageProps }) {
	return (
		<AuditState>
			<Component {...pageProps} />{' '}
		</AuditState>
	);
}

export default MyApp;
