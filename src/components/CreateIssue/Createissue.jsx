import React, { useContext, useEffect, useState } from "react";
import "./Createissue.css";
import ticketService from "../../backend/services/ticket.service";
import { useTicketContext } from "../../App";

function CreateIssue(props) {
  const { setAllTickets } = useTicketContext();
  // props ->  {setShowModal: {setShowCreateIssueModal}, prop2: "123", prop3: "qwerty"  }
  // props.prop2 [Output: 123]
  // { setShowModal, prop2, props3 }
  // prop2 []
  const [createIssue, setCreateIssue] = useState({
    issueType: "",
    shortSummary: "",
    description: "",
    reporter: "",
    assignees: [],
    priority: "",
    status: "backlog",
  });

  const onChangeHandler = (event) => {
    setCreateIssue(() => ({
      ...createIssue,
      [event.target.name]:
        event.target.name === "assignees"
          ? [event.target.value]
          : event.target.value,
    }));
  };

  const validateTicket = () => {
    const {
      issueType,
      shortSummary,
      description,
      reporter,
      assignees,
      priority,
    } = createIssue;

    if (
      !issueType.length ||
      !shortSummary.length ||
      !description.length ||
      !reporter.length ||
      !assignees.length ||
      !priority.length
    ) {
      return false;
    }

    return true;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const isValid = validateTicket();

    if (!isValid) {
      alert("Invalid Inputs");
    }

    ticketService.createTicketInDB(createIssue);
    props.setShowModal(false);
    props.setShowToast(true);

    const tickets = ticketService.getAllTickets();
    setAllTickets(tickets);
  };

  const closeIssueModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form>
        <div className="pro-head">
          <h3>Create Issue</h3>
        </div>
        <div>
          <label className="form-text">Issue Type</label>
        </div>
        <div>
          <select
            name="issueType"
            className="dropdown"
            onChange={onChangeHandler}
          >
            <option value="" selected disabled hidden>
              Choose Issue
            </option>
            <option value="Task"> Task</option>
            <option value="Bug"> Bug</option>
            <option value="Story"> Story</option>
          </select>
          <p className="textTwo">
            Start typing to get a list of possible matches.
          </p>
          <hr className="small" />
        </div>
        <div>
          <label className="form-text">Short Summary</label>
          <input
            type="text"
            name="shortSummary"
            placeholder="Enter your short summary here..."
            className="dropdown"
            onChange={onChangeHandler}
          />
          <p className="textTwo">
            Concisely summarize the issue in one or two sentences.
          </p>
        </div>
        <div>
          <span className="form-text">Description</span>
        </div>
        <div>
          <input
            id="descriptionBox"
            type="text"
            name="description"
            onChange={onChangeHandler}
          />
        </div>
        <p className="textTwo">
          Describe the project in as much detail as you'd like.
        </p>
        <br />
        <div>
          <label className="form-text">Reporter</label>
        </div>
        <div>
          <select
            name="reporter"
            className="dropdown"
            onChange={onChangeHandler}
          >
            <option value="" selected disabled hidden>
              Choose Reporter
            </option>
            <option value="1">Deepinder Goyal</option>
            <option value="2">Ashneer Grover</option>
            <option value="3">Aman Gupta</option>
          </select>
        </div>
        <br />
        <div>
          <label className="form-text">Assignees</label>
        </div>
        <div>
          <select
            name="assignees"
            className="dropdown"
            onChange={onChangeHandler}
          >
            <option value="" selected disabled hidden>
              Choose Assignees
            </option>
            <option value="1">Deepinder Goyal</option>
            <option value="2">Ashneer Grover</option>
            <option value="3">Aman Gupta</option>
          </select>
        </div>
        <br />
        <div>
          <label className="form-text">Priority</label>
        </div>
        <div>
          <select
            name="priority"
            className="dropdown"
            onChange={onChangeHandler}
          >
            <option value="" selected disabled hidden>
              Choose Priority
            </option>
            <option value="Urgent">Urgent</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <p className="textTwo">Priority in relation to other issues</p>
        </div>
        <button className="create-btn" onClick={onSubmitHandler}>
          Create Issue
        </button>
        <button className="cancel-btn" onClick={closeIssueModal}>
          Cancel
        </button>
      </form>
    </>
  );
}

export default CreateIssue;
