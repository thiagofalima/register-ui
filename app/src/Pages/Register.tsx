import styled from "styled-components";
import { Header } from "../Components/Header/Header";
import { Input } from "../Components/Input/Input";
import emailIcon from "../assets/icons/email.svg";
import passwordIcon from "../assets/icons/password.svg";
import userIcon from "../assets/icons/user.svg";
import { Button } from "../Components/Button/Button";
import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  margin: 2em 0;
  padding: 2em 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;

const Column = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const LeftText = styled.h2`
  width: 388px;
  height: 308px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;

  color: #ffffff;
`;

const RegisterTitle = styled.h2`
  width: 388px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;

  color: #ffffff;
`;

const RegisterSubTitle = styled.p`
  width: 296px;
  height: 25px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  color: #ffffff;
`;

const Row = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const JaTenhoText = styled.p`
  height: 19px;
  top: 584px;
  display: inline-flex;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #ffffff;
`;

interface IFazerLogin{
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

const FazerLoginText= styled.a<IFazerLogin>`
  height: 19px;
  top: 584px;
  display: inline-flex;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #22ac67;
`;


export const Register = () => {

    const navigate = useNavigate()

  return (
    <>
      <Header autenticado={false} />
      <Container>
        <Column>
          <LeftText>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </LeftText>
        </Column>
        <Column>
          <RegisterTitle>Comece agora grátis</RegisterTitle>
          <RegisterSubTitle>
            Crie sua conta e make the change._
          </RegisterSubTitle>
          <form>
            <Input
              name="nome"
              type="text"
              placeholder="Nome completo"
              leftIcon={userIcon}
            />
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              leftIcon={emailIcon}
            />
            <Input
              name="senha"
              type="password"
              placeholder="Senha"
              leftIcon={passwordIcon}
            />
          </form>
          <Button title="Criar minha conta" variant="secondary" />
          <RegisterSubTitle>
            Ao clicar em "criar minha conta grátis", declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da DIO.
          </RegisterSubTitle>
          <Row>
            <JaTenhoText>Já tenho conta.</JaTenhoText>
            <FazerLoginText onClick={ () => navigate("/login")}>Fazer login.</FazerLoginText>
          </Row>
        </Column>
      </Container>
    </>
  );
};
