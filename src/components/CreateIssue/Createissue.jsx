import React, { useState } from "react";
import "./Createissue.css";


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
      <form>
        <div className="pro-head">
          <h3>Create Issue</h3>
        </div>
        <div>
          <label className="form-text">Issue Type</label>
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
          <hr  className="small"/>
        </div>
        <div>
          <label className="form-text">Short Summary</label>
          <input
            type="text"
            className="dropdown"
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
            <option value="">Deepinder Goyal</option>
            <option value="">Ashneer Grover</option>
            <option value="">Aman Gupta</option>
          </select>
        </div>
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
            <option value="">Highest</option>
            <option value="">High</option>
            <option value="">Medium</option>
            <option value="">Low</option>
            <option value="">Lowest</option>
          </select>
          <p className="textTwo">Priority in relation to other issues</p>
        </div>
        <button className="create-btn">
          Create Issue
        </button>
        <button className="cancel-btn">
          Cancel
        </button>
      </form>
    </>
  );
}

export default CreateIssue;
