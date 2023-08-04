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
import Moods from "./Components/Estados-de-ánimo/Moods";
import moodsData from "./Data/moodsData";
import CardMoodsById from "./Components/Estados-de-ánimo/CardMoodsById";
import CardContainerRandomName from "./Components/Juegos/Adivinanza/CardContainerRandomName";
import { ClicksProvider } from "./Components/Context/ClicContext";
import AlphabetGameCardMap from "./Components/Juegos/Abecedario/AlphabetGameCardMap";

function App() {
  return (
    <ClicksProvider>
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
          <Route path="/estados-animo" element={<Moods />} />
          <Route
            path="/estados-animo/:id"
            element={<CardMoodsById moodsData={moodsData} />}
          />
          <Route path="/videos" element={<VideoById />} />

          <Route
            path="/juegos/adivinanza"
            element={
              <CardContainerRandomName charactersData={charactersData} />
            }
          />
          <Route path="/juegos/abecedario" element={<AlphabetGameCardMap />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ClicksProvider>
  );
}

export default App;
