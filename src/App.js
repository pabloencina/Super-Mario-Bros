//import "./App.css";
import NavbarComponent from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home-Mario/Home";
import SectionCardsCharacters from "./Components/Personajes/SectionCardsCharacters";
import CardById from "./Components/Personajes/CardById";
import charactersData from "./Data/charactersData";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<SectionCardsCharacters />} />
        <Route
          path="/detalle/:id"
          element={<CardById charactersData={charactersData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
