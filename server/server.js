'use strict';

const http = require('http');
const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const config = require('../config/config');

// import routes
const auditRoutes = require('./routes/audit.routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
const httpServer = http.Server(server);

// connect to database function
const connectDB = async () => {
	try {
		await mongoose.connect(config.mongoUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		if (process.env.NODE_ENV !== 'test') console.log(`Connected to database`);
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

//call function to connect to database
connectDB();

//Init middleware
server.use(express.json());
server.use(
	express.urlencoded({
		extended: true,
	})
);

//Define routes
server.use('/', auditRoutes);

if (process.env.NODE_ENV !== 'test') {
	if (process.env.APP_ENV === 'development-server') {
		httpServer.listen(port, (error) => {
			if (error) throw error;
			console.log(`> Ready on http://localhost:${port}`);
		});
	} else {
		app.prepare().then(() => {
			server.get('/', (req, res) => {
				return app.render(req, res, '/', req.query);
			});

			server.all('*', (req, res) => {
				return handle(req, res);
			});
		});
		httpServer.listen(port, (error) => {
			if (error) throw error;
			console.log(`> Ready on http://localhost:${port}`);
		});
	}
}

module.exports = { server, httpServer, mongoose };
