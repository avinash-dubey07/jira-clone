import React, { useEffect, useState } from "react";
import "./ProjectSettings.css";
 
 
 function Project() {
  
  const [projectDetail, setProjectDetail] = useState({
   name: '',
   url: '',
   description: '',
   category: '',
  })

  const onChangeHandler = (event) => {
    setProjectDetail(() => ({
      ...projectDetail,
      [event.target.name]: event.target.value
    })) 
   }
  return (
    <>
     <div className="pro-heading">
        <label>Projects  &nbsp;&nbsp;/ &nbsp;&nbsp; </label>
        <label>Developority 1.0 &nbsp;&nbsp;/ &nbsp;&nbsp;</label>
        <label>Project Details </label>
      </div>
      <div>
      <h1 className="ject-heading">Project Details</h1> <br />
      </div>
      <div>
        <label id="text">Name</label>
      </div>
      <div className="inputOne">
         <input id="block" type="text" name="name" placeholder=" Singularity 1.0" onChange={onChangeHandler} />
      </div> <br />
      <div>
        <label id="text">URL</label>
      </div>
      <div className="inputOne">
         <input id="block" type="text" name="url" placeholder=" https://www.atlassian.com/software/jira" onChange={onChangeHandler}/>
      </div> <br />
      <div>
        <label id="text">Description</label>
      </div>
      <div className="inputOne">
         <input id="blocktwo" type="text" name="description" onChange={onChangeHandler} />
      </div>
      <p id="texttwo">Describe the project in as much detail as you'd like.</p>
      <div>
        <label id="text">Project Catergory</label>
      </div>
      <div className="inputOne">
        <select name="category" className="dropDown" placeholder="Select" onChange={onChangeHandler} >
          <option value="">Business</option>
          <option value="">Software</option>
          <option value="">Marketing</option>
        </select> <br />
        <button className="pro-btn">Save Changes</button>
        

      </div>
    </>
  )
};

export default Project;