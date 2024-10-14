import { Outlet } from "react-router-dom";
import HeaderComp from "./components/header/HeaderComp";

function App() {
  return (
    <main className="relative">
      <HeaderComp />
      <Outlet />
    </main>
  );
}

export default App;
