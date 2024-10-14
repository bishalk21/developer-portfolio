import App from "@/App";
import About from "@/pages/about/About";
import Error from "@/pages/error/Error";
import Projects from "@/pages/projects/Projects";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
    ],
    errorElement: (
      <div className="pt-10 w-full flex justify-center items-center">
        <Error />
      </div>
    ),
  },
]);
