import App from "@/App";
import Error from "@/pages/error/Error";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/projects",
        element: <div>project</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
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
