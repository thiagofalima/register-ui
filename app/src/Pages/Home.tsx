import { Link } from "react-router-dom";
import { Button } from "../Components/Button/Button";
import { Header } from "../Components/Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <Button title="Teste" onClick={() => alert("Teste")} />
      <Button
        title="Teste"
        variant="secondary"
      />
      <Link to="/login">Para ir para a tela de login</Link>
    </>
  );
};
