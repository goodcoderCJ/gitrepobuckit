import React from "react";
import { useEffect, useState } from "react";

export default function NestedPage() {
  const [info, setInfo] = useState([]);
  function getData() {
    fetch("https://api.github.com/users/goodcoderCJ/repos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInfo(data);
        console.log(data);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  return <></>;
}
