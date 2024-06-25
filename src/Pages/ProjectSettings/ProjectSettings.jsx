import React, { useContext, useEffect, useState } from "react";
import "./ProjectSettings.css";
import { useProjectContext } from "../../App";
import ProjectToast from "../../components/commons/Toasts/ProjectToast";
import projectService from "../../backend/services/project.service";

function Project() {
  const [showProjectToast, setShowProjectToast] = useState(false);
  const { project, setProject } = useProjectContext();
  const [projectDetails, setProjectDetails] = useState(project);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProjectDetails({
      ...projectDetails,
      [name]: value,
    });
  };
  
  const validateProject = () => {
    const { name, url, description, category } = projectDetails;

    if (
      !name.length ||
      !url.length ||
      !description.length ||
      !category.length
    ) {
      return false;
    }

    return true;
  };

  const onHandleProject = (event) => {
    event.preventDefault();
    const isValid = validateProject();

    if (!isValid) {
      alert("Invalid Inputs");
      return;
    }
    const { name, url, description, category } = projectDetails;
    projectService.setProjectDetails(name, url, description, category);
    setProject(projectDetails);
    setShowProjectToast(true);
  };
  
  return (
    <>
      <div className="pro-heading">
        <label>Projects &nbsp;&nbsp;/ &nbsp;&nbsp; </label>
        <label>{project.name} &nbsp;&nbsp;/ &nbsp;&nbsp;</label>
        <label>Project Details </label>
      </div>
      <div>
        <h1 className="ject-heading">Project Details</h1> <br />
      </div>
      <div>
        <label id="text">Name</label>
      </div>
      <div className="inputOne">
        <input
          id="block"
          type="text"
          name="name"
          placeholder=" Singularity 1.0"
          value={projectDetails.name}
          onChange={onChangeHandler}
        />
      </div>{" "}
      <br />
      <div>
        <label id="text">URL</label>
      </div>
      <div className="inputOne">
        <input
          id="block"
          type="text"
          name="url"
          value={projectDetails.url}
          placeholder=" https://www.atlassian.com/software/jira"
          onChange={onChangeHandler}
        />
      </div>{" "}
      <br />
      <div>
        <label id="text">Description</label>
      </div>
      <div className="inputOne">
        <input
          id="blocktwo"
          type="text"
          value={projectDetails.description}
          name="description"
          onChange={onChangeHandler}
        />
      </div>
      <p id="texttwo">Describe the project in as much detail as you'd like.</p>
      <div>
        <label id="text">Project Catergory</label>
      </div>
      <div className="inputOne">
        <select
          name="category"
          className="dropDown"
          value={projectDetails.category}
          placeholder="Select"
          onChange={onChangeHandler}
        >
          <option value={""} disabled hidden>
            Choose Category
          </option>
          <option value="Business">Business</option>
          <option value="Software">Software</option>
          <option value="Marketing">Marketing</option>
        </select>{" "}
        <br />
        <button onClick={onHandleProject} className="pro-btn">
          Save Changes
        </button>
      </div>
      {showProjectToast && <ProjectToast showToast={showProjectToast} />}
    </>
  );
}

export default Project;
