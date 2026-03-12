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

  color: #ffffff;
`;

const Column = styled.div<{ flex: number }>`
  align-self: flex-start;
  flex: ${({ flex }) => flex};
  padding-right: 1.5em;
`;

export const Feed = () => {
  return (
    <>
      <Header />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
          <UserInfo
            percentual={80}
            nome="Thiago Lima"
            image="https://avatars.githubusercontent.com/u/137067860?v=4"
          />
          <UserInfo
            percentual={90}
            nome="Thiago Lima"
            image="https://avatars.githubusercontent.com/u/137067860?v=4"
          />
          <UserInfo
            percentual={45}
            nome="Thiago Lima"
            image="https://avatars.githubusercontent.com/u/137067860?v=4"
          />
          <UserInfo
            percentual={50}
            nome="Thiago Lima"
            image="https://avatars.githubusercontent.com/u/137067860?v=4"
          />
          <UserInfo
            percentual={10}
            nome="Thiago Lima"
            image="https://avatars.githubusercontent.com/u/137067860?v=4"
          />
          <UserInfo
            percentual={99}
            nome="Thiago Lima"
            image="https://avatars.githubusercontent.com/u/137067860?v=4"
          />
        </Column>
      </Container>
    </>
  );
};
