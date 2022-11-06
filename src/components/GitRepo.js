import React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "../styles/repo.css";

export default function GitRepo() {
  const [repos, setRepo] = useState([]);
  const [loading, setLoading] = useState(true);
  function getData() {
    fetch("https://api.github.com/users/goodcoderCJ/repos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRepo(data);
        console.log(data);
        setLoading(false);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(Array.isArray(repos));
  const [page, setPage] = useState(0);
  const dataPerPage = 4;
  const noOfDataVisited = page * dataPerPage;

  const totalNoOfPage = Math.ceil(repos.length / dataPerPage);
  const pageChange = ({ selected }) => {
    setPage(selected);
  };

  //slicing out data for pagination
  const userData = repos
    .slice(noOfDataVisited, noOfDataVisited + dataPerPage)
    .map((repo) => {
      return (
        <div className="enclose">
          <div className="each-repo" key={repo.owner.id}>
            <p>
              <strong>Repos Name: </strong>
              {repo.name}
            </p>
            <p>
              <strong>Branch: </strong>
              {repo.default_branch}
            </p>
            <p className="repo-link">
              <strong>Url: </strong>
              <Link to={repo.html_url}>See each repo</Link>
            </p>
          </div>
        </div>
      );
    });

  return (
    <div className="container">
      <div className="repo-padding">
        <h2>Here is my repo</h2>
        {loading && <div>loading...</div>}
        <div className="repo-container">{userData}</div>
        <div className="route-page">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={totalNoOfPage}
            onPageChange={pageChange}
            containerClassName={"navigationBtn"}
            previousLinkClassName={"prevBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"navDisabled"}
            activeClassName={"navActive"}
          />
        </div>
      </div>
      <div className="back-view">
        <Link to="/" className="back-home" target="_blank">
          Back to homepage
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
