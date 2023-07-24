import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header.jsx";

function App() {
  return (
    <main className="relative">
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
