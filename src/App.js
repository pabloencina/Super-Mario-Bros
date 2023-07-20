//import "./App.css";
import NavbarComponent from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyStory from "./Components/Mi-Historia/MyStory";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/mi-historia" element={<MyStory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
