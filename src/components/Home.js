import React from "react";
import Image from "./Image";

import githublogo from "../images/github-logo-white.png";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <section className="homepage ">
      <div className="hero-page container">
        <div className="wrapper">
          <div className="copy-text">
            <h1>Github Repo Fetcher</h1>
            <p className="copy-text-para">
              Fetching repo to view repository info
            </p>
            <Link to="/repo" className="linkToRepo-view ">
              View Repo
            </Link>
          </div>
          <div className="landing-view">
            <div className="githublogo-container">
              <div className="first"></div>
              <Image src={githublogo} alt="github logo" className="gitlogo" />
              <div className="design second"></div>
            </div>
            <div className="hero-message">
              <h2>Get a catch at my work</h2>
              <p>
                You are welcome to my gitRepo Fetcher get to see my repo in a
                click
              </p>
            </div>
            <Link to="/repo" className="linkToRepo ">
              Fetch Repo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
