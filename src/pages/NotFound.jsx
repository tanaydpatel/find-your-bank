import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import hero from "../404.svg";

function NotFound() {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("./all-banks");
    }, 2000);
  }, []);

  return (
    <div className="notFound">
      <img src={hero} alt="React Logo" />
      <h1>Page not Found | 404</h1>
      <pre>Redirecting to homepage...</pre>
    </div>
  );
}

export default NotFound;
