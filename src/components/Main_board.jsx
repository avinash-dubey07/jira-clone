import React from "react";
import "./App.css";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import "./Main_board.css";
export default function MainBoard() {

  //const [backlogTask, setBacklog] = useState([{ name: "jogen" }]);
 

  return (
    <>
    <div className="top-heading">
    <span>Projects  &nbsp;&nbsp;/ &nbsp;&nbsp; </span>
    <span>Developority 1.0 &nbsp;&nbsp;/ &nbsp;&nbsp;</span>
    <span>Kanban board </span> 
    <h1 className="HEADING">Kanban Board</h1> <br />
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