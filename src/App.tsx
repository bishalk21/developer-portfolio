import Hero from "./pages/hero/Hero";
import Technologies from "./components/technologies/Technologies";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
// import Parallax from "./components/parallax/Parallax";
import FooterComp from "./components/footer/FooterComp";
import Navbar from "./components/header/Navbar";
// import Services from "./components/services/Services";

function App() {
  return (
    <main className="relative space-y-10">
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <About />
      {/* <Services /> */}
      {/* <Parallax /> */}
      <FooterComp />
    </main>
  );
}

export default App;
