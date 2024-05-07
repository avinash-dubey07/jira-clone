import React, { useState } from "react";
import "./Createissue.css";
import App from "../../App";

function CreateIssue() {
   const [createIssue, setCreateIssue] = useState({
    issueType: '',
    summary: 'Write here...',
    description: 'Explain here...',
    reporter: '',
    assigners: '',
    priority: '',
   })

   const onChangeHandler = (event) => {
    setCreateIssue(() => ({
      ...createIssue,
      [event.target.name]: event.target.value
    }))
   }

   const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(createIssue);
   }

  return (
    <>
      <form action="" className="form" onSubmit={onSubmitHandler}>
        <div className="pro-head">
          <h3>Create Issue</h3>
        </div>
        <div>
          <label className="form-text">Issue type</label>
        </div>
        <div>
          <select name="types" className="dropdown" onChange={onChangeHandler}>
            <option value=""> Task</option>
            <option value=""> Bug</option>
            <option value=""> Story</option>
          </select>
          <p className="textTwo">
            Start typing to get a list of possible matches.
          </p>
        </div>{" "}
        <br />
        <div>
          <label className="form-text">Short Summary</label>
          <input
            type="text"
            className="dropdown"
            onChange={onChangeHandler}
            value={createIssue.summary}
          />
          <p className="textTwo">
            Concisely summarize the issue in one or two sentences.
          </p>
        </div>{" "}
        <br />
        <div>
          <span className="form-text">Description</span>
        </div>
        <div className="inputOne">
          <input
            id="descriptionBox"
            type="text"
            name="description"
            onChange={onChangeHandler}
            value={createIssue.description}
          />
        </div>
        <p className="textTwo">
          Describe the project in as much detail as you'd like.
        </p>
        <div>
          <label className="form-text">Reporter</label>
        </div>
        <div>
          <select
            name="reporter"
            className="dropdown"
            onChange={onChangeHandler}
          >
            <option value="">Deepinder Goyal</option>
            <option value="">Ashneer Grover</option>
            <option value="">Aman Gupta</option>
          </select>
        </div>{" "}
        <br />
        <div>
          <label className="form-text">Assignees</label>
        </div>
        <div>
          <select
            name="assigner"
            className="dropdown"
            onChange={onChangeHandler}
          >
            <option value="">Deepinder Goyal</option>
            <option value="">Ashneer Grover</option>
            <option value="">Aman Gupta</option>
          </select>
        </div>{" "}
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
            <option value="">Highest</option>
            <option value="">High</option>
            <option value="">Medium</option>
            <option value="">Low</option>
            <option value="">Lowest</option>
          </select>
          <p className="textTwo">Priority in relation to other issues</p>
        </div>
        <button className="create-btn" onClick={() => console.log(createIssue)}>
          Create Issue
        </button>
        <button className="cancel-btn" onClick={App}>
          Cancel
        </button>
      </form>
    </>
  );
}

export default CreateIssue;
