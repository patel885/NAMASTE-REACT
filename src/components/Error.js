import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error: Page not Found</h1>
      <h2>{err.status}</h2>
    </div>
  );
};

export default Error;
