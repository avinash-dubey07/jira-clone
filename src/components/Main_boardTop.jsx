import React from "react";
import "./App.css";
import "./Main_boardTop.css";
import { IoIosSearch } from "react-icons/io";
import { FaGithub } from "react-icons/fa";



export default function MainBoard() {
 
  return (
    <>
    <div className="top-heading">
    <span>Projects  &nbsp;&nbsp;/ &nbsp;&nbsp; </span>
    <span>Developority 1.0 &nbsp;&nbsp;/ &nbsp;&nbsp;</span>
    <span>Kanban board </span> 
    </div>
    <div className="main-header">
    <h1 className="HEADING">Kanban Board</h1>
    <button className="repo-btn"> <FaGithub /> Github Repo </button>
     </div>
  <div className="search-box">
    <div className="input-group">
      <input
        type="search"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />&nbsp;&nbsp;
      <button id="issue-btn">Only My Issues</button>
      <button id="update-btn">Recently Updated</button>
    </div>
  </div>
  </>
  )
}