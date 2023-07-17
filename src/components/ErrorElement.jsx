import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  let err = useRouteError();
  const { statusText, data, status } = err;
  return (
    <h1>
      {statusText} {data} : {status}
    </h1>
  );
};

export default ErrorElement;
