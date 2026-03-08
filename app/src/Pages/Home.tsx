import { Link } from "react-router-dom";
import { Button } from "../Components/Button/Button";

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Button title="Teste" onClick={() => alert("Teste")} />
      <Button title="Teste" onClick={() => alert("Teste")} variant="secondary"/>
      <Link to="/login">Para ir para a tela de login</Link>
    </>
  );
};
