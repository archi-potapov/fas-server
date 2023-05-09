import express from "express";
import bodyParser from "body-parser";

const PORT = 3001;
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req, res) => {
    console.log("MARAKUYA");
})
app.post('/',(req, res) => {
    let body = '';
    // let json = req.json();
    console.log(req.body);
    req.on('data', chunk => {
        body += chunk.toString();
        console.log(body);
    });
    req.on('end', () => {
        console.log(JSON.parse(body));
    });
    res.send({"login": "logggin", "error": ""});
})

app.listen(PORT, () => {
    console.log(`The server has been started on port ${PORT}...`);
});

// const http = require("http");
// const qs = require('querystring');
// // const XMLHttpRequest = require('xhr2');
// console.log("SER");
// const server = http.createServer((request, resolve) => {
//
//     request.on('data', (data) => {
//         console.log(qs.parse(data.toString()));
//     })
//
//     resolve.setHeader('Content-Type', 'application/json');
//
//     const newData = JSON.stringify({
//         "error": "",
//         "login": "sasi huy"
//     })
//     resolve.end(newData);
// });
//
// server.listen(3001, 'localhost', (error) => {
//     error ? console.log(error) : console.log('listening port 3001...');
// })