const http = require("http");
const qs = require('querystring');
// const XMLHttpRequest = require('xhr2');
const server = http.createServer((request, resolve) => {

    request.on('data', (data) => {
        console.log(qs.parse(data.toString()));
    })

    resolve.setHeader('Content-Type', 'application/json');

    const newData = JSON.stringify({
        "error": "",
        "login": "sasi huy"
    })
    resolve.end(newData);
});

server.listen(3001, 'localhost', (error) => {
    error ? console.log(error) : console.log('listening port 3001...');
})