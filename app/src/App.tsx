import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Feed } from './Pages/Feed'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/feed" element={ <Feed /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
