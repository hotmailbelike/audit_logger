const config = {
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3000,
	mongoUri:
		process.env.MONGO_URI ||
		'mongodb+srv://user_0:papponi312@cluster0-vq45a.mongodb.net/Audit_Logger_DB?retryWrites=true&w=majority',
};

module.exports = config;
