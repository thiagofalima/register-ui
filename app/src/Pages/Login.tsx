import { Button } from "../Components/Button/Button";
import { Header } from "../Components/Header/Header";
import styled from "styled-components";
import { Input } from "../Components/Input/Input";
import emailIcon from "../assets/icons/email.svg";
import passwordIcon from "../assets/icons/password.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

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

  color: #e5e044;
`;

export const CriarText = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 0.75em;
  line-height: 19px;

  color: #e23dd7;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

type Inputs = {
  email: string
  senha: string
}

const schema = yup
  .object({
    email: yup.string().email("email não é válido").required("Campo obrigatório"),
    senha: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatório"),
  })
  .required()

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  console.log(isValid, errors)
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <Header autenticado={false} />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <LoginTitle>Façaseu cadastro</LoginTitle>
            <LoginSubtitle>Faça seu login e make the change._</LoginSubtitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input control={control} leftIcon={emailIcon} placeholder="E-mail" name="email" errorMessage={errors.email?.message}/>
              <Input
                leftIcon={passwordIcon}
                placeholder="Senha"
                name="senha"
                type="password"
                control={control}
                errorMessage={errors.senha?.message}
              />
              <Button title="Entrar" variant="secondary" type="submit"/>
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
