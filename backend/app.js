const express = require('express');
const socket = require('socket.io');
const cors = require('cors')
const app = express();

app.use(express.json());

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

  // Recebe a seleção de sala do front-end, usando o metodo On
  socket.on("sala_conectar", (dados) => {
    console.log("Sala selecionada: " + dados);
    socket.join(dados);
  });

  // Recebe a Mensagem do front-end, usando o metodo On
  socket.on("enviar_mensagem", (dados) => {
    console.log(dados);
    
    // Enviar a mensagem para todos os usuarios da sala por broadcasting, que estão no front-end
    socket.to(dados.sala).emit("receber_mensagem", dados.conteudo);

  });

});