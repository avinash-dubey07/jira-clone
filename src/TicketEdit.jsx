import React, { useContext } from "react";
import { useState, useEffect } from "react";
import "./TicketEdit.css";
import About from "./components/About";
import AboutModal from "./components/commons/Modal/AboutModal";
import { BsFillSendFill } from "react-icons/bs";
import { IoIosLink } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import ticketService from "./backend/services/ticket.service";
import { useTicketContext } from "./App";
import { RiTaskFill } from "react-icons/ri";
import { FaBug } from "react-icons/fa6";
import { SiStorybook } from "react-icons/si";

export default function TicketEdit({ ticket, ticketModal, issueType }) {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const { setAllTickets } = useTicketContext();
  const [ticketData, setTicketData] = useState({ ...ticket });

  const getIconForIssueType = (issueType) => {
    switch (issueType) {
      case "Task":
        return <RiTaskFill style={{
          color: "rgb(45, 156, 193)",
          fontSize: "15px",
        }} />;
      case "Bug":
        return <FaBug style={{
          color: "rgb(217, 3, 3)",
          fontSize: "15px",
        }} />;
      case "Story":
        return <SiStorybook style={{
          color: "rgb(3, 133, 3)",
          fontSize: "15px",
        }} />;
      default:
        return null;
    }
  };

// Important Change for ticket editable
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData((prevTicketData) => ({
      ...prevTicketData,
      [name]: value,
    }));
  };

  const routeChange = () => {
    const githubUrl = `https://github.com/avinash-dubey07/jira-clone`;
    window.open(githubUrl, "_blank");
  };

  const copyUrlToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  };

  const closeTicketModal = () => {
    ticketModal(false);
  };

  const deleteTicket = () => {
    ticketService.deleteTicketInDB(ticket.id);
    ticketModal(false);
    setShowDeleteToast(true);

    const upgradedTickets = ticketService.getAllTickets();
    setAllTickets(upgradedTickets);
  };

  // Important Change for ticket editable
  const onSaveHandle = () => {
    ticketService.updateTicketInDB(ticket.id, ticketData);
    const updatedTickets = ticketService.getAllTickets();
    setAllTickets(updatedTickets);
    ticketModal(false);
  };


  return (
    <>
      <div className="Top">
        <h6 style={{ color: "rgb(0, 82, 204)" }}>
        {getIconForIssueType(ticket.issueType)} {ticket.issueType}-{ticket.id}
        </h6>
        <div className="top-btns">
          <button className="upper-left-btns" onClick={routeChange}>
            {" "}
            <BsFillSendFill /> Give feedback
          </button>
          <button className="upper-left-btns" onClick={copyUrlToClipboard}>
            {" "}
            <IoIosLink /> Copy link
          </button>
          <button className="upper-left-btns" onClick={deleteTicket}>
            <AiOutlineDelete />
          </button>
          <button
            className="upper-left-btns"
            style={{ fontSize: "23px" }}
            onClick={closeTicketModal}
          >
            &times;
          </button>
        </div>
        <AboutModal
          show={showAboutModal}
          onHide={() => setShowAboutModal(false)}
          component={<About />}
        />
      </div>
      <div className="base-container">
        <div style={{ width: "60%" }}>
          <div className="ticket-container1">
            <input
              className="ss-box"
              value={ticketData.shortSummary}
              type="text"
              placeholder=""
              name="shortSummary"
              onChange={handleChange}
              required
            />
          </div>
          <div className="ticket-input">
            <span>Description</span>
          </div>
          <div>
            <input
              className="des-box"
              type="text"
              value={ticketData.description}
              name="description"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="ticket-container2">
          <div className="input-headings">
            <label>STATUS</label>
            <div>
              <select className="select-dialogs" name="status" value={ticketData.status} onChange={handleChange}>
                <option value="todo">TO DO</option>
                <option value="backlog">BACKLOG</option>
                <option value="inProgress">IN PROGRESS</option>
                <option value="done">DONE</option>
              </select>
            </div>
            <div style={{ marginTop: "15px" }}>
              <label>ASSIGNEES</label>
            </div>
            <div>
              <select className="select-dialogs" name="assignees" value={ticketData.assignees[0] || ""} onChange={handleChange}>
                <option value="1">Deepinder Goyal</option>
                <option value="2">Ashneer Grover</option>
                <option value="3">Aman Gupta</option>
              </select>
            </div>
            <div style={{ marginTop: "15px" }}>
              <label>REPORTER</label>
            </div>
            <div>
              <select className="select-dialogs" name="reporter" value={ticketData.reporter} onChange={handleChange}>
                <option value="1">Deepinder Goyal</option>
                <option value="2">Ashneer Grover</option>
                <option value="3">Aman Gupta</option>
              </select>
            </div>
            <div style={{ marginTop: "15px" }}>
              <label>PRIORITY</label>
            </div>
            <div>
              <select className="select-dialogs" name="priority" value={ticketData.priority} onChange={handleChange}>
                <option value="Urgent">Urgent</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-btns">
              <button onClick={onSaveHandle} className="blue-btn">Save</button>
              <button onClick={closeTicketModal} className="cancel-btn">Cancel</button>
            </div>
    </>
  );
}
