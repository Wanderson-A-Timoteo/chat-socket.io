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

export const HeaderChat = styled.header`
  whidth: 450px;
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