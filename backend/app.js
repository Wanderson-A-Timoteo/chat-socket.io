const express = require('express');
const socket = require('socket.io');
const cors = require('cors')
const app = express();

const Usuario = require('./models/Usuario');

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

app.post('/cadastrar-usuario', async(req, res) => {
  var dados = req.body;
  
  const usuario = await Usuario.findOne({
    where: {
      email: dados.email
    }
  });

  if(usuario) {
    return res.status(400).json({
      erro: true,
      mensagem: "ERRO: Este e-mail já está cadastrado!"
    });
  }

  await Usuario.create(dados)
  .then(() => {
    return res.json({
      erro: false,
      mensagem: "Usuário cadastrado com sucesso!"
    });
  }).catch(() => {
    return res.status(400).json({
      erro: true,
      mensagem: "ERRO: Usuário não cadastrado!"
    });
  });
});

app.post('/validar-acesso', async(req, res) => {
  const usuario = await Usuario.findOne({
    attributes: ['id', 'nome'],
    where: {
      email: req.body.email
    }
  });

  if(usuario === null) {
    return res.status(400).json({
      erro: true,
      mensagem: "ERRO: Usuário não encontrado!"
    });
  };

  return res.json({
    erro: false,
    mensagem: "Login realizado com sucesso!",
    usuario
  });
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