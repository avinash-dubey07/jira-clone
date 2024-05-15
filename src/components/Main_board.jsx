import React from "react";
import "./App.css";
import "./Main_board.css";
import { FaGithub } from "react-icons/fa";
import projectService from "../backend/services/project.service";

export default function MainBoard() {
  const projectDetails = projectService.getProjectDetails();
  const { name } = projectDetails;

  const routeChange = () => {
    const githubUrl = `https://github.com/avinash-dubey07/jira-clone`;
    window.open(githubUrl, "_blank");
  };

  return (
    <>
      <div className="top-heading">
        <span>Projects &nbsp;&nbsp;/ &nbsp;&nbsp; </span>
        <span>{name} &nbsp;&nbsp;/ &nbsp;&nbsp;</span>
        <span>Kanban board </span>
      </div>
      <div className="main-header">
        <h1 className="HEADING">Kanban Board</h1>
        <button className="repo-btn" onClick={routeChange}>
          <FaGithub /> Github Repo
        </button>
      </div>
      <div className="search-box">
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          &nbsp;&nbsp;
          <button id="query-btn">Only My Issues</button>
          <button id="query-btn">Recently Updated</button>
        </div>
        <div></div>
      </div>
    </>
  );
}
