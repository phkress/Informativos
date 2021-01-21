var http = require('http');
var app = require('./src/config/express');
require('./src/config/database')('mongodb://localhost/ScriptCallcenter');

http.createServer(app)
.listen(3001, function() {
	console.log('Servidor iniciado');
});
