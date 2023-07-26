//import "./App.css";
import NavbarComponent from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home-Mario/Home";
import SectionCardsCharacters from "./Components/Personajes/SectionCardsCharacters";
import CardById from "./Components/Personajes/CardById";
import charactersData from "./Data/charactersData";
import MyStory from "./Components/Mi-Historia/MyStory";
import Footer from "./Components/Footer/Footer";
import VideoById from "./Components/Videos-Mario/VideoById";
import CardGameById from "./Components/Juegos/CardGameById";

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
        <Route path="/mi-historia" element={<MyStory />} />
        <Route path="/videos" element={<VideoById />} />
        <Route path="/juegos" element={<CardGameById />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
