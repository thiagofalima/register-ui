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
import logo from "../../assets/logo-full.webp"

export const Header = () => {
  return (
    <WrapperContainer>
      <HeaderWrapper>
        <Row>
          <img src={logo} alt="logo da DIO" width="50"/>
          <BuscarInputContainer>
            <Input placeholder="Buscar..."/>
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </HeaderWrapper>
    </WrapperContainer>
  );
};
