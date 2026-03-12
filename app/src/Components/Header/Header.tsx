import { Button } from "../Button/Button";
import {
  BuscarInputContainer,
  WrapperContainer,
  Input,
  Menu,
  MenuRight,
  Row,
  HeaderWrapper,
} from "./HeaderWrapper";
import logo from "../../assets/logo-full.webp";
import { UserPicture } from "./HeaderWrapper";

interface IHeader {
  autenticado: boolean;
}

export const Header = ({ autenticado }: IHeader) => {
  return (
    <WrapperContainer>
      <HeaderWrapper>
        <Row>
          <img src={logo} alt="logo da DIO" width="50" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/137067860?v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </HeaderWrapper>
    </WrapperContainer>
  );
};
