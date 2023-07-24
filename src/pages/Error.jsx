import { isRouteErrorResponse, useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();

  if (isRouteErrorResponse(err)) {
    if (err.status === 404) {
      return <div>This page doesn't exist!</div>;
    }
    if (err.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (err.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (err.status === 418) {
      return <div>🫖</div>;
    }
  }

  return <div>Dang!</div>;
};

export default Error;
