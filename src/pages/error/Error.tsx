import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  if (isRouteErrorResponse(err)) {
    switch (err.status) {
      case 404:
        return (
          <div className="flex items-center justify-center">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>404 Error</AlertTitle>
              <AlertDescription>
                Sorry, the page you're looking for doesn't exist.
              </AlertDescription>
            </Alert>
          </div>
        );
      case 401:
        return (
          <div className="flex items-center justify-center">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>401 Unauthorized</AlertTitle>
              <AlertDescription>
                Sorry, you're not authorized to view this page.
              </AlertDescription>
            </Alert>
          </div>
        );
      case 503:
        return (
          <div className="flex items-center justify-center">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>503 Service Unavailable</AlertTitle>
              <AlertDescription>
                Our API seems to be down. Please try again later.
              </AlertDescription>
            </Alert>
          </div>
        );
      case 418:
        return (
          <div className="flex items-center justify-center">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>418 I'm a Teapot</AlertTitle>
              <AlertDescription>
                🫖 I'm a teapot (yes, really). This is an easter egg HTTP
                status.
              </AlertDescription>
            </Alert>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{err.status} Error</AlertTitle>
              <AlertDescription>
                Oops, something went wrong: {err.statusText}
              </AlertDescription>
            </Alert>
          </div>
        );
    }
  }

  return (
    <div className="flex items-center justify-center">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>500 Internal Server Error</AlertTitle>
        <AlertDescription>
          Sorry, something went wrong. Please try again later.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Error;
