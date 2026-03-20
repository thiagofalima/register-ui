import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Feed } from "./Pages/Feed";
import { Register } from "./Pages/Register";
import { AuthContextProvider } from "./context/auth";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
