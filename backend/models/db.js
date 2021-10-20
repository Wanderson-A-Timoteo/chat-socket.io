const Sequelize = require('sequelize');

const sequelize = new Sequelize('chat_socketio', 'root', '12345', {
  host:'localhost',
  dialect:'mysql'
});

sequelize.authenticate()
.then(() => {
  console.log("Conexão com o banco de dados realizado com sucesso");
}).catch(() => {
  console.log("ERRO: Não foi possível conectar ao banco de dados!");
});

module.exports = sequelize;