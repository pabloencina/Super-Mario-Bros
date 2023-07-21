//import "./App.css";
import NavbarComponent from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home-Mario/Home";
import SectionCardsCharacters from "./Components/Personajes/SectionCardsCharacters";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<SectionCardsCharacters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
