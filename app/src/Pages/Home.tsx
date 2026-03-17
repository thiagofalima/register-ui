import { Button } from "../Components/Button/Button";
import { Header } from "../Components/Header/Header";
import styled from "styled-components";
import bannerImage from "../assets/professional-challenges.png"
import { ButtonWrapper } from "../Components/Button/ButtonWrapper";
import { useNavigate } from "react-router-dom";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  fles-direction: row;
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

export const TitleHighLight = styled.span`
  color: #e4105d;
`;

export const TextContent = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  width: 420px;
  margin-bottom: 20px;
  line-height: 22px;

  color: #FFFFFF;
`;

export const Home = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login")
  }

  return (
    <>
      <Header autenticado={false}/>
      <Container>
        <div>
          <Title> 
            <TitleHighLight>
              Implemente
              <br />
            </TitleHighLight>
            o seu futuro global
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare 
            seu novo desafio profissional, evoluindo com comunidade com os melhores experts
          </TextContent>
          <Button title="Comecar agora" variant="secondary" onClick={handleClickSignIn}/>
        </div>
        <div>
          <img  src={ bannerImage } alt="Imagem principal"/>
        </div>
      </Container>
    </>
  );
};
