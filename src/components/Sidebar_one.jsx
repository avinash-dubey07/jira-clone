import "./Sidebar_one.css";
import "./App.css";
import React, { useState } from "react";
import { FaJira } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GrCircleQuestion } from "react-icons/gr";
import SidebarOptions from "./commons/SidebarOptions/SidebarOptions";
import ticketService from "../backend/services/ticket.service";
import ModalComponent from "./commons/Modal/Modal";
import CreateIssue from "./CreateIssue/Createissue";
import SearchIssue from "./SearchIssue";
import About from "./About";

export default function SidebarOne() {
  const [show, setShow] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [showCreateIssueModal, setShowCreateIssueModal] = useState(false);
  const [showSearchIssueModal, setShowSearchIssueModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [createIssue, setCreateIssue] = useState({
    issueType: "",
    summary: "Write here...",
    description: "Explain here...",
    reporter: "",
    assigners: "",
    priority: "",
  });

  const onChangeHandler = (event) => {
    setCreateIssue(() => ({
      ...createIssue,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const onClickHandler = (clickedOption) => {
    if (clickedOption === "CREATE ISSUE") {
      setShowCreateIssueModal(true);
      setShowSearchIssueModal(false);
    }

    if (clickedOption === "SEARCH ISSUES") {
      setShowSearchIssueModal(true);
      setShowCreateIssueModal(false);
    }

    if (clickedOption === "About") {
      setShowAboutModal(true);
      setShowSearchIssueModal(false);
      setShowCreateIssueModal(false);
    }
  };

  const onCreateIssueHandler = () => {
    const ticket = {};
    ticketService.createTicketInDB(ticket);
  };

  return (
    <>
      <aside
        className="sidebar"
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
      >
        <div className="logo">
          <FaJira fontSize={"30px"} />
        </div>{" "}
        <br />
        <SidebarOptions
          icon={<FaSearch fontSize={"21px"} />}
          text={"SEARCH ISSUES"}
          isExpanded={sidebarExpanded}
          onClickHandler={onClickHandler}
        />{" "}
        <br></br>
        <SidebarOptions
          icon={<FaPlus fontSize={"21px"} />}
          text={"CREATE ISSUE"}
          isExpanded={sidebarExpanded}
          onClickHandler={onClickHandler}
        />
        {/* Popup-> by default not visible unless clicked */}
        {/* {showSearchModal === true ? (
          <div>Search Issues Modal Simulation!!</div>
        ) : (
          <></>
        )}
        {showCreateIssueModal === true ? (
          <div>Create Issue Modal Simulation!!</div>
        ) : (
          <></>
        )} */}

        <ModalComponent
          show={showCreateIssueModal}
          onHide={() => setShowCreateIssueModal(false)}
          component={<CreateIssue />}
        />
    
        <ModalComponent
          show={showSearchIssueModal}
          onHide={() => setShowSearchIssueModal(false)}
          component={< SearchIssue />}
        />

        <ModalComponent
          show={showAboutModal}
          onHide={() => setShowAboutModal(false)}
          component={<About /> }
        />

        <div className="about">
          <SidebarOptions
            icon={<GrCircleQuestion fontSize={"21px"} />}
            text={"About"}
            isExpanded={sidebarExpanded}
            onClickHandler={onClickHandler}
            
          />
        </div>
      </aside>
    </>
  );
}
