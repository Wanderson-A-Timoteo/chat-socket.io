import styled from 'styled-components';

export const Container = styled.section`
  background: #FFF;
  width: 450px;
  max-width: 450px;
  border-radius: 16px;
  box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
                        0 32px 64px -48px rgba(0, 0, 0, 0.5);
`;

export const Conteudo = styled.section`
  padding: 25px 30px;
`;

export const Header = styled.header`
  font-size: 25px;
  font-weight: 500;
  padding-bottom: 10px;
  border-bottom: 1px solid #E6E6E6;
  color: #6FBCED;
`;

export const Form = styled.form`
  margin: 20px 0;
`;

export const Campo = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label`
  margin-bottom: 4px;
  margin-top: 10px;
`;

export const Input = styled.input`
  height: 40px;
  width: 390px;
  font-size: 16px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #CCC
`;

export const Select = styled.select`
  height: 40px;
  width: 390px;
  font-size: 16px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #CCC
`;

export const BtnAcessar = styled.button`
  border: none;
  background: #6FBCED;
  color: #FFF;
  font-size: 17px;
  border-radius: 5px;
  padding: 10px;
  margin-top: 13px;
  cursor: pointer;
`;

export const ConteudoChat = styled.section`
  padding: 25px 0px;
`;

export const HeaderChat = styled.header`
  width: 450px;
  display: flex;
  align-items: center;
  padding: 18px 30px;
  color: #6FBCED;
`;

export const ImgUsuario = styled.img`
  height: 45px;
  width: 45px;
  margin: 0 15px;
`;

export const NomeUsuario = styled.div`
  font-size: 17px;
  font-weight: 500;
`;

export const ChatBox = styled.div`
  position: relative;
  min-height: 500px;
  max-height:500px;
  overflow-y: auto;
  padding: 10px 10px 20px 10px;
  background: #F7F7F7;
  box-shadow: insert 0 32px 32px -32px rgb(0 0 0 / 5%),
                        insert 0 -32px 32px -32px rgb(0 0 0 / 5%);
`;

export const MsgEnviada = styled.div`
  margin: 15px 14px 15px 0;
  display: flex;
`;

export const DetMsgEnviada = styled.div`
  margin-left: auto;
  max-width: calc(100% - 130px);
`;

export const TextoMsgEnviada = styled.p`
  background: #6FBCED;
  color: #FFF;
  border-radius: 18px 18px 0 18px;
  word-wrap: break-word;
  padding: 8px 16px;
  box-shadow: 0 0 32px rgb(0 0 0 / 8%),
                        0rem 16px 16px -16px rgb(0 0 0 / 10%);
`;

export const MsgRecebida = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: flex-end;
`;

export const DetMsgRecebida = styled.div`
  margin-right: auto;
  margin-left: 10px;
  max-width: calc(100% - 130px);
`;

export const TextoMsgRecebida = styled.p`
  background: #58B666;
  color: #FFF;
  border-radius: 18px 18px 18px 0;
  word-wrap: break-word;
  padding: 8px 16px;
  box-shadow: 0 0 32px rgba(0 0 0 / 8%),
                        0rem 16px 16px -16px rgb(0 0 0 / 10%);
`;

export const FooterChat = styled.footer`
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  background: #FFF;
`;

export const EnviarMsg = styled.div`
  padding: 18px 15px:
  display: flex;
`;

export const CampoMsg = styled.input`
  height: 45px;
  width: calc(100% - 75px);
  font-size: 16px;
  padding: 0 13px;
  border: 1px solid #E6E6E6;
  outline: none;
  border-radius: 5px 0 0 5px;
`;

export const BtnEnviarMsg = styled.button`
  color: #FFF;
  height: 45px;
  width: 75px;
  border: none;
  outline: none;
  background: #6FBCED;
  font-size: 19px;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
`;