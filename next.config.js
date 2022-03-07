/** @type {import('next').NextConfig} */
let nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
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
