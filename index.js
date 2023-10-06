import express from "express";
import bodyParser from "body-parser";
import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const PORT = 3001;
const app = express();

// const sslServer = https.createServer({
//     key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
//     cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
// }, app)

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/server/", (request, resolve) => {
  console.log(request.hostname);
  resolve.send("Success");
});
app.post("/", (request, resolve) => {
  let body = "AA";
  // let json = request.json();
  request.on("data", (chunk) => {
    body += chunk.toString();
  });
  request.on("end", () => {
    console.log(JSON.parse(body));
  });
  //   resolve.send({ login: "logggin", error: "" });
  resolve.send(body);
});

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
