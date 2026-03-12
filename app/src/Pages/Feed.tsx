import { Link } from "react-router-dom";
import { Button } from "../Components/Button/Button";
import { Header } from "../Components/Header/Header";
import styled from "styled-components";
import { ButtonWrapper } from "../Components/Button/ButtonWrapper";
import { Card } from "../Components/Card/Card";
import { UserInfo } from "../Components/UserInfo/UserInfo";

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

export const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Card />
        <UserInfo percentual={35} nome="Thiago Lima" image="https://avatars.githubusercontent.com/u/137067860?v=4" />
      </Container>
    </>
  );
};
