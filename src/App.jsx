import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header.jsx";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

function App() {
  return (
    <main className="relative">
      <ScrollToTop />
      <Header />
      <Outlet />

      {/*
       * Navbar

       * Outlet
          * Home - home
          * Skills/Technologies
          * Projects - projects
          * About - about
          * Contact - contact
          
       * Footer
       */}
    </main>
  );
}

export default App;
