import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Button } from './Components/Button/Button';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/login" element={ <Login /> }/>
      </Routes>
      <Button title="Teste" onClick={ () => alert("Botão clicado") }/>
    </BrowserRouter>
  );
}

export default App;
