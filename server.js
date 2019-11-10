const http = require('http');
const fs = require('fs');
const Person = require('./secondaryFile');

const hostName = 'localhost';
const port = 3000;

const person = new Person('John Doe', 30);

person.greeting();



fs.readFile('index.html', (err, html) => {
	if (err) {
		throw err;
	}
	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		res.end();
	});

	server.listen(port, hostName, () => {
		console.log('server is running on localhost:3000')
	});

});



