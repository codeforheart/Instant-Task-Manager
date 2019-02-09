const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3003; // set port
const server = http.createServer(app); // handle req res, should have a lstener that handles req/res

server.listen(port);