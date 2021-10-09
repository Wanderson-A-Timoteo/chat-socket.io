const express = require('express');
const socket = require('socket.io');
const cors = require('cors')
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-type, Authorization");
  app.use(cors());
  next();
});

app.get('/', function(req, res) {
  res.send('Bem vindo! Wanderson');
});

const server = app.listen(8000, () => {
  console.log("Servidor iniciado na porta 8000: http://localhost:8000")
});

io = socket(server, {cors: {origin: "*"}});

io.on("connection", (socket) => {
  console.log(socket.id);
});