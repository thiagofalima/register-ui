import styled from "styled-components";
import { Header } from "../Components/Header/Header";
import { Input } from "../Components/Input/Input";
import emailIcon from "../assets/icons/email.svg";
import passwordIcon from "../assets/icons/password.svg";
import userIcon from "../assets/icons/user.svg";
import { Button } from "../Components/Button/Button";
import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const FazerLoginText = styled.a`
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

type RegisterValues = {
  nome: string;
  email: string;
  senha: string;
};

const schema = yup
  .object({
    nome: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("email não é válido")
      .required("Campo obrigatório"),
    senha: yup
      .string()
      .min(3, "No mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

export const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterValues>({
    resolver: yupResolver(schema),
    mode: "onBlur", // validação sempre que sair do campo
    reValidateMode: "onChange", // revalidar assim que alterar o campo
  });

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
              control={control}
              name="nome"
              type="text"
              placeholder="Nome completo"
              leftIcon={userIcon}
              errorMessage={errors.nome?.message}
            />
            <Input
              control={control}
              name="email"
              type="email"
              placeholder="E-mail"
              leftIcon={emailIcon}
              errorMessage={errors.email?.message}
            />
            <Input
              control={control}
              name="senha"
              type="password"
              placeholder="Senha"
              leftIcon={passwordIcon}
              errorMessage={errors.senha?.message}
            />
          </form>
          <Button title="Criar minha conta" variant="secondary" />
          <RegisterSubTitle>
            Ao clicar em "criar minha conta grátis", declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da DIO.
          </RegisterSubTitle>
          <Row>
            <JaTenhoText>Já tenho conta.</JaTenhoText>
            <FazerLoginText onClick={() => navigate("/login")}>
              Fazer login.
            </FazerLoginText>
          </Row>
        </Column>
      </Container>
    </>
  );
};
