import Hero from "./pages/hero/Hero";
import Technologies from "./components/technologies/Technologies";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import FooterComp from "./components/footer/FooterComp";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <main className="relative space-y-10">
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <About />
      <FooterComp />
    </main>
  );
}

export default App;
