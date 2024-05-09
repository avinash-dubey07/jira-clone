import React from "react";
import "./App.css";

export default function MainBoard() {
  return (
    <>
    <div className="main-board">
    <div className="board-box ">BACKLOGS</div>
      <div className="board-box ">SELECTED FOR DEVELOPMENT</div>
      <div className="board-box ">IN PROGRESS</div>
      <div className="board-box ">DONE</div>
    </div>
    </>
  )
};