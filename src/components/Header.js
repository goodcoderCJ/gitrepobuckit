import React from "react";
import repoBuckit from "../images/gitbuckit.png";
import Image from "./Image";
import "../styles/header.css"
export default function Header() {
  return (
    <>
      <div className="logo-container container">
        <Image
          src={repoBuckit}
          alt="gitrepobuckit logo"
          className="gitrepo-logo"
        />
      </div>
    </>
  );
}
