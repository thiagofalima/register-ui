import { Button } from "../Components/Button/Button";
import { Header } from "../Components/Header/Header";
import styled from "styled-components";
import { Input } from "../Components/Input/Input";
import emailIcon from "../assets/icons/email.svg"
import passwordIcon from "../assets/icons/password.svg"


export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  fles-direction: rox;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;

  color: #ffffff;
`;

export const LoginTitle = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2em;
  margin-bottom: 20px;
  line-height: 44px;
`;

export const LoginSubtitle = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25em;
  margin-bottom: 35px;
  line-height: 25px;
`;
export const EsqueciText = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 0.75em;
  line-height: 19px;

  color: #E5E044;
`;

export const CriarText = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 0.75em;
  line-height: 19px;

  color: #E23DD7;
`;

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

`

export const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title> 
            A plataforma para você aprender com experts, dominar as principais tecnologias
            e entrar mais rápido nas empresas mais desejadas
          </Title>
          </Column>
          <Column>
            <Wrapper>
                <LoginTitle>Façaseu cadastro</LoginTitle>
                <LoginSubtitle>Faça seu login e make the change._</LoginSubtitle>
                <form>
                    <Input leftIcon={emailIcon} placeholder="E-mail" name="email"/>
                    <Input leftIcon={passwordIcon} placeholder="Senha" name="password" type="password"/>
                    <Button title="Entrar" variant="secondary"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar conta</CriarText>
                </Row>
            </Wrapper>
          </Column>

      </Container>
    </>
  );
};
