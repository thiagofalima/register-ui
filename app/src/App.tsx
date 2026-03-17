import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Feed } from './Pages/Feed'
import { Register } from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/feed" element={ <Feed /> }/>
        <Route path="/register" element={ <Register /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
