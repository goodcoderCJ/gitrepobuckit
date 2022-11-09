import React from "react";
import { Link } from "react-router-dom";
import "../styles/nested.css";

export default function NestedPage({ props }) {
  return (
    <div className="nested-page">
      <p>
        <strong className="id">Id : {props.id}</strong>
      </p>
      <p>
        <strong>Pushed at: {props.pushed_at}</strong>
      </p>
      <p>
        <strong>Updated at : {props.updated_at}</strong>
      </p>
      <p>
        <strong>Size: {props.size}</strong>
      </p>
      <Link to={props.html_url}>View code</Link>
    </div>
  );
}
