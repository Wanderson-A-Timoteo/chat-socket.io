import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { 
  Container, 
  Conteudo, 
  Header, 
  Form, 
  Campo, 
  Label, 
  Input, 
  Select, 
  BtnAcessar, 
  HeaderChat, 
  ImgUsuario, 
  NomeUsuario,
  ChatBox, 
  ConteudoChat,
  MsgEnviada,
  DetMsgEnviada,
  TextoMsgEnviada,
  MsgRecebida,
  DetMsgRecebida,
  TextoMsgRecebida,
  FooterChat,
  EnviarMsg,
  CampoMsg,
  BtnEnviarMsg } from './styles/styles';
  import api from './config/configApi';

let socket;

function App() {

  const ENDPOINT = "http://localhost:8000/";

  const [logado, setLogado] = useState(false);
  const [setUsuarioId] = useState(" ");
  const [nome, setNome] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [sala, setSala] = useState(" ");

  // const [logado, setLogado] = useState(true);
  // const [nome, setNome] = useState("Wanderson");
  // const [sala, setSala] = useState("1");

  const [mensagem, setMensagem] = useState(" "); // Para enviar mensagem
  const [listaMensagem, setListaMensagem] = useState([]); // Para receber mensagem


  useEffect(() => {
    socket = socketIOClient(ENDPOINT);
  },[]);

  useEffect(() => {
    socket.on("receber_mensagem", (dados) => {
      setListaMensagem([...listaMensagem, dados]);
    });
  });

 // Envia a sala para o Back-end
  const conectarSala = async e => {
    e.preventDefault();

    console.log("Acessou a sala " + sala + " com o e-mail " + email);
    
    const headers = {
      'Content-Type': 'application/json'
    }  
    
    await api.post('/validar-acesso', {email}, {headers})
    .then((response) => {
      console.log(response.data.mensagem);
      console.log(response.data.usuario.id);
      console.log(response.data.usuario.nome);

      setNome(response.data.usuario.nome);
      setUsuarioId(response.data.usuario.id);
      setLogado(true);
      // Metodo para enviar para o Back-end 
      socket.emit("sala_conectar", sala);
    }).catch((err) => {
      if(err.response) {
        console.log(err.response.data.mensagem);
      }else{
        console.log("ERRO: Tente mais tarde!");
      }
    });
  }

 // Envia a Mensagem para o Back-end
  const enviarMensagem = async () => {
    console.log("Mensagem: " + mensagem);
    const conteudoMensagem = {
      sala,
      conteudo: {
        nome,
        mensagem
      }
    }
    console.log(conteudoMensagem);

    // Metodo para enviar para o Back-end 
    await socket.emit("enviar_mensagem", conteudoMensagem);
    // Para receber broadcasting com as mensagens da sala
    setListaMensagem([ ...listaMensagem, conteudoMensagem.conteudo]);
    setMensagem("");
  }

  return (
    <Container>
      
      {!logado ? 
      <Conteudo>
        <Header>Meu chat sobre...</Header>
        <Form onSubmit={conectarSala}>
          <Campo>
            <Label>E-mail: </Label>
            <Input 
              type="text" 
              placeholder="E-mail" 
              name="email" 
              value={email} 
              onChange={(texto) => {setEmail(texto.target.value)}} 
            /> 
          </Campo>
          <Campo>
            <Label>Sala: </Label>
            {/* <input type="text" placeholder="Sala" value={sala} onChange={(text) => {setSala(text.target.value)}
            } /> <br /><br /> */}
            <Select name="sala" value={sala} onChange={texto => setSala(texto.target.value)}>
              <option value="">Selecione</option>
              <option value="1">Node.js</option>
              <option value="2">React.js</option>
              <option value="3">React Native</option>
              <option value="4">PHP</option>
            </Select>
          </Campo>
          <BtnAcessar>Acessar</BtnAcessar>
        </Form>
      </Conteudo>
      : 
      <ConteudoChat>
        <HeaderChat>
          <ImgUsuario src="h23.jpg" alt={nome} />
          <NomeUsuario>{nome}</NomeUsuario>
        </HeaderChat>

        <ChatBox>
          {listaMensagem.map((msg, key) => {
            return(
              <div  key={key}>
                {nome === msg.nome ? 
                  <MsgEnviada>
                    <DetMsgEnviada>
                      <TextoMsgEnviada>
                        {msg.nome} : {msg.mensagem}
                      </TextoMsgEnviada>
                    </DetMsgEnviada>
                  </MsgEnviada> 
                  : 
                  <MsgRecebida>
                    <DetMsgRecebida>
                      <TextoMsgRecebida>
                        {msg.nome} : {msg.mensagem}
                    </TextoMsgRecebida>
                    </DetMsgRecebida>
                  </MsgRecebida>
                }
              </div>
            )
          })}
        </ChatBox>

        <FooterChat>
          <EnviarMsg>
            <CampoMsg 
              type="text" 
              name="mensagem" 
              value={mensagem} 
              placeholder="Mensagem..." 
              onChange={(texto) => {setMensagem(texto.target.value)}} 
            />
            <BtnEnviarMsg onClick={enviarMensagem}>Enviar</BtnEnviarMsg>
          </EnviarMsg>
        </FooterChat>
      </ConteudoChat>
      }
    </Container>
  );
}

export default App;
