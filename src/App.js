import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import Home from "./components/home/Home";
import Technologies from "./components/technologies/Technologies";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Parallax from "./components/parallax/Parallax";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Home />
        <Technologies />
        <Projects />
        <About />
        <Parallax />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
