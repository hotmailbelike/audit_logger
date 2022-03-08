const path = require('path');
/** @type {import('next').NextConfig} */
let nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};

if (process.env.NODE_ENV === 'development') {
	nextConfig = {
		...nextConfig,
		async rewrites() {
			return [
				{
					source: '/api/:path*',
					destination: 'http://localhost:5000/api/:path*', // Proxy to Backend
				},
			];
		},
	};
}
module.exports = nextConfig;
