import styled from "styled-components";
import { ReactNode } from "react";
import thumbsIcon from "../../assets/icons/thumbsup.svg";
import banner from "../../assets/professional-challenges.png"

const CardContainer = styled.div`
  width: 100%;
  background-color: #3b4651;
  position: relative;
  margin-bottom: 24px;
`;

const ImageBackground = styled.img`
  width: 100%;
  height: 180px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  div {
    margin-left: 12px;
  }

  h4 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 1.25em;
    line-height: 25px;
    color: #ffffff;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1em;
    color: #ffffff;
  }
`;

const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #ffffff;
`;

const PostInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 1.25em;
    line-height: 1.5em;
    color: #ffffff;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 0.75em;
    line-height: 1em;
  }
`;

interface IHasInfo {
  children?: ReactNode;
}

const HasInfoWrapper = styled.div`
  h4 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 0.75em;
    line-height: 1em;
    color: #ffffff80;
    margin-bottom: 10px;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    line-height: 22px;
  }
`;

const HasInfo = ({ children }: IHasInfo) => {
  return <HasInfoWrapper>{children}</HasInfoWrapper>;
};

export const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={ banner }/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/137067860?v=4"/>
          <div>
            <h4>Thiago Lima</h4>
            <p>Ha 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>Projeto feito no curso de html e css no bootcamp.</p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <img src={thumbsIcon} alt="polegar para cima em sinal de curtida" /> 10
        </HasInfo>
      </Content>
    </CardContainer>
  );
};
