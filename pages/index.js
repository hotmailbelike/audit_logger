import Head from 'next/head';

import Dashboard from './Dashboard';
import NavbarWrapper from '../components/navbar/NavbarWrapper';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Audit Logger</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavbarWrapper>
				<Dashboard></Dashboard>
			</NavbarWrapper>
		</div>
	);
}
