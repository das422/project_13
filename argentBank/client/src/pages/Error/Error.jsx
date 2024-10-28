import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">{error.status}</h1>
      <p className="text-lg">{error.statusText}</p>
      <Link to="/">Go back to the main page</Link>
    </div>
  );
}
