import express from "express";
import bodyParser from "body-parser";

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (request, resolve) => {
  //   console.log(request.hostname);
  resolve.send("Success");
});
app.post("/", (request, resolve) => {
  let body = "";
  // let json = request.json();
  console.log(request.body);
  request.on("data", (chunk) => {
    body += chunk.toString();
    console.log(body);
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
