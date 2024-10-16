import App from "@/App";
import FooterComp from "@/components/footer/FooterComp";
import About from "@/pages/about/About";
import Error from "@/pages/error/Error";
import Projects from "@/pages/projects/Projects";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <FooterComp />,
      },
    ],
    errorElement: <Error />,
  },
]);
