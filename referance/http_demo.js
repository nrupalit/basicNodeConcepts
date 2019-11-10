const http = require('http');

//Create server object
http.createServer((req, res) => {
    //write Respose
    res.write('hello');
    res.end()
}).listen(5000, () => console.log('server running'));