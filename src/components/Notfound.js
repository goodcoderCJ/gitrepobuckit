import React from "react";
import { Link } from "react-router-dom";
import "../styles/notfound.css";

export default function Notfound() {
  return (
    <div className="not-found">
      <h2>
        4<span className="zero">0</span>4
      </h2>
      <p>That page can not be found</p>
      <br />
      <Link to="/">Back to the home page</Link>
    </div>
  );
}
