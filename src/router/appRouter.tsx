import App from "@/App";
import Error from "@/pages/Error";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
    errorElement: (
      <div className="pt-10 w-full flex justify-center items-center">
        <Error />
      </div>
    ),
  },
]);
